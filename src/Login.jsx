import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();

  const [cart, setCart, state, incBlue, incRed, incYellow, logIn, openModal] =
    useContext(CartContext);

  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const { emailAddress, password } = watch();

  function onSubmit() {
    if (state.emailAddress == emailAddress && state.password == password) {
      openModal();
      navigate("/");
      logIn();
    } else {
      toast.warn("user Not found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="form-signin w-200 m-auto">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            name="emailAddress"
            {...register("emailAddress", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <div>
            {errors?.emailAddress && (
              <span className="text-danger">{errors.emailAddress.message}</span>
            )}
          </div>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            {...register("password", {
              required: "Password is required",
              validate: {
                length: (value) =>
                  value && /(?=.*[0-9])/.test(value) ? true : false,
                hasLowerLetter: (value) =>
                  value && /(?=.*[a-z])/.test(value) ? true : false,
                hasUpperLetter: (value) =>
                  value && /(?=.*[A-Z])/.test(value) ? true : false,
                hasSpecialChar: (value) =>
                  value && /(?=.*[!@#\\$%\\^&\\*])/.test(value) ? true : false,
              },
            })}
          />
          <div>
            {errors?.password && errors.password.type === "length" && (
              <span className="text-danger">
                Please fill at least 10 character{" "}
              </span>
            )}
            {errors?.password && errors.password.type === "hasLowerLetter" && (
              <span className="text-danger">
                Password must have a lower alphabet{" "}
              </span>
            )}
            {errors?.password && errors.password.type === "hasUpperLetter" && (
              <span className="text-danger">
                Password must have an Upper alphabet{" "}
              </span>
            )}
            {errors?.password && errors.password.type === "hasSpecialChar" && (
              <span className="text-danger">
                Password must have a SpecialChart{" "}
              </span>
            )}
          </div>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2">
          Sign in
        </button>
      </form>
      <div style={{ paddingTop: "10px" }} onClick={openModal}>
        Register a new Account ?
        <Link to="/register">
          <u>
            <b> Click here.</b>
          </u>
        </Link>
      </div>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Login;
