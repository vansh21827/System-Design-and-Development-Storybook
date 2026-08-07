import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "outline",
      ],
    },

    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },

    disabled: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },

    onClick: { action: "clicked" },
  },
};

export const Primary = {
  args: {
    children: "Add to Cart",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Buy Now",
    variant: "secondary",
  },
};

export const Success = {
  args: {
    children: "Checkout",
    variant: "success",
  },
};

export const Danger = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Outline = {
  args: {
    children: "View Details",
    variant: "outline",
  },
};

export const Disabled = {
  args: {
    children: "Out of Stock",
    disabled: true,
  },
};