const express = require("express");
const {
  addVacancy,
  GetAllJob,
  deleteJob,
} = require("../controller/new_vacancy_controller");
const { protect } = require("../auth_middleware");
const authenticateToken = require("../auth_middleware");

const router = express.Router();

router.post("/add_vacancy", addVacancy);
router.delete("/delete_vacancy/:jobId", deleteJob);
router.get("/get_all_vacancy", GetAllJob);

module.exports = router;
