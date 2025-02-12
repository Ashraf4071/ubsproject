// src/components/Grades.js
import React from 'react';
import { Table } from 'react-bootstrap';

const Grades = () => {
  // Example data for grades
  const grades = [
    { assignment: 'Math Homework 1', grade: 'A' },
    { assignment: 'Science Project', grade: 'B+' },
    { assignment: 'History Essay', grade: 'A-' },
  ];

  return (
    <div>
      <h2>Your Grades</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.assignment}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Grades;
