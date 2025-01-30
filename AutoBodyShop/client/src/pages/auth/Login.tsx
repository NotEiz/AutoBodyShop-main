import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { FcGoogle } from "react-icons/fc";
import { BsLock, BsPerson } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

import { FindUser } from "../../api/users";
import style from "./authStyles.module.scss";
import { HOME_PATH } from "../../routes/consts";
import { UserContext } from "../../context/UserContext";
import { User } from "../../components/user/types";
import { loginInitialValues, loginValidationSchema } from "./consts";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [error, setError] = useState("");

  const handleSubmit = async (values: User) => {
    try {
      const response = await FindUser();

      const match: User = response.find(
        (user: User) =>
          user.username === values.username && user.password === values.password
      );

      if (match) {
        login(match);
        navigate(HOME_PATH);
      } else {
        setError("Invalid Username or Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.authContainer}>
        <div className={style.formWrapper}>
          <Formik
            initialValues={loginInitialValues}
            onSubmit={handleSubmit}
            validationSchema={loginValidationSchema}
          >
            <Form className={style.styledForm}>
              <h1>LOGIN</h1>
              <p>How to i get started Lorem ipsum dolor at?</p>

              <div className={style.errorWrapper}>
                {error ? <p className={`${style.styledError}`}>{error}</p> : ""}
                <ErrorMessage
                  className={style.styledError}
                  name="username"
                  component="div"
                />

                <div className={style.inputWrapper}>
                  <BsPerson />
                  <Field name="username" placeholder="Username" />
                </div>
              </div>

              <div className={style.errorWrapper}>
                <ErrorMessage
                  className={style.styledError}
                  name="password"
                  component="div"
                />
                <div className={style.inputWrapper}>
                  <BsLock />
                  <Field
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>

              <button
                className={`${style.btn} ${style.btnFont} ${style.marginTop1}`}
                type="submit"
              >
                Login Now
              </button>
            </Form>
          </Formik>
          <p style={{ marginBottom: 0 }}>
            ------ <span className={`${style.boldFont}`}>Login</span> with
            Others ------
          </p>

          <div>
            <div className={style.otherBtns}>
              <FcGoogle />
              Login with <span className={style.boldFont}>Google</span>
            </div>
            <div className={style.otherBtns}>
              <FaFacebookSquare className={style.fbColor} />
              Login with <span className={style.boldFont}>Facebook</span>
            </div>
          </div>
        </div>

        <div className={style.image}>
          <div className={`${style.bluredCard} `}>
            <h2>Very good works are waiting for you Login Now!!!</h2>
            <div className={style.person}></div>
            <div className={style.circle}>
              <BsLightningChargeFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
