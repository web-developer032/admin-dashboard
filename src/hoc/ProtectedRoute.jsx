import { Navigate, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import AuthLayout from "../layout/AuthLayout";

function ProtectedRoute({ isAuthRoute }) {
  const isAuthenticated = true; // Replace this with actual authentication logic

  if (!isAuthenticated && !isAuthRoute) {
    return <Navigate to="/auth/signin" />;
  }

  const Layout = isAuthRoute ? AuthLayout : DefaultLayout;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedRoute;
