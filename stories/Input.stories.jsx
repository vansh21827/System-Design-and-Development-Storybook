import Input from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],

  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export const Default = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const Password = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};

export const Disabled = {
  args: {
    label: "Username",
    placeholder: "Disabled",
    disabled: true,
  },
};

export const Error = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
  },
};