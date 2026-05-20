import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Index';
import Toys from '@/pages/Toys';
import ToyCategory from '@/pages/ToyCategory';
import Toy from '@/pages/Toy';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import Products from '@/pages/admin/Products';
import Categories from '@/pages/admin/Categories';
import LoginPage from '@/pages/admin/LoginPage';
import { ProtectedRoute } from '@/components/admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/toys/:categoryName" element={<ToyCategory />} />
        <Route path="/toys/:categoryId/:toyId" element={<Toy />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
        />
        <Route
          path="/admin/products"
          element={<ProtectedRoute><Products /></ProtectedRoute>}
        />
        <Route
          path="/admin/categories"
          element={<ProtectedRoute><Categories /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
