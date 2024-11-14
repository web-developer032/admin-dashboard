function AuthLayout({ children }) {
  return (
    <div className="auth-layout h-screen flex items-center justify-center flex-col mx-auto w-full xl:w-max p-4 md:p-6 2xl:p-10">
      {/* Auth-specific styles or components */}
      {children}
    </div>
  );
}

export default AuthLayout;
