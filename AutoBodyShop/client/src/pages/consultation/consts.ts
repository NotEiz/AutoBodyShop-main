import * as Yup from "yup";

import { errorMessage } from "../../consts/errors";

export const consultationInitalValues = {
     email: "",
     carMake: "",
     carModel: "",
     carYear: "",
};

export const consultationValidationSchema = Yup.object().shape({
     email: Yup.string().required(errorMessage.requiredField).min(3),
     carMake: Yup.string().required(errorMessage.requiredField).min(2),
     carModel: Yup.string().required(errorMessage.requiredField).min(3),
     carYear: Yup.string().required(errorMessage.requiredField).min(3),
})