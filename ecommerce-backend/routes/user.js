const express = require("express");
const { getPurchaseHistory } = require("../../ecommerce-frontend/src/user/apiUser");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {
  userById,
  read,
  update,
  purchaseHistory,
} = require("../controllers/user");

//Routes
router.get("/secret/:userId", requireSignin, isAuth,isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

//READ UPDFATE
router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);
router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);


router.param("userId", userById);
module.exports = router;
