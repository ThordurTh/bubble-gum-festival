import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function LastStepForm(
  regularTickets,
  vipTickets,
  campingSpot,
  greenCamping,
  tentSetup1,
  tentSetup2,
  ownTent,
  firstName,
  lastName,
  reserveID
) {
  function someFunction({ campingSpot }) {
    console.log({ campingSpot });
  }

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
        .required("Credit Card Number Required")
        .matches(/\d/, "Credit Card must only be numbers"),
      month: Yup.string()
        .required("Month Number Required")
        .matches(/\d/, "Month must only be numbers"),
      year: Yup.string()
        .required("Year is Required")
        .matches(/\d/, "Year must only be numbers"),
      cww: Yup.string()
        .required("CWW is Required")
        .matches(/\d/, "CWW must only be numbers"),
    }),

    onSubmit: (values) => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGhsbHJ4dGdsd2Z2eWFnZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3Nzc1ODAsImV4cCI6MTk4NjM1MzU4MH0.eFsC2swBs_Ue_3gaotH8lxAyIwSiupUuuozfu5KDQuE",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGhsbHJ4dGdsd2Z2eWFnZmR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDc3NzU4MCwiZXhwIjoxOTg2MzUzNTgwfQ.NWTxNAJ4BLntV1L3RyBdAZ1ogSVnfujKVZ_Y3ErXv4c",
          Prefer: "return=representation",
        },
        body: `{
          "buyerFirstName": ${JSON.stringify(values.buyerFirstName)},
          "buyerLastName": ${JSON.stringify(values.buyerLastName)},
          "buyerEmail": ${JSON.stringify(values.buyerEmail)},
          "street": ${JSON.stringify(values.street)},
          "city": ${JSON.stringify(values.city)},
          "postcode": ${JSON.stringify(values.postcode)}
        }`,
      };

      fetch(
        "https://ypdhllrxtglwfvyagfdu.supabase.co/rest/v1/customerinfo",
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label htmlFor="buyerFirstName">First Name:</label>
          <input
            id="buyerFirstName"
            name="buyerFirstName"
            type="text"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
          />
          {formik.touched.street && formik.errors.street ? (
            <p className="error">{formik.errors.street}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postcode}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={12}
          />
          {formik.touched.creditCard && formik.errors.creditCard ? (
            <p className="error">{formik.errors.creditCard}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="month">Month</label>
          <input
            className="month"
            id="month"
            name="month"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={2}
          />
          {formik.touched.month && formik.errors.month ? (
            <p className="error">{formik.errors.month}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="year">Year:</label>
          <input
            className="year"
            id="year"
            name="year"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={4}
          />
          {formik.touched.year && formik.errors.year ? (
            <p className="error">{formik.errors.year}</p>
          ) : null}
        </div>

        <div className="input-container">
          <label htmlFor="cww">CWW:</label>
          <input
            className="cww"
            id="cww"
            name="cww"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={4}
          />
          {formik.touched.cww && formik.errors.cww ? (
            <p className="error">{formik.errors.cww}</p>
          ) : null}
        </div>

        <button type="submit" onClick={someFunction}>
          Buy
        </button>
      </form>
    </>
  );
}

function sendReservation(props) {
  fetch("https://localhost:8080/fullfill-reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{
      "id": ${JSON.stringify(props.reserveID)},
    }`,
  })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export default LastStepForm;
