import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useForm } from "react-hook-form";
function Login() {
  const [cart, setCart, state, incBlue, incRed, incYellow, logIn] =
    useContext(CartContext);
  const emailValidator =
    /^[a-z0-9]([a-z0-9_\-\\.]*)@([a-z0-9_\-\\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/;

  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  console.log(watch());
  function onSubmit() {
    alert("data was submitted");
  } //third Step
  function onError(errors) {
    console.log(errors);
  }

  return (
    <div>
      <div className="form-signin w-50 m-auto">
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
                <span className="text-danger">
                  {errors.emailAddress.message}
                </span>
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
                    value && /(?=.*[!@#\\$%\\^&\\*])/.test(value)
                      ? true
                      : false,
                },
              })}
            />
            <div></div>
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
          <button
            className="btn btn-primary w-100 py-2"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
