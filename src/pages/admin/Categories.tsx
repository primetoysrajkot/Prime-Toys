import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  addCategory,
  deleteCategory,
  deleteSubCategory,
  updateSubCategory,
  updateCategory,
  getCategories,
} from "@/data/toys";
import { useEffect, useState } from "react";
import { PlusCircle, Trash2, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { uploadImage } from "@/lib/firebase";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);

  const [editedName, setEditedName] = useState("");
  const [editedImage, setEditedImage] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [editedSubCategories, setEditedSubCategories] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
      setIsLoading(false);
    };
    loadCategories();
  }, []);

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, ""]);
  };

  const handleSubCategoryChange = (index: number, value: string) => {
    const newSubCategories = [...subCategories];
    newSubCategories[index] = value;
    setSubCategories(newSubCategories);
  };

  const handleSubmit = async () => {
    if (categoryName) {
      setIsSubmitting(true);
      const newCategory = {
        // No ID needed, Firestore will generate it
        name: categoryName,
        icon: "🆕",
        toys: subCategories.map((sub) => ({
          id: sub.toLowerCase().replace(/ /g, "-"),
          name: sub,
          description: "",
          images: [],
        })),
      };
      const updatedCategories = await addCategory(newCategory);
      setCategories(updatedCategories);
      setCategoryName("");
      setSubCategories([]);
      setIsSubmitting(false);
      setOpen(false);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    const updatedCategories = await deleteCategory(categoryId);
    setCategories(updatedCategories);
  };

  const handleDeleteSubCategory = async (categoryId: string, subCategoryId: string) => {
    const updatedCategories = await deleteSubCategory(categoryId, subCategoryId);
    setCategories(updatedCategories);
    setSelectedCategory(updatedCategories.find(cat => cat.id === categoryId));
  };

  const handleEditSubCategory = (category, subCategory) => {
    setSelectedCategory(category);
    setEditingSubCategory(subCategory);
    setEditedName(subCategory.name);
    setError(null);
  };

  const handleUpdateSubCategory = async () => {
    if (!editedName || !selectedCategory || !editingSubCategory) return;

    setIsSubmitting(true);
    setError(null);

    try {
      let imageUrl = editingSubCategory.images && editingSubCategory.images[0] || null;
      if (editedImage) {
        imageUrl = await uploadImage(editedImage);
      }

      const updatedCategories = await updateSubCategory(
        selectedCategory.id,
        editingSubCategory.id,
        {
          name: editedName,
          images: [imageUrl],
        }
      );
      setCategories(updatedCategories);
      setEditingSubCategory(null); 
    } catch (err) {
      setError(
        "Image upload failed. Please try again. Ensure you are connected to the internet and have permission to upload files."
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setEditedImage(null);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setEditedCategoryName(category.name);
    setEditedSubCategories(category.toys);
  };

  const handleUpdateCategory = async () => {
    if (editedCategoryName && editingCategory) {
      setIsSubmitting(true);
      const updatedCategories = await updateCategory(editingCategory.id, {
        name: editedCategoryName,
        toys: editedSubCategories,
      });
      setCategories(updatedCategories);
      setIsSubmitting(false);
      setEditingCategory(null);
    }
  };

  const handleEditedSubCategoryChange = (index, value) => {
    const newSubCategories = [...editedSubCategories];
    newSubCategories[index].name = value;
    setEditedSubCategories(newSubCategories);
  };

  const addEditedSubCategory = () => {
    const newSubCategories = [
      ...editedSubCategories,
      { id: Date.now().toString(), name: "", description: "", images: [] },
    ];
    setEditedSubCategories(newSubCategories);
  };

  const removeEditedSubCategory = (index) => {
    const newSubCategories = [...editedSubCategories];
    newSubCategories.splice(index, 1);
    setEditedSubCategories(newSubCategories);
  };

  const closeEditSubCategoryDialog = () => {
    setEditingSubCategory(null);
    setEditedImage(null);
    setError(null);
  };

  if (isLoading) {
    return <AdminLayout><div>Loading...</div></AdminLayout>;
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add Category</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="category-name">Category Name</Label>
                <Input
                  id="category-name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div>
                <Label>Sub-categories</Label>
                {subCategories.map((sub, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <Input
                      value={sub}
                      onChange={(e) =>
                        handleSubCategoryChange(index, e.target.value)
                      }
                      placeholder={`Sub-category ${index + 1}`}
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddSubCategory}
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Sub-category
                </Button>
              </div>
              <Button onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Toy Count</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="py-2 px-4 border-b">
                  <Button
                    variant="link"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.name}
                  </Button>
                </td>
                <td className="py-2 px-4 border-b">
                  {category.toys.length}
                </td>
                <td className="py-2 px-4 border-b">
                   <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditCategory(category)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the category and all its subcategories.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteCategory(category.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCategory && (
        <Dialog
          open={!!selectedCategory}
          onOpenChange={() => setSelectedCategory(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedCategory.name} Subcategories</DialogTitle>
            </DialogHeader>
            <div>
              {selectedCategory.toys.map((toy) => (
                <div
                  key={toy.id}
                  className="flex items-center justify-between mb-2"
                >
                  <span>{toy.name}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditSubCategory(selectedCategory, toy)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the subcategory.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() =>
                              handleDeleteSubCategory(selectedCategory.id, toy.id)
                            }
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
      {editingCategory && (
        <Dialog
          open={!!editingCategory}
          onOpenChange={() => setEditingCategory(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="category-name">Category Name</Label>
                <Input
                  id="category-name"
                  value={editedCategoryName}
                  onChange={(e) => setEditedCategoryName(e.target.value)}
                />
              </div>
              <div>
                <Label>Sub-categories</Label>
                {editedSubCategories.map((sub, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <Input
                      value={sub.name}
                      onChange={(e) =>
                        handleEditedSubCategoryChange(index, e.target.value)
                      }
                      placeholder={`Sub-category ${index + 1}`}
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeEditedSubCategory(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addEditedSubCategory}
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Sub-category
                </Button>
              </div>
              <Button onClick={handleUpdateCategory} disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {editingSubCategory && (
        <Dialog
          open={!!editingSubCategory}
          onOpenChange={closeEditSubCategoryDialog}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Subcategory</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="sub-category-name">Subcategory Name</Label>
                <Input
                  id="sub-category-name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="sub-category-image">Image</Label>
                <Input
                  id="sub-category-image"
                  type="file"
                  onChange={(e) => setEditedImage(e.target.files[0])}
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              <Button onClick={handleUpdateSubCategory} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AdminLayout>
  );
}

export default Categories;
