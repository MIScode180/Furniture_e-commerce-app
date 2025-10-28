import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authConfig from "../../Appwrite/authConfig";
import { login, setError, setLoading } from "../../store/AuthSlice";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";


export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSignup = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    dispatch(setError("Passwords do not match"));
    return;
  }

  dispatch(setLoading(true));
  try {
    // Create user
    await authConfig.Signup({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    // Immediately log them in (creates session)
    await authConfig.login({
      email: form.email,
      password: form.password,
    });

    // Fetch logged in user
    const currentUser = await authConfig.getCurrentUser();
    dispatch(login(currentUser));

    navigate("/profile");
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};


  // Google OAuth signup
  const handleGoogleSignup = async () => {
    try {
       authConfig.loginWithGoogle();
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
        <div className="card-body p-6">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-4 text-md font-medium">
            Join us and start your journey
          </p>

          {/* Form */}
          <form
            onSubmit={handleSignup}
            className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300"
          >
            {/* Name */}
            <div>
              <label className="label font-semibold text-sm py-3">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-primary font-medium"
                required
              />
            </div>

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
              <label className="label font-semibold text-sm py-3">
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
              Sign Up
            </button>
          </form>

          {/* Google Signup */}
          <div className="divider text-sm">OR</div>
          <button
            onClick={handleGoogleSignup}
            className="btn btn-outline w-full gap-2 rounded-xl hover:shadow-md font-medium"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-5 text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Log In
            </button>
          </p>
        </div>
      </div>  
    </div>
  );
}


