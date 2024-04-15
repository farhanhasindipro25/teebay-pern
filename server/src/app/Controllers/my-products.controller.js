import prisma from "../../db/db.config.js";

export const createProduct = async (req, res) => {
  const { title, categories, description, price, rent, rent_timeline } =
    req.body;
  const payload = {
    title: title,
    categories: categories,
    description: description,
    price: price,
    rent: rent,
    rent_timeline: rent_timeline,
  };
  try {
    if (!payload) {
      return res.json({
        status: 400,
        message: "Payload structure is not in proper syntax!",
      });
    }
    const newProduct = await prisma.myProduct.create({
      data: payload,
    });

    return res.json({
      status: 201,
      data: newProduct,
      message: "New product added!",
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};
