import React from "react";
import LoginForm from "../../components/AuthComponents/LoginForm";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-3/6 sm:h-screen flex items-center justify-center sm:pt-5 sm:pl-5 md:w-3/5 lg:pl-16 lg:pt-5">
          <div className="h-[98%] w-full sm:text-right sm:pr-12 bg-black sm:pt-24 sm:pl-14 text-green-500 sm:rounded-t-lg lg:pt-44">
            <h2 className="py-4 text-xl text-center sm:text-5xl sm:text-right font-bold sm:mb-5 sm:pl-4 xl:text-6xl ">
              NITH-Mentorship
            </h2>
            <p className="hidden sm:block font-light sm:pl-3 sm:text-lg text-white xl:text-xl xl:pl-16">
              ⭐Reviving Mentorship Culture
            </p>
            <p className="hidden sm:block font-light sm:pl-3 sm:text-lg text-white xl:text-xl xl:pl-16">
              ⭐1:1 Mentorship
            </p>
            <p className="hidden sm:block font-light sm:pl-3 sm:text-lg text-white xl:text-xl xl:pl-16">
              ⭐Career-Boosting Referrals
            </p>
          </div>
        </div>
        <div className="w-full sm:w-3/6 pt-7 sm:pt-14 md:w-2/5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
