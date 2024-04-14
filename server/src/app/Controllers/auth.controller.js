import prisma from "../../db/db.config.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({
        status: 401,
        message: "Your given credentials are invalid",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "You have successfully logged in!",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    });
  }
};
