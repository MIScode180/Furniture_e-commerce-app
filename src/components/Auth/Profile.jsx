import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import authConfig from "../../Appwrite/authConfig";
import { login } from "../../store/AuthSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name || "");
  const [saving, setSaving] = useState(false);

  if (!user) {
    return <p className="text-center mt-10">Please login to view your profile</p>;
  }

  const handleSave = async () => {
    setSaving(true);
    try {
      if (name !== user.name) {
        await authConfig.account.updateName(name);
      }

      const refreshed = await authConfig.getCurrentUser();
      dispatch(login(refreshed));

      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
    setSaving(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            className="w-full border rounded px-3 py-2 mt-1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-2 bg-emerald-500 text-white rounded-lg"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
