import axios from "axios";

import { Consultation } from "../pages/consultation/types";

export const newConsultation = async (consultation: Consultation) => {
     const response = await axios.post("/consultations", consultation);
     return response.data;
};