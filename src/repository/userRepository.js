import { PrismaClient } from "@prisma/client";
import fs from "fs";
const prisma = new PrismaClient();

const userRepository = {
  createUser: async (user) => {
    const createUser = await prisma.user.create({ data: user });

    if (!createUser) {
      return {
        status: 500,
        message: "Failed to create user",
      };
    }
    return {
      status: 200,
      message: "User created successfully",
      data: createUser,
    };
  },
  //signup get user by uid
  getUserById: async (id) => {
    try {
      const getUser = await prisma.user.findFirst({ where: { id: id } });
      if (!getUser) {
        return {
          status: 400,
          message: "User Not Found",
          data: null,
        };
      }
      return {
        status: 200,
        message: "User Exists",
        data: getUser,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Failed to get user",
        error: error.message,
      };
    }
  },

  getMeUser: async (userId) => {
    try {
      const getUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!getUser) {
        return {
          status: 500,
          message: "Failed to get user",
        };
      }
      return getUser;
    } catch (error) {
      console.error("Error fetching user:", error.message);
      return {
        status: 500,
        message: "An error occurred while fetching the user",
        error: error.message,
      };
    }
  },

 
  deleteUser: async (id) => {
    try {
      const deleteUser = await prisma.user.delete({ where: { uid: id } });
      return {
        status: 200,
        message: "User deleted successfully",
        data: deleteUser,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Failed to delete user",
        error: error.message,
      };
    }
  },

  getUserByEmailandUid: async (uid, email, cnic) => {
    try {
      const getUser = await prisma.user.findFirst({
        where: { uid: uid, email: email, cnic: cnic },
      });
      if (!getUser) {
        return {
          status: 400,
          message: "User Not Found",
          data: null,
        };
      }
      return {
        status: 200,
        message: "User Exists",
        data: getUser,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Failed to get user",
        error: error.message,
      };
    }
  }
   
 
  
};

export default userRepository;
