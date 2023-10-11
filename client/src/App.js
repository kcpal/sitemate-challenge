import React, { useState, useEffect } from "react";
import IssueList from "./components/IssueList";
import IssueForm from "./components/IssueForm";
import axios from "axios";
import './styles.css';


function App() {
  const [issues, setIssues] = useState([]); // Add this line to define setIssues

   useEffect(() => {
     // Read
     axios.get("http://localhost:3001/api/issues").then((response) => {
       setIssues(response.data);
     });
   }, []);

  const addIssue = (newIssue) => {
    // Helper function to add a new issue to the list
    setIssues((prevIssues) => [...prevIssues, newIssue]);
  };

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <IssueForm onAddIssue={addIssue} />
      <IssueList issues={issues} setIssues={setIssues} />
    </div>
  );
}

export default App;
