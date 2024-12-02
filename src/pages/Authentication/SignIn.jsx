import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import Mobile from "../../assets/images/other/SignInMobile.svg";
import EmailIcon from "../../assets/Icons/EmailIcon";
import LockIcon from "../../assets/Icons/LockIcon";
import GoogleIcon from "../../assets/Icons/GoogleIcon";
import { useLoginAdminMutation } from "../../redux/auth/authApi";
import createToast, { TOAST_TYPE } from "../../hooks/createToast";
import { debounce, routes } from "../../lib/utils";

const SignIn = () => {
  const [loginAdmin] = useLoginAdminMutation();
  const navigate = useNavigate();

  const handleLogin = debounce(async (email, password) => {
    if (!email || !password) {
      return createToast(
        "SignIn Failed",
        "Invalid Email or Password!",
        TOAST_TYPE.ERROR,
      );
    }

    const data = await loginAdmin({ email, password });

    if (data?.error) {
      return createToast(
        "SignIn Failed",
        data?.error?.data?.message,
        TOAST_TYPE.ERROR,
      );
    }
    if (data?.data) {
      return navigate(routes.home);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission immediately
    const email = e.target.email.value?.trim();
    const password = e.target.password.value?.trim();
    handleLogin(email, password); // Call the debounced login function
  };

  return (
    <section className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <section className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 block " to="/">
              <img
                className="hidden dark:block mx-auto"
                src={Logo}
                alt="Logo"
              />
              <img className="dark:hidden mx-auto" src={Logo} alt="Logo" />
            </Link>

            <p className="2xl:px-20 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse.
            </p>

            <span className="mt-15 inline-block">
              <img src={Mobile} alt="mobile svg" />
            </span>
          </div>
        </div>

        <div className="w-full min-w-100 border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Start for free</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to Ejuno
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <span className="absolute right-4 top-4">
                    <EmailIcon />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="6+ Characters, 1 Capital letter"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <span className="absolute right-4 top-4">
                    <LockIcon />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

              {/* <button className="w-full flex items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                <span>
                  <GoogleIcon />
                </span>
                Sign in with Google
              </button> */}
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SignIn;
