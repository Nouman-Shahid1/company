const Job = require("../models/Job");

const getJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.json(jobs);
};

const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (job) {
    res.json(job);
  } else {
    res.status(404);
    throw new Error("Job not found");
  }
};

const createJob = async (req, res) => {
  const { title, description } = req.body;

  const job = await Job.create({
    title,
    description,
    user: req.user.id,
  });

  if (job) {
    res.status(201).json(job);
  } else {
    res.status(400);
    throw new Error("Invalid job data");
  }
};

const updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (job) {
    job.title = req.body.title || job.title;
    job.description = req.body.description || job.description;

    const updatedJob = await job.save();

    res.json(updatedJob);
  } else {
    res.status(404);
    throw new Error("Job not found");
  }
};

const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (job) {
    await job.deleteOne();
    res.json({ message: "Job removed" });
  } else {
    res.status(404).json({ message: "Job not found" });
  }
};

module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
