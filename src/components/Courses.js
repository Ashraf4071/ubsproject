// src/components/Courses.js
import React from 'react';
import { Table } from 'react-bootstrap';

const Courses = () => {
  // Example data for courses
  const courses = [
    { name: 'Math 101', instructor: 'Prof. Smith', grade: 'A' },
    { name: 'Science 202', instructor: 'Dr. Johnson', grade: 'B+' },
    { name: 'History 303', instructor: 'Prof. Williams', grade: 'A-' },
  ];

  return (
    <div>
      <h2>Your Courses</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.instructor}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Courses;
