const express = require("express");
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getCourses).post(protect, createCourse);
router
  .route("/:id")
  .get(getCourseById)
  .put(protect, updateCourse)
  .delete(protect, deleteCourse);

module.exports = router;
