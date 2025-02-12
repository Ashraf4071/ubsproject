import React, { useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
  });

  const handleEdit = () => {
    // Logic to handle edit (for now, you can display an alert or open an editable form)
    alert('Edit profile clicked');
  };

  return (
    <div style={{ marginLeft: '270px', padding: '20px' }}>
      <h2>Your Profile</h2>
      <p>View and update your personal information here.</p>
      
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h4>Personal Information</h4>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Address:</strong> {userData.address}</p>

        <button 
          onClick={handleEdit} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
