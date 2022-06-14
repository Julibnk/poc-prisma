const { PrismaClient } = require("@prisma/client");

// console.log("Hola mundo");

const prisma = new PrismaClient();

const createUser = async () => {
  const createdUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alic@prism.io",
      posts: {
        create: { title: "Join us for Prisma Day 2020" },
      },
    },
  });

  return createdUser;
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

try {
  // const allUsers = getAllUsers().then((all));
  //   createUser().then((user) => {
  //     console.log(user);
  //   });
  getAllUsers().then((allUsers) => {
    console.log(allUsers);
  });
  //   console.log(allUsers);
} catch (e) {}
