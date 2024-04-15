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

    if (product.is_bought === true) {
      res.status(409).json({
        status: 409,
        message: "This product is not available at the moment",
      });
    }
    if (product.is_rented === true && userId) {
      res.status(409).json({
        status: 409,
        message: "This product has already been rented",
      });
    }

    await prisma.product.update({
      where: {
        id: parseInt(productId),
      },
      data: {
        is_rented: true,
      },
    });

    const rent = await prisma.rent.create({
      data: {
        userId: parseInt(userId),
        productId: parseInt(productId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
      include: { product: true },
    });
    console.log(rent);
    res.status(200).json({
      status: 200,
      message: "Product rented!",
      product: rent,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};

const getRents = async (req, res) => {
  const { id: userId } = req.params;

  try {
    const rents = await prisma.rent.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        product: true,
      },
    });

    res.status(200).json({
      status: 200,
      message: "All rents of user retrieved!",
      rents: rents,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};

export const RentController = { createRent, getRents };
