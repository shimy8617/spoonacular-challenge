import React from "react";
import { useFormik } from "formik";
import { Redirect, Link } from "react-router-dom";
import * as Yup from "yup";
import { swal } from "../../../utils/swal";

//const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = () =>
    Yup.object().shape({
      email: Yup.string().email("Mail inválido").required(required),
      password: Yup.string().required(required),
    });

  const onSubmit = () => {
    const { email, password } = values;
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token === "QpwL5tke4Pnpja7X4") {
          localStorage.setItem("token", data?.token);
          localStorage.setItem("email", data?.email);
          Redirect("/menu", { replace: true });
        } else {
          swal();
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
