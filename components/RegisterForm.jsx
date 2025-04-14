import { useActionState } from "react";
import { register } from "@/actions/userController";

export default function RegisterForm() {
  const [formState, formAction] = useActionState(register, {});

  console.log(formState);

  return (
    <form
      action={formAction}
      method="POST"
      className="w-full flex flex-col items-start"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="input"
        autoComplete="off"
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input"
        autoComplete="off"
        required
      />
      <br />
      <button type="submit" className="btn">
        Sign Up
      </button>
    </form>
  );
}
