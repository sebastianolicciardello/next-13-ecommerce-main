const { PrismaClient, Prisma } = require('@prisma/client');

const products = [
    {
      name: 'Cool helmet.',
      description: 'A nice helmet to wear on your head',
      price: new Prisma.Decimal(19.95),
      image: '/images/helmet.jpg',
    },
    {
      name: 'Grey T-Shirt',
      description: 'A nice shirt that you can wear on your body',
      price: new Prisma.Decimal(22.95),
      image: '/images/shirt.jpg',
    },
    {
      name: 'Socks',
      description: 'Cool socks that you can wear on your feet',
      price: new Prisma.Decimal(12.95),
      image: '/images/socks.jpg',
    },
    {
      name: 'Sweatshirt',
      description: 'Cool sweatshirt that you can wear on your body',
      price: new Prisma.Decimal(12.95),
      image: '/images/sweatshirt.jpg',
    },
  ];

  const prisma = new PrismaClient();

  const load = async () => {
    try {
      await prisma.product.deleteMany();
      console.log("Deleted records in product table");
  
      await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
      console.log("reset product auto increment to 1");
  
      await prisma.product.createMany({
        data: products,
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
