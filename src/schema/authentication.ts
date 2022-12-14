import { object, string } from "yup";

export const loginValidationSchema = object().shape({
  username: string().required().label("Username"),
  password: string().required().required(),
});

export const registerValidationSchema = object().shape({
  username: string().required().label("Username"),
  password: string().required().required().label("Password"),
  email: string().required().email().label("Email"),
  name: string().required().label("Name"),
});
