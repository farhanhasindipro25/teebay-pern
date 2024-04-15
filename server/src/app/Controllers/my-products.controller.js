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
      message: "Categories field is not in proper syntax!",
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

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.myProduct.findMany({
      include: { categories: true },
    });
    return res.status(200).json({
      status: 200,
      data: products,
      message: "Retrieved all products data",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const editProduct = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { title, categories, description, price, rent, rent_timeline } =
    req.body;

  try {
    const existingProduct = await prisma.myProduct.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return res.status(404).json({
        status: 404,
        message: "This product does not exist",
      });
    }

    const payload = {
      title: title,
      description: description,
      price: price,
      rent: rent,
      rent_timeline: rent_timeline,
    };
    if (categories) {
      let categoryConnect = [];
      if (Array.isArray(categories)) {
        categoryConnect = categories.map((categoryId) => ({
          id: categoryId,
        }));
      } else {
        return res.status(400).json({
          status: 400,
          message: "Categories field is not in proper syntax!",
        });
      }
      payload.categories = { connect: categoryConnect };
    }

    const updatedProduct = await prisma.myProduct.update({
      where: { id: productId },
      data: payload,
      include: { categories: true },
    });

    return res.json({
      status: 201,
      data: updatedProduct,
      message: "Product information updated!",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
