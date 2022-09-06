import { object, string } from "yup";

export const loginValidationSchema = object().shape({
  email: string().required().email().label("Email"),
  password: string().required().required(),
});
