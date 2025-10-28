<<<<<<< HEAD
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import authConfig from "../../Appwrite/authConfig";
// import { login, setError, setLoading } from "../../store/authSlice";
// import { FcGoogle } from "react-icons/fc";
// import { HiEye, HiEyeOff } from "react-icons/hi";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Handle change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Email/Password login
//  const handleLogin = async (e) => {
//   e.preventDefault();
//   dispatch(setLoading(true));
//   try {
//     await authConfig.login({ email: form.email, password: form.password });

//     const currentUser = await authConfig.getCurrentUser();
//     if (!currentUser) throw new Error("Login failed. User not found.");

//     dispatch(login(currentUser));
//     navigate("/profile");
//   } catch (err) {
//     dispatch(setError(err?.message || "Login failed"));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };


//   // Google OAuth
//   const handleGoogleLogin = async () => {
//     try {
//        authConfig.loginWithGoogle();
//     } catch (err) {
//       dispatch(setError(err.message));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="card w-full max-w-md bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
//         <div className="card-body p-6">
//           {/* Title */}
//           <h2 className="text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Welcome Back
//           </h2>
//           <p className="text-center text-gray-500 mb-4 text-md font-medium">
//             Please log in to continue
//           </p>

//           {/* Form */}
//           <form
//             onSubmit={handleLogin}
//             className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300"
//           >
//             {/* Email */}
//             <div>
//               <label className="label font-semibold text-sm py-3">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-primary font-medium"
//                 required
//               />
//             </div>
//             {/* Password */}
//             <div>
//               <label className="label font-semibold text-sm py-3 ">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={form.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-primary font-medium pr-10"
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="btn btn-primary w-full rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
//             >
//               Login
//             </button>
//           </form>

//           {/* Google Login */}
//           <div className="divider text-sm">OR</div>
//           <button
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full gap-2 rounded-xl hover:shadow-md font-medium"
//           >
//             <FcGoogle size={20} />
//             Continue with Google
//           </button>

//           {/* Signup Link */}
//           <p className="text-center mt-5 text-sm text-gray-500">
//             Don’t have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-primary font-semibold hover:underline"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



=======
>>>>>>> 106236a (Fix: case-sensitive import for authSlice)
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authConfig from "../../Appwrite/authConfig";
<<<<<<< HEAD
import { login, setError, setLoading } from "../../store/authSlice";
=======
import { login, setError, setLoading } from "../../store/AuthSlice";
>>>>>>> 106236a (Fix: case-sensitive import for authSlice)
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Grab auth error from Redux to display it
  const authError = useSelector((state) => state.auth.error);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      // Create session
      const session = await authConfig.login({
        email: form.email,
        password: form.password,
      });
      console.log("Session created:", session);

      // Get user
      const currentUser = await authConfig.getCurrentUser();
      console.log("Fetched user:", currentUser);

      if (!currentUser) throw new Error("Login failed. User not found.");

      dispatch(login(currentUser));
      navigate("/profile");
    } catch (err) {
      console.error("Login error:", err);
      dispatch(setError(err?.message || "Login failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Google OAuth login
  const handleGoogleLogin = async () => {
    try {
      authConfig.loginWithGoogle();
    } catch (err) {
      console.error("Google login error:", err);
      dispatch(setError(err?.message || "Google login failed"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
        <div className="card-body p-6">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-4 text-md font-medium">
            Please log in to continue
          </p>

          {/* Error Message */}
          {authError && (
            <div className="mb-4 text-center text-red-500 font-medium text-sm">
              {authError}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300"
          >
            {/* Email */}
            <div>
              <label className="label font-semibold text-sm py-3">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-primary font-medium"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label font-semibold text-sm py-3 ">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-primary font-medium pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
              Login
            </button>
          </form>

          {/* Google Login */}
          <div className="divider text-sm">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full gap-2 rounded-xl hover:shadow-md font-medium"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center mt-5 text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
