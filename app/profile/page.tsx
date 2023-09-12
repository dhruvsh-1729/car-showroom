'use client'
import { Loader } from '@/components';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        age: '',
        gender: 'Male',
        interests: '',
    });

    const [loading,setLoading] = useState(false);

    useEffect(() => {
        try {
            const getUserData = async () => {
                const response: any = await axios.get('/api/users/me').catch(err => console.log(err));
                if (response?.status === 200) {
                    const user = response.data.data;
                    setFormData(prev => ({ ...prev, ...user }))
                }
            }
            getUserData();
        }
        catch (err: any) {
            console.log(err.message);
        }
    }, [])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.put('/api/users/update', formData);
            console.log("Updated success", res.data);
        }
        catch (err: any) {
            console.log(err.message);
        }
        finally{
            setLoading(false);
        }   
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Personal Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                disabled={true}
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="text-gray-600">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="age" className="text-gray-600">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="text-gray-600">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="interests" className="text-gray-600">Interests</label>
                            <textarea
                                id="interests"
                                name="interests"
                                value={formData.interests}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Update details
                            {loading && <Loader />}
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile