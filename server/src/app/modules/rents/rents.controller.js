import prisma from "../../../db/db.config.js";

const createRent = async (req, res) => {
  const { id: productId } = req.params;
  const { userId, startDate, endDate } = req.body;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
      },
    });

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "This product does not exist",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "This user does not exist",
      });
    }

    if (product.is_rented === true && userId) {
      res.status(409).json({
        status: 409,
        message: "This product has already been rented",
      });
    }

    const rentedProduct = await prisma.product.update({
      where: {
        id: parseInt(productId),
      },
      data: {
        is_rented: true,
      },
    });

    await prisma.rent.create({
      data: {
        userId: parseInt(userId),
        productId: parseInt(productId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });

    res.status(200).json({
      status: 200,
      message: "Product rented!",
      product: rentedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};

export const RentController = { createRent };
