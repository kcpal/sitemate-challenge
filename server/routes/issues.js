const express = require("express");
const router = express.Router();
const issuesController = require("../controllers/issuesController");

// Create
router.post("/", issuesController.createIssue);

// Read
router.get("/", issuesController.getIssues);

// Update
router.put("/:id", issuesController.updateIssue);

// Delete
router.delete("/:id", issuesController.deleteIssue);

module.exports = router;
