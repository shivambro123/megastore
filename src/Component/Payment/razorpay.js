import React from 'react'
import Razorpay from 'razorpay';

const razorpay = () => {
    const razorpayOptions = {
        key: 'YOUR_TEST_KEY_ID',
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Payment',
        handler: function (response) {
          // Handle success callback
          console.log(response);
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9876543210'
        }
      };
      
      const razorpayInstance = new Razorpay(razorpayOptions);
      const paymentRequest = {
        amount: 10000, // Amount in paise (Example: Rs. 100.00)
        currency: 'INR',
        receipt: 'receipt_1',
        payment_capture: 1, // Automatically capture payment
      };
      
      razorpayInstance.open(paymentRequest);
  return (
    <div>
      
    </div>
  )
}

export default razorpay
