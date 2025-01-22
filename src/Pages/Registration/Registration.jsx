import { useState } from "react";
import { useForm } from "react-hook-form";
import signUp from "../../assets/registrration.png";
import { Link } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("student");
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({ shouldUnregister: true });

  const API_URL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
     
      if (activeTab === "student") {
        data.role = 8;
        console.log("Student Registration Data:", data);

        const response = await axios.post(`${API_URL}register`, data);

        console.log("Student Registration Response:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Student registered successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else if (activeTab === "teacher") {
        data.role = 9;
        console.log("Teacher Registration Data:", data);

        const response = await axios.post(`${API_URL}register`, data);

        console.log("Teacher Registration Response:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Teacher registered successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }

      reset();
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response?.data || error.message
      );

      Swal.fire({
        title: "Error!",
        text: "Failed to submit registration. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const setTab = (tab) => {
    setActiveTab(tab);
    reset();
  };

  return (
    <div className="py-16 text-white min-h-full">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16">
          <div className="lg:w-1/2">
            <div className="w-full h-[400px]">
              <img
                className="w-full h-full object-cover"
                src={signUp}
                alt="Sign Up"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-4">
              <div className="flex items-start gap-8">
                <button
                  className={`w-1/2 py-2 text-center transition-all duration-300 ${
                    activeTab === "student"
                      ? "btn bg-accent border-none text-white font-bold hover:bg-red-800"
                      : "btn"
                  }`}
                  onClick={() => setTab("student")}
                >
                  Student Register
                </button>
                <button
                  className={`w-1/2 py-2 text-center transition-all duration-300 ${
                    activeTab === "teacher"
                      ? "btn bg-secondary border-none text-black font-bold hover:bg-secondary"
                      : "btn"
                  }`}
                  onClick={() => setTab("teacher")}
                >
                  Teacher Register
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                {activeTab === "student"
                  ? "Student Registration"
                  : "Teacher Registration"}
              </h2>

              {activeTab === "student" && (
                <>
                  <form
                    className="space-y-4 text-main"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-full">
                        <label className="block mb-2 text-sm">First Name</label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("first_name", {
                            required: "First name is required",
                          })}
                        />
                        {errors.first_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.first_name.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <label className="block mb-2 text-sm">Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("last_name", {
                            required: "Last name is required",
                          })}
                        />
                        {errors.last_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.last_name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-full">
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <label className="block mb-2 text-sm">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("phone", {
                            required: "Phone number is required",
                            minLength: {
                              value: 11,
                              message:
                                "Phone number must be at least 11 digits",
                            },
                          })}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-full">
                        <label className="block mb-2 text-sm">Student ID</label>
                        <input
                          type="text"
                          placeholder="Enter your student ID"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("student_id", {
                            required: "Student ID is required",
                          })}
                        />
                        {errors.student_id && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.student_id.message}
                          </p>
                        )}
                      </div>

                      <div className="w-full">
                        <label className="block mb-2 text-sm">Class</label>
                        <input
                          type="text"
                          placeholder="Enter your class"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("class", {
                            required: "Class is required",
                          })}
                        />
                        {errors.class && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.class.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="block mb-2 text-sm">Group</label>
                      <input
                        type="text"
                        placeholder="Enter your group or section"
                        className="w-full px-4 py-2 text-black rounded border"
                        {...register("group", {
                          required: "Group is required",
                        })}
                      />
                      {errors.group && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.group.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm">Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 text-black rounded border"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message:
                              "Password must be at least 6 characters long",
                          },
                        })}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* <div>
                      <label className="block mb-2 text-sm">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full px-4 py-2 text-black rounded border"
                        {...register("confirmPassword", {
                          required: "Confirm password is required",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div> */}

                    <button
                      type="submit"
                      className={
                        "btn w-full px-4 py-2 rounded-md  bg-accent hover:bg-red-700 text-white font-bold"
                      }
                    >
                      Register
                    </button>
                  </form>
                </>
              )}

              {/* Teacher Fields */}
              {activeTab === "teacher" && (
                <>
                  <form
                    className="space-y-4 text-main"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-full">
                        <label className="block mb-2 text-sm">First Name</label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("first_name", {
                            required: "First name is required",
                          })}
                        />
                        {errors.first_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.first_name.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <label className="block mb-2 text-sm">Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("last_name", {
                            required: "Last name is required",
                          })}
                        />
                        {errors.last_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.last_name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-full">
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <label className="block mb-2 text-sm">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("phone", {
                            required: "Phone number is required",
                            minLength: {
                              value: 11,
                              message:
                                "Phone number must be at least 11 digits",
                            },
                          })}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-full">
                        <label className="block mb-2 text-sm">Teacher ID</label>
                        <input
                          type="text"
                          placeholder="Enter your teacher ID"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("teacher_id", {
                            required: "Teacher ID is required",
                          })}
                        />
                        {errors.teacher_id && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.teacher_id.message}
                          </p>
                        )}
                      </div>

                      <div className="w-full">
                        <label className="block mb-2 text-sm">
                          Specialization Subject
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your specialization"
                          className="w-full px-4 py-2 text-black rounded border"
                          {...register("specialization", {
                            required: "Specialization is required",
                          })}
                        />
                        {errors.specialization && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.specialization.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm">Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 text-black rounded border"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message:
                              "Password must be at least 6 characters long",
                          },
                        })}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* <div>
                      <label className="block mb-2 text-sm">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full px-4 py-2 text-black rounded border"
                        {...register("confirmPassword", {
                          required: "Confirm password is required",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div> */}

                    <button
                      type="submit"
                      className={
                        "btn w-full px-4 py-2 rounded-md  bg-secondary hover:bg-secondary text-black font-bold"
                      }
                    >
                      Register
                    </button>
                  </form>
                </>
              )}

              <div>
                <p className="text-sm text-end text-main mt-4">
                  Already Registered?{" "}
                  <Link to="/login">
                    <span className="text-blue-500">Signin</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
