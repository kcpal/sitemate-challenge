const issueModel = require("../models/issueModel");

const createIssue = (req, res) => {
  const newIssue = req.body;
  const createdIssue = issueModel.create(newIssue);
  res.json(createdIssue);
};

const getIssues = (req, res) => {
  const allIssues = issueModel.getAll();
  res.json(allIssues);
};

const updateIssue = (req, res) => {
  const issueId = parseInt(req.params.id);
  const updatedIssue = req.body;
  const result = issueModel.update(issueId, updatedIssue);
  res.json(result);
};

const deleteIssue = (req, res) => {
  const issueId = parseInt(req.params.id);
  const deletedIssue = issueModel.remove(issueId);
  res.json(deletedIssue);
};

module.exports = {
  createIssue,
  getIssues,
  updateIssue,
  deleteIssue,
};
