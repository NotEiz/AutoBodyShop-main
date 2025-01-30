import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { BsArrowRepeat, BsLock, BsPerson } from "react-icons/bs";

import style from "./authStyles.module.scss";
import { LOGIN_PATH } from "../../routes/consts";
import { RegUser } from "../../api/users";
import { RegisterInitialValues, RegisterValidationSchema } from "./consts";
import { User } from "../../components/user/types";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: User) => {
    try {
      const newUser = values;
      await RegUser(newUser);
      navigate(LOGIN_PATH);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={style.authContainer}>
        <div className={style.formWrapper}>
          <Formik
            initialValues={RegisterInitialValues}
            onSubmit={handleSubmit}
            validationSchema={RegisterValidationSchema}
          >
            <Form className={style.styledForm}>
              <h1>REGISTER</h1>
              <p>How to i get started Lorem ipsum dolor at?</p>

              <div className={style.errorWrapper}>
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

              <div className={style.errorWrapper}>
                <ErrorMessage
                  className={style.styledError}
                  name="repeatPassword"
                  component="div"
                />
                <div className={style.inputWrapper}>
                  <BsArrowRepeat />
                  <Field
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    type="password"
                  />
                </div>
              </div>

              <button
                className={`${style.btn} ${style.btnFont} ${style.marginTop1}`}
                type="submit"
              >
                Register
              </button>
            </Form>
          </Formik>
          <p style={{ marginBottom: 0 }}>
            ------ <span className={`${style.boldFont}`}>Register</span> with
            Others ------
          </p>

          <div>
            <div
              className={` ${style.btnFont} ${style.otherBtns} ${style.marginTop1} `}
            >
              <FcGoogle />
              Register with <span className={style.boldFont}>Google</span>
            </div>
            <div
              className={` ${style.btnFont} ${style.otherBtns}  ${style.marginTop1} `}
            >
              <FaFacebookSquare className={style.fbColor} />
              Register with <span className={style.boldFont}>Facebook</span>
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

export default Register;
