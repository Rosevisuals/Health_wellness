import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const location = useLocation();
  const initialPlan = location.state?.selectedPlan || 'No plan selected';
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [notification, setNotification] = useState('');

  const handleFlutterwavePayment = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.onload = () => {
      window.FlutterwaveCheckout({
        public_key: 'YOUR_FLUTTERWAVE_PUBLIC_KEY',
        tx_ref: Date.now(),
        amount: selectedPlan === 'Basic Plan' ? 5 : selectedPlan === 'Premium Plan' ? 10 : 15,
        currency: 'USD',
        payment_options: 'card, mobilemoneyghana, ussd',
        redirect_url: 'http://localhost:3000/payment-success', // Change to your success page
        customer: {
          email: 'user@example.com',
          phonenumber: '080****4528',
          name: 'Yemi Desola',
        },
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
          logo: 'https://assets.piedpiper.com/logo.png',
        },
        callback: function (data) {
          fetch('http://localhost:5001/api/payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              transactionId: data.transaction_id,
              status: data.status,
              plan: selectedPlan,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                setNotification('Payment successful!');
                // Redirect based on plan
                let navigatePath = '/';
                switch (selectedPlan) {
                  case 'Basic Plan':
                    navigatePath = '/fitness-plans';
                    break;
                  case 'Premium Plan':
                    navigatePath = '/fitness-plans';
                    break;
                  case 'Family Plan':
                    navigatePath = '/fitness-plans';
                    break;
                  default:
                    navigatePath = '/';
                }
                window.location.href = navigatePath;
              } else {
                setNotification('Payment failed. Please try again.');
              }
            })
            .catch((error) => {
              console.error('Error making payment:', error);
              setNotification('Error making payment. Please try again.');
            });
        },
        onclose: function () {
          setNotification('Payment was not completed.');
        },
      });
    };
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [selectedPlan]);

  useEffect(() => {
    handleFlutterwavePayment();
  }, [handleFlutterwavePayment]);

  return (
    <div className="PaymentWrapper">
      <h1>Payment</h1>
      <form>
        <div className="form-group">
          <label htmlFor="selected-plan">Select Plan:</label>
          <select id="selected-plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} required>
            <option value="">Select...</option>
            <option value="Basic Plan">Basic Plan</option>
            <option value="Premium Plan">Premium Plan</option>
            <option value="Family Plan">Family Plan</option>
          </select>
        </div>
        <div id="flutterwave-button-container"></div>
      </form>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default Payment;
