import { object, string } from "yup";

export const loginValidationSchema = object().shape({
  username: string().required().label("Username"),
  password: string().required().required(),
});
