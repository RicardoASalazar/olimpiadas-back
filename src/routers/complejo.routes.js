const { Router } = require("express");
const { filter, getById } = require("../controllers/complejo.controller");

const router = Router();

router.get("/:filter", filter);
router.get("/:cve", getById );

module.exports = router;
