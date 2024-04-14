import prisma from "../../db/db.config.js";
export const createUser = async (req, res) => {
  const {
    first_name,
    last_name,
    address,
    email,
    phone_number,
    password,
    confirm_password,
  } = req.body;

  const emailExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (emailExists) {
    return res.json({ status: 400, message: "This email is already in use!" });
  }

  const newUser = await prisma.user.create({
    data: {
      first_name: first_name,
      last_name: last_name,
      address: address,
      email: email,
      phone_number: phone_number,
      password: password,
      confirm_password: confirm_password,
    },
  });

  return res.json({
    status: 200,
    data: newUser,
    message: "New user registered!",
  });
};
