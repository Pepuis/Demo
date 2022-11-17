const middlewareController = require("../Controllers/middlewareController");
const cartController = require("../Controllers/cartController");

const router = require("express").Router();

router.post("/", middlewareController.verifyToken, cartController.createCart);

router.put(
  "/:id",
  middlewareController.verifyTokenAndUserAuth,
  cartController.updateCart
);

router.delete(
  "/:id",
  middlewareController.verifyTokenAndUserAuth,
  cartController.deleteCart
);

module.exports = router;
