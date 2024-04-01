// import Styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {


  // Custom validation
  // function validate(values){

  // let phoneRegex=/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
  // let emailRegex= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  // let errors = {};

  // if(!values.name){ errors.name = 'name is required'}
  // else if(values.name.length < 3){ errors.name = 'enter a valid name'}

  // if(!values.phone){ errors.phone = 'phone is required'}
  // else if(!phoneRegex.test(values.phone)){errors.phone = 'enter a valid phone number'}

  // if(!values.email){ errors.email = 'email is required'}
  // else if(!emailRegex.test(values.email)){errors.email = 'enter a valid email number'}

  // if(!values.password){ errors.password = 'password is required'}
  // else if(!passRegex.test(values.password)){errors.password = 'enter a valid password: At least 8 characters which contains number, lowercase and uppercase letter'}

  // if(!(values.rePassword == values.password)){errors.rePassword = 'enter the same password'}
  // return errors
  // }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  function submitRegister(values) {
    console.log(values);
  }

  let validation = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name must be at most 10 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("email not valid to register ")
      .required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Your phone is invalid")
      .required("Please enter your phone"),
    password: Yup.string("")
      .matches(passwordRegex,"Enter a valid password: At least 8 characters  which contains number, lowercase and uppercase letter").required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Enter the same password").required("Enter again your password to confirm "),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validation,
    onSubmit: submitRegister,
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
          {formik.errors.name && formik.touched.name && (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.name}
            </div>
          )}

          {/* {formik.errors.name && formik.touched.phone ? (
          <div className="alert mt-2 p-2 alert-danger"> {formik.errors.name} </div>  ) 
          : ( "" )  } */}

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
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.email}
            </div>
          )}

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
          {formik.errors.phone && formik.touched.phone && (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.phone}
            </div>
          )}

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
          {formik.errors.password && formik.touched.password && (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.password}
            </div>
          )}

          <label htmlFor="rePassword">Validate your Password:</label>
          <input
            className="form-control mb-2"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            type="password"
            name="rePassword"
            id="rePassword"
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="alert alert-danger mt-2 p-2">
              {formik.errors.rePassword}
            </div>
          )}

          <button className="bg-main  btn text-white mt-2" disabled={!(formik.isValid && formik.dirty)} type="submit" >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
