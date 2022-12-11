import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function LastStepForm(props) {
  const formik = useFormik({
    initialValues: {
      buyerFirstName: "",
      buyerLastName: "",
      buyerEmail: "",
      street: "",
      city: "",
      postcode: "",
    },
    validationSchema: Yup.object({
      buyerFirstName: Yup.string().required("First Name is Required"),
      buyerLastName: Yup.string().required("Last Name is Required"),
      buyerEmail: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      street: Yup.string().required("Street is Required"),
      city: Yup.string().required("City is Required"),
      postcode: Yup.string()
        .required("Postcode Required")
        .matches(/\d/, "Postcode must only be numbers!"),
      creditCard: Yup.string()
        .required("Credit Card Number Required...")
        .matches(/\d/, "Credit Card must only be numbers"),
    }),

    onSubmit: (values) => {
      // Here we do what we want with the values, post them to the database
    },
  });
  console.log(formik.values);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label htmlFor="buyerFirstName">First Name:</label>
          <input
            id="buyerFirstName"
            name="buyerFirstName"
            type="text"
            placeholder="First Name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.buyerFirstName}
          />

          {formik.touched.buyerFirstName && formik.errors.buyerFirstName ? (
            <p className="error">{formik.errors.buyerFirstName}</p>
          ) : null}
        </div>
        <div className="input-container">
          <label htmlFor="buyerLastName">Last Name:</label>
          <input
            id="buyerLastName"
            name="buyerLastName"
            type="text"
            placeholder="Last Name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.buyerLastName}
          />
          {formik.touched.buyerLastName && formik.errors.buyerLastName ? (
            <p className="error">{formik.errors.buyerLastName}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="buyerEmail">Email:</label>
          <input
            id="buyerEmail"
            name="buyerEmail"
            type="email"
            placeholder="Email..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.buyerEmail}
          />
          {formik.touched.buyerEmail && formik.errors.buyerEmail ? (
            <p className="error">{formik.errors.buyerEmail}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="street">Street Name:</label>
          <input
            id="street"
            name="street"
            type="text"
            placeholder="Street Name..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
          />
          {formik.touched.street && formik.errors.street ? (
            <p className="error">{formik.errors.street}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="city">Street Name:</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="City..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <p className="error">{formik.errors.city}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="postcode">Postcode:</label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            placeholder="Postcode..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postcode}
            maxLength={4}
          />
          {formik.touched.postcode && formik.errors.postcode ? (
            <p className="error">{formik.errors.postcode}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="creditCard">Credit Card Number:</label>
          <input
            className="credit-card"
            id="creditCard"
            name="creditCard"
            type="text"
            placeholder="Credit Card Number..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.creditCard}
            maxLength={16}
          />
          {formik.touched.creditCard && formik.errors.creditCard ? (
            <p className="error">{formik.errors.creditCard}</p>
          ) : null}
        </div>

        <button type="submit">Buy</button>
      </form>
    </>
  );
}

export default LastStepForm;
