import React from 'react';
import axios from 'axios';
import ProfilePage from './Profile';

const TestPayment = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleTestPayment = async () => {
    setLoading(true);
    setError('');
    
    const token = localStorage.getItem('token');
    
    const payload = {
      amount: 1, // Test payment amount of $1
      ResumeId: "9CN06189KH259320999",
      Token: token || ''
    };

    try {
      const response = await axios.post(
        'https://api.resumeintellect.com/api/user/paypal/create-payment',
        payload,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data && response.data.data) {
        window.location.href = response.data.data;
      } else {
        setError('Invalid response from payment server');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error processing payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Test Payment</h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">Test Payment Details</h3>
            <p className="text-sm text-gray-500 mt-1">
              Process a $1 test payment via PayPal
            </p>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium text-gray-900">$1.00</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Payment Button */}
          <button
            onClick={handleTestPayment}
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-blue-700 active:bg-blue-800'
              }`}
          >
            {loading ? 'Processing...' : 'Process Test Payment'}
          </button>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 text-center">
            You will be redirected to PayPal to complete the payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPayment;