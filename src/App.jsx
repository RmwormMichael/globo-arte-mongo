import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import SeccionUno from "./pages/SeccionUno";
import Services from "./pages/Services";
import About from "./pages/About";
import TemplatesGallery from "./pages/TemplateGallery";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { getCurrentUser, isAuthenticated } from "./services/authService";
import AdminUsers from "./components/AdminUsers";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserProvider } from "./context/UserProvider";
import { useUser } from "./hooks/useUser";
import NewOrderForm from "./components/NewOrderForm";
import OrdersList from "./components/OrdersList";
import ClientOrders from "./components/ClientOrders";
import NewOrderFormClient from "./components/NewOrderFormClient";
import ClientProfile from "./components/ClientProfile";
import 'animate.css';
import 'hover.css';

// Componente para la página principal con navegación por secciones
function HomePage() {

  return (
    <div>
      <section id="home">
        <SeccionUno />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="templates">
        <TemplatesGallery />
      </section>
    </div>
  );
}

function AppContent() {
  const { setUser } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [modalType, setModalType] = useState("login");

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getCurrentUser());
    }
  }, [setUser]);

  const handleOpenLogin = () => {
    setModalType("login");
    setShowAuthModal(true);
  };

  const handleOpenRegister = () => {
    setModalType("register");
    setShowAuthModal(true);
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
        onLogout={handleLogout}
      />
      <AuthModal
        show={showAuthModal}
        onClose={handleCloseModal}
        initialForm={modalType}
        onLoginSuccess={handleLoginSuccess}
      />

      <Routes>
        {/* Ruta principal con navegación por secciones */}
        <Route path="/" element={<HomePage />} />


        {/* Rutas de Cliente */}
        <Route
          path="/cliente/my-orders"
          element={
            <ProtectedRoute>
              <ClientOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/new-order"
          element={
            <ProtectedRoute>
              <NewOrderFormClient />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cliente/profile"
          element={
            <ProtectedRoute>
              <ClientProfile />
            </ProtectedRoute>
          }
        />

        {/* Rutas de administración */}
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute requireAdmin={true}>
              <OrdersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/new-order"
          element={
            <ProtectedRoute requireAdmin={true}>
              <NewOrderForm />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;