import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        age: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let newErrors = {};

        // Name validation: must be at least 3 characters long
        if (!formData.name || formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long';
        }

        // Email validation using regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // Mobile validation: must be a valid 10-digit number
        const mobilePattern = /^[0-9]{10}$/;
        if (!formData.mobile || !mobilePattern.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be a valid 10-digit number';
        }

        // Gender validation: must select an option
        if (!formData.gender) {
            newErrors.gender = 'Please select your gender';
        }

        // Age validation: must be between 18 and 100
        if (!formData.age || formData.age < 18 || formData.age > 100) {
            newErrors.age = 'Age must be between 18 and 100';
        }

        // Address validation: must be at least 10 characters
        if (!formData.address || formData.address.length < 10) {
            newErrors.address = 'Address must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await fetch('http://localhost:5000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                alert(result.message);
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form');
            }
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Form</h2>

            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </label>

            <label>
                Mobile:
                <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
            </label>

            <label>
                Gender:
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}
            </label>

            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                {errors.age && <p className="error">{errors.age}</p>}
            </label>

            <label>
                Address:
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                ></textarea>
                {errors.address && <p className="error">{errors.address}</p>}
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
