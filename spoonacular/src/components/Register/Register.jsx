import React from "react";
import { useFormik } from "formik";

export const Register = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, onSubmit });

  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <div>{errors.username}</div>}
        </div>
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
