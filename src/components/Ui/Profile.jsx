import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authConfig from "../../Appwrite/authConfig";
import { login, logout as logoutAction } from "../../store/AuthSlice";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch user when component loads (important for OAuth/refresh)
  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await authConfig.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser));
          setName(currentUser.name || "");
        } else {
          navigate("/"); // redirect if no user
        }
      } catch {
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [dispatch, navigate]);

  // Save name change
  const handleSave = async () => {
    try {
      await authConfig.account.updateName(name);
      const updatedUser = await authConfig.getCurrentUser();
      dispatch(login(updatedUser));
      alert("Profile updated!");
    } catch {
      alert("Failed to update profile.");
    }
  };

  // Logout
  const handleLogout = async () => {
    await authConfig.logout();
    dispatch(logoutAction());
    navigate("/");
  };

  if (loading) return <p className="text-center mt-6">Loading profile...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg mt-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

      <label className="block mb-2 font-medium">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full mb-4"
      />

      <button onClick={handleSave} className="btn btn-primary w-full mb-4">
        Save Changes
      </button>

      <button onClick={handleLogout} className="btn btn-error w-full">
        Logout
      </button>
    </div>
  );
}
