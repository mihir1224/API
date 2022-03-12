const router = require("express").Router();
const product_controller = require("../controllers/product_controller");

router.get("/", product_controller.allProduct);
router.get("/:productId", product_controller.productDetails);
router.post("/", product_controller.productCreate);
router.put("/:productId", product_controller.productUpdate);
router.delete("/:productId", product_controller.productDelete);

module.exports = router;
