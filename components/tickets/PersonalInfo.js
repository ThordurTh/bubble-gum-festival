import { useFormik } from "formik";
import * as Yup from "yup";

function PersonalInfo() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Here we do what we want with the values, post them to the database
    },
  });
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name..."
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
      </div>

      <div className="input-container">
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name..."
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
      </div>

      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email..."
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonalInfo;
