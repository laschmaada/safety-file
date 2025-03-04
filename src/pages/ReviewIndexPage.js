import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/ReviewIndexPage.css';

const ReviewIndexPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  
  // State for form data
  const [formData, setFormData] = useState({
    contractorCompanyName: '',
    servicesDepartment: '',
    companyVendorProjectNumber: '',
    startingDate: '',
    completionDate: '',
    responsibleCompanyRepresentative: ''
  });
  
  // Load saved data if available
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const token = await getAccessTokenSilently();
        // Here you would typically fetch data from your backend
        // For now, we'll use localStorage as a placeholder
        const savedData = localStorage.getItem('reviewIndexData');
        if (savedData) {
          setFormData(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    
    loadSavedData();
  }, [getAccessTokenSilently]);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getAccessTokenSilently();
      // Here you would typically send data to your backend
      // For now, we'll use localStorage as a placeholder
      localStorage.setItem('reviewIndexData', JSON.stringify(formData));
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };
  
  // Navigate to next page
  const handleNext = () => {
    // Save data before navigating
    localStorage.setItem('reviewIndexData', JSON.stringify(formData));
    // Navigate to next page (to be implemented)
    navigate('/next-page');
  };
  
  return (
    <div className="review-index-container">
      <header className="review-header">
        <img src="/logo.png" alt="Anglo American Logo" className="header-logo" />
        <div className="header-text">
          <h2>PLATINUM</h2>
          <p>RBMR-ALL-ENG-PRO-0007-FRM-0003    Rev 9.0</p>
        </div>
      </header>
      
      <h1 className="page-title">REVIEW INDEX</h1>
      
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="contractorCompanyName">CONTRACTORS COMPANY'S NAME:</label>
          <input
            type="text"
            id="contractorCompanyName"
            name="contractorCompanyName"
            value={formData.contractorCompanyName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="servicesDepartment">SERVICES/DEPARTMENT:</label>
          <input
            type="text"
            id="servicesDepartment"
            name="servicesDepartment"
            value={formData.servicesDepartment}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="companyVendorProjectNumber">COMPANY'S VENDOR/PROJECT NUMBER:</label>
          <input
            type="text"
            id="companyVendorProjectNumber"
            name="companyVendorProjectNumber"
            value={formData.companyVendorProjectNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="startingDate">STARTING DATE:</label>
            <input
              type="date"
              id="startingDate"
              name="startingDate"
              value={formData.startingDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group half">
            <label htmlFor="completionDate">COMPLETION DATE:</label>
            <input
              type="date"
              id="completionDate"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="responsibleCompanyRepresentative">RESPONSIBLE COMPANY REPRESENTATIVE:</label>
          <input
            type="text"
            id="responsibleCompanyRepresentative"
            name="responsibleCompanyRepresentative"
            value={formData.responsibleCompanyRepresentative}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-button">Save</button>
          <button type="button" className="next-button" onClick={handleNext}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewIndexPage;