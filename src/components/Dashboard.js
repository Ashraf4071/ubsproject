import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';


// Sample data for courses and grades
const courses = [
  { name: 'Math 101', grade: 'A' },
  { name: 'Science 202', grade: 'B+' },
  { name: 'History 303', grade: 'A-' },
  { name: 'English 404', grade: 'B' },
];

const Dashboard = () => {
  return (
    <div style={{ marginLeft: '270px', padding: '20px' }}>
      <h2>Welcome to your Dashboard!</h2>
      <p>Here, you can see your courses, grades, and more.</p>

      {/* Metrics Section */}
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Total Courses</h5>
              <h3>{courses.length}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Average Grade</h5>
              <h3>B+</h3> {/* Example average grade */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Courses Table */}
      <div style={{ marginTop: '20px' }}>
        <h4>Your Courses</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
