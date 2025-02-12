// src/components/Assignments.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Assignments = () => {
  // Example data for assignments
  const assignments = [
    { name: 'Math Homework 1', dueDate: '2025-02-15' },
    { name: 'Science Project', dueDate: '2025-02-20' },
    { name: 'History Essay', dueDate: '2025-02-18' },
  ];

  return (
    <div>
      <h2>Your Assignments</h2>
      <ListGroup>
        {assignments.map((assignment, index) => (
          <ListGroup.Item key={index}>
            <strong>{assignment.name}</strong> - Due on {assignment.dueDate}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Assignments;
