import { Decimal } from "@prisma/client/runtime/library";
import { Product } from "./generated/";

const productsData: Partial<Product>[] = [
  {
    name: "Basic",
    description: "Our basic product",
    price: new Decimal(5),
    image: "/images/helmet.jpg",
    stripePriceId: "price_1O5TpFCYoxxUd0ASQMY9MyT2",
  },
  {
    name: "Premium",
    description: "A premium version of our product",
    price: new Decimal(20),
    image: "/images/shirt.jpg",
    stripePriceId: "price_1O5TxUCYoxxUd0ASg92RHppX",
  },
];

module.exports = {
  productsData,
};