import { useForm } from "react-hook-form";
import loginImg from "../../assets/login-page.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ shouldUnregister: true });

  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}login`, data);
      console.log(response, "fffffffffffffffffffffffff");

      if (response.status === 200) {
        const { token } = response.data;
        const { first_name, last_name } = response.data.data;

        setUser(first_name + " " + last_name, token);

        Swal.fire({
          title: "Success!",
          text: "Student Login successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();

        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed Login. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="w-11/12 lg:w-6/12 mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16">
        <div className="lg:w-1/2">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={loginImg}
              alt="Sign Up"
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-center text-accent font-bold text-4xl mb-4">
            Sign In to Continue
          </h2>
          <form
            className="space-y-4 text-main"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={
                "btn bg-accent text-white font-bold w-full px-4 py-2 rounded-md"
              }
            >
              Sign In
            </button>
          </form>

          <div className="mt-4">
            <p className="text-sm text-end">
              Not Registered yet?{" "}
              <Link to="/sign-up">
                <span className="text-blue-500">Signin</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
