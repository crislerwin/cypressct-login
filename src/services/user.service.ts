import { api } from "./api";

type UserResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
};

export const userSignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserResponse> => {
  const response = await api.post("/auth/signin", { email, password });
  const { token } = response.data;
  localStorage.setItem("token", token);
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return response.data;
};
