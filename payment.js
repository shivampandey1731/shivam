import React, { useState } from "react";
import axios from "axios";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.amount || isNaN(formData.amount))
      newErrors.amount = "Valid amount is required";
    if (!formData.cardNumber || formData.cardNumber.length !== 16)
      newErrors.cardNumber = "Valid 16-digit card number is required";
    if (!formData.expiry || !/^\d{2}\/\d{4}$/.test(formData.expiry))
      newErrors.expiry = "Valid expiry date is required (MM/YYYY)";
    if (!formData.cvv || formData.cvv.length !== 3)
      newErrors.cvv = "Valid 3-digit CVV is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/payment",
          formData
        );
        alert("Payment submitted successfully!");
        console.log("Payment submitted successfully:", response.data);
      } catch (error) {
        console.error("Payment submission failed:", error);
      }
    }
  };

  return (
    <div className="container1 p-0">
      <div className="card px-4">
        <p className="h8 py-3">Payment Details</p>
        <form onSubmit={handleSubmit}>
          <div className="row gx-3">
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Person Name</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name}</span>
                )}
              </div>

              <div className="d-flex flex-column">
                <p className="text mb-1">Amount</p>
                <input
                  className="form-control mb-3"
                  type="number"
                  placeholder="Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
                {errors.amount && (
                  <span className="text-danger">{errors.amount}</span>
                )}
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Card Number</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="1234 5678 4354 8678"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                {errors.cardNumber && (
                  <span className="text-danger">{errors.cardNumber}</span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Expiry</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                />
                {errors.expiry && (
                  <span className="text-danger">{errors.expiry}</span>
                )}
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">CVV/CVC</p>
                <input
                  className="form-control mb-3 pt-2"
                  type="password"
                  placeholder="***"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
                {errors.cvv && (
                  <span className="text-danger">{errors.cvv}</span>
                )}
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary mb-2">
                <span className="ps-3">Pay </span>
                <span className="fas fa-arrow-right"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
