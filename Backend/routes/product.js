const middlewareController = require("../Controllers/middlewareController");
const productController = require("../Controllers/productController");

const router = require("express").Router();

router.post(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  productController.createProduct
);

router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  productController.deleteProduct
);

router.put(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  productController.updateProduct
);

router.get(
  "/find/:id",
  productController.getProduct
);

router.get(
  "/",
  productController.getAllProduct
);

module.exports = router;
