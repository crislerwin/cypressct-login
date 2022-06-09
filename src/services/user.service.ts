import { api } from "./api";

export const userSignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/signin", { email, password });
  const { token } = response.data;
  localStorage.setItem("token", token);
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return response.data;
};
