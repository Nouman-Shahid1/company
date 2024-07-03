const Project = require("../models/Project");

const getProjects = async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
};

const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
};

const createProject = async (req, res) => {
  const { title, description } = req.body;

  const project = await Project.create({
    title,
    description,
    user: req.user.id,
  });

  if (project) {
    res.status(201).json(project);
  } else {
    res.status(400);
    throw new Error("Invalid project data");
  }
};

const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;

    const updatedProject = await project.save();

    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
};

const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    await project.deleteOne();
    res.json({ message: "Project removed" });
  } else {
    res.status(404).json({ message: "Project not found" });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
