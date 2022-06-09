import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { userSignIn } from "../../services/user.service";

type FormData = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const { mutate } = useMutation(userSignIn, {
    onSuccess: (data) => {
      // When have token, redirect to home
      console.log(data);
    },
    onError: () => {
      // When have error, show error message
      console.log("error");
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => mutate(data);
  return {
    handleSendForm: handleSubmit(onSubmit),
    register,
  };
};
