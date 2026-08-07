import ProductCard from "../components/ProductCard";
import iphone from "../assets/iphone.png";
const product = {
  id: 1,
  title: "iPhone 16 Pro",
  brand: "Apple",
  category: "Smartphones",
  thumbnail: iphone,
  price: 999,
  rating: 4.8,
  discountPercentage: 18,
};

export default {
  title: "Components/ProductCard",
  component: ProductCard,

  decorators: [
    (Story) => (
      <div
        style={{
          width: "340px",
          margin: "40px auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    product,
  },
};

export const NoDiscount = {
  args:{
    product:{
      "id": 2,
      "title": "Smartwatch",
      "brand": "Apple",
      "category": "Smartwatches",
      "thumbnail": "/src/assets/smartwatch.png",
      "price": 499,
      "rating": 4.7,
      "discountPercentage": 10
    },
  },
};

export const Expensive = {
  args:{
    product:{
      "id": 1,
      "title": "MacBook Pro",
      "brand": "Apple",
      "category": "Laptops",
      "thumbnail": "/src/assets/macbook.png",
      "price": 2499,
      "rating": 5,
      "discountPercentage": 12
    },
  },
};
export const Discount = {
  args:{
    product:{
      "id": 1,
      "title": "iPad",
      "brand": "Apple",
      "category": "Electronics",
      "thumbnail": "/src/assets/ipad.png",
      "price": 1399,
      "rating": 4.8,
      "discountPercentage": 20
    },
  },
};
export const OutOfStock = {
  args: {
    product: {
      "id": 1,
      "title": "Speaker",
      "brand": "Apple",
      "category": "SoundBox",
      "thumbnail": "/src/assets/speaker.png",
      "price": 299,
      "rating": 4.8,
      "discountPercentage": 0,
      "stock": 0
    },
  },
};