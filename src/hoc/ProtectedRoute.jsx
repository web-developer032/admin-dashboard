import { Navigate, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import AuthLayout from "../layout/AuthLayout";
import useReduxState from "../hooks/useReduxState";

function ProtectedRoute({ isAuthRoute }) {
  const auth = useReduxState("auth");

  if (!auth.user && !isAuthRoute) {
    return <Navigate to="/auth/signin" />;
  }

  if (auth.user && isAuthRoute) {
    return <Navigate to="/" />;
  }

  const Layout = isAuthRoute ? AuthLayout : DefaultLayout;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedRoute;
