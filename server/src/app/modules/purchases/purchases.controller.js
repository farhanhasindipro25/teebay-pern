import prisma from "../../../db/db.config.js";

const createPurchase = async (req, res) => {
  const { id: productId } = req.params;
  const { userId } = req.body;

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
    if (product.is_rented === true) {
      res.status(409).json({
        status: 409,
        message: "This product is not available at the moment",
      });
    }
    if (product.is_bought === true && userId) {
      res.status(409).json({
        status: 409,
        message: "You have already bought this product",
      });
    }

    const updatedProduct = await prisma.product.update({
      where: {
        id: parseInt(productId),
      },
      data: {
        is_bought: true,
      },
    });

    await prisma.purchase.create({
      data: {
        userId: parseInt(userId),
        productId: parseInt(productId),
      },
    });

    res.status(200).json({
      status: 200,
      message: "Product purchased",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};

const getPurchases = async (req, res) => {
  const { id: userId } = req.params;
  console.log(req.params);

  try {
    const purchases = await prisma.purchase.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        product: true,
      },
    });
    const purchasedProducts = purchases.map((purchase) => purchase.product);

    res.status(200).json({
      status: 200,
      message: "All purchases of user retrieved!",
      products: purchasedProducts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};

export const PurchasesController = { createPurchase, getPurchases };
