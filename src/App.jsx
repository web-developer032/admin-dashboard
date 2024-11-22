import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./hoc/PageTitle";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Calendar from "./pages/Calendar";
import Chart from "./pages/Chart";
import ECommerce from "./pages/Dashboard/ECommerce";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Couple from "./pages/Dashboard/Couple";
import Vendor from "./pages/Dashboard/Vendor";
import useReduxState from "./hooks/useReduxState";

function App() {
  const auth = useReduxState("auth");

  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute isAuthRoute={false} />}>
        <Route
          index={true}
          element={
            <PageTitle title="eCommerce | Ejuno - Admin Dashboard">
              <ECommerce />
            </PageTitle>
          }
        />
        <Route
          path="/couples"
          element={
            <PageTitle title="Couple | Ejuno - Admin Dashboard">
              <Couple />
            </PageTitle>
          }
        />
        <Route
          path="/vendors"
          element={
            <PageTitle title="Vendor | Ejuno - Admin Dashboard">
              <Vendor />
            </PageTitle>
          }
        />
        <Route
          path="/calendar"
          element={
            <PageTitle title="Calendar | Ejuno - Admin Dashboard">
              <Calendar />
            </PageTitle>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTitle title="Profile | Ejuno - Admin Dashboard">
              <Profile />
            </PageTitle>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <PageTitle title="Form Elements | Ejuno - Admin Dashboard">
              <FormElements />
            </PageTitle>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <PageTitle title="Form Layout | Ejuno - Admin Dashboard">
              <FormLayout />
            </PageTitle>
          }
        />
        <Route
          path="/tables"
          element={
            <PageTitle title="Tables | Ejuno - Admin Dashboard">
              <Tables />
            </PageTitle>
          }
        />
        <Route
          path="/settings"
          element={
            <PageTitle title="Settings | Ejuno - Admin Dashboard">
              <Settings />
            </PageTitle>
          }
        />
        <Route
          path="/chart"
          element={
            <PageTitle title="Basic Chart | Ejuno - Admin Dashboard">
              <Chart />
            </PageTitle>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <PageTitle title="Alerts | Ejuno - Admin Dashboard">
              <Alerts />
            </PageTitle>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <PageTitle title="Buttons | Ejuno - Admin Dashboard">
              <Buttons />
            </PageTitle>
          }
        />
      </Route>

      <Route element={<ProtectedRoute isAuthRoute={true} />}>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
