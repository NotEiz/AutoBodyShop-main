import * as Yup from "yup";

import { errorMessage } from "../../consts/errors";

export const loginInitialValues = {
  username: "",
  password: "",
};

export const RegisterInitialValues = {
  username: "",
  password: "",
  repeatPassword: "",
};

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required(errorMessage.requiredField).min(3),
  password: Yup.string().required(errorMessage.requiredField).min(8),
});

export const RegisterValidationSchema = Yup.object().shape({
  username: Yup.string().required(errorMessage.requiredField).min(3),
  password: Yup.string().required(errorMessage.requiredField).min(8),
  repeatPassword: Yup.string()
    .required(errorMessage.requiredField)
    .oneOf([Yup.ref("password")], errorMessage.unmachedPassword),
});
