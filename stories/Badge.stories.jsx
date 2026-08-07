import Badge from "../components/Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "success",
        "warning",
        "danger",
        "secondary",
      ],
    },

    rounded: {
      control: "boolean",
    },
  },
};

export const Primary = {
  args: {
    children: "New",
    variant: "primary",
  },
};

export const Success = {
  args: {
    children: "In Stock",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Sale",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    children: "Out of Stock",
    variant: "danger",
  },
};

export const Secondary = {
  args: {
    children: "Featured",
    variant: "secondary",
  },
};