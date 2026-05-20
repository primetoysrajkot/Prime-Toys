import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

// *************** Categories ***************

// Fetch all categories
export const getCategories = async () => {
  const categoriesCollection = collection(db, "categories");
  const snapshot = await getDocs(categoriesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Fetch a single category by ID
export const getCategory = async (categoryId) => {
  if (!categoryId) return null;
  const categoryDoc = doc(db, "categories", categoryId);
  const snapshot = await getDoc(categoryDoc);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  }
  return null;
};

// Add a new category
export const addCategory = async (category) => {
  await addDoc(collection(db, "categories"), category);
  return await getCategories(); // Return updated list
};

// Update a category
export const updateCategory = async (categoryId, updatedData) => {
  const categoryDoc = doc(db, "categories", categoryId);
  await updateDoc(categoryDoc, updatedData);
  return await getCategories(); // Return updated list
};

// Delete a category
export const deleteCategory = async (categoryId) => {
  const categoryDoc = doc(db, "categories", categoryId);
  await deleteDoc(categoryDoc);
  return await getCategories(); // Return updated list
};

// *************** Toys (Sub-categories) ***************

// Fetch a single toy by category ID and toy ID
export const getToy = async (categoryId, toyId) => {
  if (!categoryId || !toyId) return null;
  const category = await getCategory(categoryId);
  if (category && category.toys) {
    return category.toys.find(toy => toy.id === toyId);
  }
  return null;
};


// Update a sub-category (toy)
export const updateSubCategory = async (
  categoryId,
  subCategoryId,
  updatedData
) => {
  const categories = await getCategories();
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return categories;

  const toyToUpdate = category.toys.find(toy => toy.id === subCategoryId);
  if(!toyToUpdate) return categories;

  const categoryDoc = doc(db, "categories", categoryId);
  await updateDoc(categoryDoc, {
    toys: arrayRemove(toyToUpdate),
  });

  await updateDoc(categoryDoc, {
    toys: arrayUnion({ ...toyToUpdate, ...updatedData }),
  });

  return await getCategories(); 
};

// Delete a sub-category (toy)
export const deleteSubCategory = async (categoryId, subCategoryId) => {
  const categories = await getCategories();
  const category = categories.find(cat => cat.id === categoryId);
    if (!category) return categories;

  const toyToRemove = category.toys.find(toy => toy.id === subCategoryId);
    if(!toyToRemove) return categories;

  const categoryDoc = doc(db, "categories", categoryId);
  await updateDoc(categoryDoc, {
    toys: arrayRemove(toyToRemove),
  });

  return await getCategories();
};
