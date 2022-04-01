import React from "react";

import logoImg from "../../assets/img/logo.svg";
import logInIcon from "../../assets/icons/login.svg";

import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Login() {
  return (

    <div id="login-page">
      <main className="form-container box-shadow">
        <Link to="/">
          <img src={logoImg} width="300" alt="Pyxies Report" />
        </Link>

        <div className="text-center mt-20">
          <h1>Seja bem-vindo</h1>
          <p>Preencha os campos para entrar.</p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={async (values) => {}}
        >
          {({ errors, touched }) => (
            <Form className="form mt-20">
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemplo@mail.com"
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="email">Senha</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha aqui"
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <button type="submit">
                <img src={logInIcon} width="30" alt="Confirmar" />
                Acessar conta
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
