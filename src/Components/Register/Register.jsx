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
    onSubmit: () => {     console.log("hello");
  }
  });

  return (
    <>
      <div className="w-75 mx-auto py-5">
        <h3>Register now</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> Name:</label>
          <input
            className="form-control"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
          />
          <button className="bg-main  btn text-white mt-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
