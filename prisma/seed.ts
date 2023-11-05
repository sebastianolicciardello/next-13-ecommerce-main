/*import { Product } from './generated/client/index.d';
import {Product as ProductFetchType } from '../types/product';
import { Product as ProductType } from '@prisma/client';

const { PrismaClient, Prisma } = require('@prisma/client');

  const prisma = new PrismaClient();

  const load = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();

      const formattedProducts = products.map((product: ProductFetchType) => ({
        name: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
      }));


      await prisma.product.deleteMany();
      console.log("Deleted records in product table");
  
      await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
      console.log("reset product auto increment to 1");
  
      await prisma.product.createMany({
        data: formattedProducts
      });

      console.log("Added product data");
    } catch (e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  };
  
  load();*/

const { PrismaClient } = require("@prisma/client");
const { productsData } = require("./data");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.product.deleteMany();
    console.log("Deleted records in product table");

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log("reset product auto increment to 1");

    await prisma.product.createMany({
      data: productsData,
    });
    console.log("Added product data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
