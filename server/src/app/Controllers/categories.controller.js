import prisma from "../../db/db.config.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({
        status: 400,
        message: "Category name is required.",
      });
    }
    const existingCategory = await prisma.category.findUnique({
      where: { name: name },
    });

    if (existingCategory) {
      return res.status(400).json({
        status: 400,
        message: `A category named ${name} already exists.`,
      });
    }
    const newCategory = await prisma.category.create({
      data: { name: name },
    });

    return res.status(201).json({
      status: 201,
      data: newCategory,
      message: "New category added!",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
