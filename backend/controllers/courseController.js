const Course = require("../models/Course");

const getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    res.json(course);
  } else {
    res.status(404);
    throw new Error("Course not found");
  }
};

const createCourse = async (req, res) => {
  const { title, description } = req.body;

  const course = await Course.create({
    title,
    description,
    user: req.user.id,
  });

  if (course) {
    res.status(201).json(course);
  } else {
    res.status(400);
    throw new Error("Invalid course data");
  }
};

const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;

    const updatedCourse = await course.save();

    res.json(updatedCourse);
  } else {
    res.status(404);
    throw new Error("Course not found");
  }
};

const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    await course.deleteOne();
    res.json({ message: "Course removed" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
