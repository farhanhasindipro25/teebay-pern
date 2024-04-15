import prisma from "../../db/db.config.js";

export const createProduct = async (req, res) => {
  const { title, categories, description, price, rent, rent_timeline } =
    req.body;
  let CategoryConnect = [];
  if (Array.isArray(categories)) {
    CategoryConnect = categories.map((categoryID) => ({
      id: categoryID,
    }));
  } else {
    return res.json({
      status: 400,
      message: "Categories is not in proper syntax!",
    });
  }
  const payload = {
    title: title,
    categories: { connect: CategoryConnect },
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

    const productsWithAssociatedCategories = await prisma.myProduct.findUnique({
      where: { id: newProduct.id },
      include: { categories: true },
    });

    return res.json({
      status: 201,
      data: productsWithAssociatedCategories,
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
