import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../styles/ParentPage.css'; // Import the CSS file for styling

const ParentPage = () => {
    const [childName, setChildName] = useState('');
    const [childEmail, setChildEmail] = useState('');
    const [password, setPassword] = useState('');
    const [initialBalance, setInitialBalance] = useState(0); // State for initial balance
    const location = useLocation();
    const parentEmail = location.state.userEmail;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8086/api/user/createChildAccount', {
                parentEmail: parentEmail,
                childUsername: childName,
                childEmail: childEmail,
                childPassword: password,
                initialBalance: initialBalance // Pass initial balance to the request
            });
            console.log(response.data); // Log the response
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error creating child account:', error);
            if (error.response && error.response.data) {
                alert(error.response.data);
            } else {
                alert('Failed to create child account. Please try again later.');
            }
        }
    };

    return (
        <div className="parent-page-container"> {/* Apply parent-page-container class */}
            <h1>Create Child Account</h1>
            <form onSubmit={handleSubmit} className="parent-form"> {/* Apply parent-form class */}
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="childName">Child Name:</label>
                    <input
                        type="text"
                        id="childName"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        required
                        className="form-control" // Apply form-control class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="childEmail">Child Email:</label>
                    <input
                        type="email"
                        id="childEmail"
                        value={childEmail}
                        onChange={(e) => setChildEmail(e.target.value)}
                        required
                        className="form-control" // Apply form-control class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-control" // Apply form-control class
                    />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label htmlFor="initialBalance">Initial Balance:</label>
                    <input
                        type="number"
                        id="initialBalance"
                        value={initialBalance}
                        onChange={(e) => setInitialBalance(parseFloat(e.target.value))}
                        required
                        className="form-control" // Apply form-control class
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Child Account</button> {/* Apply btn and btn-primary classes */}
            </form>
        </div>
    );
};

export default ParentPage;