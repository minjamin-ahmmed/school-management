import { useState, useEffect } from "react";
import { PencilSimple } from "@phosphor-icons/react";
import banner from "../../assets/banner.jpg";
import user from "../../assets/user-image.png";
import axios from "axios";
import useAuthStore from "../../store/authStore";

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");

  const username = useAuthStore((state) => state.username);
  const hydrated = useAuthStore((state) => state.hydrated);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${API_URL}profile`);
        setProfileData(response.data);
        if (response.data.profile_image) {
          setProfileImage(response.data.profile_image);
        }
        if (response.data.banner_image) {
          setBannerImage(response.data.banner_image);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  const triggerFileInput = (inputId) => {
    document.getElementById(inputId).click();
  };

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center py-24">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <div className="w-11/12 lg:w-6/12 mx-auto relative py-16">
        {/* Banner Section */}
        <div className="w-full h-64 relative">
          <img
            className="w-full h-full object-cover rounded-md"
            src={bannerImage || banner}
            alt="Banner"
          />
          <div
            className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full cursor-pointer"
            onClick={() => triggerFileInput("bannerFileInput")}
          >
            <PencilSimple size={24} weight="bold" />
          </div>
          <input
            id="bannerFileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBannerImageChange}
          />
        </div>

        {/* Profile Section */}
        <div className="absolute bottom-[2%] left-1/2 lg:left-[5%] transform -translate-x-1/2">
          <div className="relative w-36 h-36 rounded-full border-4 border-gray-300 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profileImage || user}
              alt="Profile"
            />
            <div
              className="absolute bottom-2 right-[35%] bg-gray-100 p-2 rounded-full cursor-pointer"
              onClick={() => triggerFileInput("profileFileInput")}
            >
              <PencilSimple size={18} weight="bold" />
            </div>
          </div>
          <input
            id="profileFileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfileImageChange}
          />
        </div>
      </div>
      <div className="w-11/12 lg:w-6/12 mx-auto">
        <h3 className="text-2xl font-bold text-main mt-6 mb-2">
          {username || profileData?.name || "Loading..."}
        </h3>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold ">
            Student Id: {profileData?.student_id || "-"}
          </p>
          <p className="text-gray-700 font-semibold ">
            Class: {profileData?.class || "-"}
          </p>
          <p className="text-gray-700 font-semibold ">
            Group: {profileData?.group || "-"}
          </p>
          <p className="text-gray-800 font-semibold ">
            Teacher Id: {profileData?.teacher_id || "-"}
          </p>
          <p className="text-gray-800 font-semibold ">
            Specialization: {profileData?.specialization || "-"}
          </p>
          <p className="text-gray-700 font-semibold ">
            Education Background: {profileData?.education_background || "-"}
          </p>
          <p className="text-gray-700 font-semibold ">
            Designation: {profileData?.designation || "-"}
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            Location: {profileData?.location || "Dhaka, Bangladesh"}
          </p>
          <p className="text-gray-700 font-semibold  mb-2">
            Contact: {profileData?.contact || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
