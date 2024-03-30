import Styles from "./Register.module.css";
import { useFormik } from "formik";

function Register() {
  // function submitRegister() {
  // }

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: () => {
      console.log("hello");
    },
  });

  return (
    <>
      <div className="w-75 mx-auto py-5">
        <h3>Register now</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> Name:</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
          />

          <label htmlFor="email"> Email:</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="phone"> Phone:</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tel"
            name="phone"
            id="phone"
          />

          <label htmlFor="password"> Password:</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            name="password"
            id="password"
          />

          <label htmlFor="rePassword"> Password:</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            type="password"
            name="rePassword"
            id="rePassword"
          />

          <button className="bg-main  btn text-white mt-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default Register