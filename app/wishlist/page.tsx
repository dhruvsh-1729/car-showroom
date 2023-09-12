'use client'
import React, { useEffect, useState } from 'react';
import { TestDriveProps } from '@/types';
import axios from 'axios';

const TestDriveRequest = ({ request }: any) => {
    const createdDate = new Date(request.createdDate);
  
    return (
      <div className="w-1/3 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer">
        <h3 className="text-2xl font-bold mb-2">{request.name}</h3>
        <p className="text-gray-300 text-base mb-2">{request.email}</p>
        <p className="text-blue-200 text-base mb-4">
          <b>Car Type</b>: {request.carType === 'new' ? 'New Car' : 'Used Car'}
        </p>
        {request.additionalInfo && (
          <p className="text-blue-200 text-base mb-4"><b>Additional Information</b>: {request.additionalInfo}</p>
        )}
        <p className="text-blue-200 text-base">
          <b>Date Submitted</b>: {createdDate.toLocaleString('en-GB', { timeZone: 'IST' })}
        </p>
      </div>
    );
  };
  
const TestDriveForm = () => {
    const [formData, setFormData] = useState({
        city: '',
        carType: 'new',
        additionalInfo: '',
    });
    const [email,setEmail] = useState('')
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count,setCount] = useState(0);

    useEffect(() => {
        try {
            const getRequests = async () => {
                const response: any = await axios.get('/api/users/me').catch(err => console.log(err));
                if (response?.status === 200) {
                    const userEmail = response.data.data.email;
                    setEmail(userEmail)
                    const res:any = await axios.post('/api/users/requests',{email:userEmail}).catch(err => console.log)
                    if(res?.status === 200) {
                        setRequests(res.data.requests)
                        console.log("Requests found");
                    }
                }
            }
            getRequests();
        }
        catch (err: any) {
            console.log(err.message);
        }
    }, [count])


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to the server
        const response = await axios.post('/api/users/testdrive',{email,...formData});
        if(response.status === 200){
            setCount(prev=>prev+1);
            console.log("Test drive request added successfully");   
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Schedule a Test Drive</h2>
                    <p className="text-gray-600 mb-6">
                        Our team will find the perfect car for you to test drive. Tell us your preferences.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carType">
                                Car Type
                            </label>
                            <select
                                id="carType"
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 w-full"
                            >
                                <option value="new">New Car</option>
                                <option value="old">Used Car</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
                                Additional Information (Optional)
                            </label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                rows={4}
                                className="border rounded-lg px-3 py-2 w-full"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4 mt-10">Existing Test Drive Requests</h2>
                    {requests.length === 0 ? (
                        <p>No test drive requests found.</p>
                    ) : (
                        <div>
                            {requests.map((request, index) => (
                                <TestDriveRequest key={index} request={request} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestDriveForm;
