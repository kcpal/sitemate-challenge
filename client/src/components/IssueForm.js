import React, { useState } from "react";
import axios from "axios";

const IssueForm = ({ onAddIssue }) => {
  const [newIssue, setNewIssue] = useState({ title: "", description: "" });

  const createIssue = () => {
    // Create
    axios
      .post("http://localhost:3001/api/issues", newIssue)
      .then((response) => {
        onAddIssue(response.data);
        setNewIssue({ title: "", description: "" });
      });
  };

  return (
    <div>
      <h2>Create New Issue</h2>
      <label>
        Title:
        <input
          type="text"
          value={newIssue.title}
          onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
        />
      </label>
      <label>
        Description:
        <textarea
          value={newIssue.description}
          onChange={(e) =>
            setNewIssue({ ...newIssue, description: e.target.value })
          }
        />
      </label>
      <button onClick={createIssue}>Create Issue</button>
    </div>
  );
};

export default IssueForm;
