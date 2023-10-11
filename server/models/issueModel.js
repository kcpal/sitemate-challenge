let issues = [
  {
    id: 1,
    title: "Sample Issue 1",
    description: "This is the first sample issue",
  },
  {
    id: 2,
    title: "Sample Issue 2",
    description: "This is the second sample issue",
  },
];

const create = (newIssue) => {
  const issueWithId = { ...newIssue, id: issues.length + 1 };
  issues.push(issueWithId);
  return issueWithId;
};

const getAll = () => {
  return issues;
};

const update = (id, updatedIssue) => {
  issues = issues.map((issue) =>
    issue.id === id ? { ...issue, ...updatedIssue } : issue
  );
  return updatedIssue;
};

const remove = (id) => {
  const deletedIssue = issues.find((issue) => issue.id === id);
  issues = issues.filter((issue) => issue.id !== id);
  return deletedIssue;
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};
