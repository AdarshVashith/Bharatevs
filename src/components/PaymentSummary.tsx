import React from 'react';
import Button from './Button';
import { initiatePayment } from '../utils/razorpay';

interface PaymentSummaryProps {
  serviceType: 'battery' | 'vehicle';
  formData: any;
  onPaymentComplete: () => void;
}

const getServiceAmount = (serviceType: string, vehicleType?: string): number => {
  if (serviceType === 'battery') {
    return vehicleType === '2w' ? 1999 : 2999;
  }
  return vehicleType === '2w' ? 2499 : 3499;
};

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ serviceType, formData, onPaymentComplete }) => {
  const amount = getServiceAmount(serviceType, formData.vehicleType);
  const gst = amount * 0.18;
  const total = amount + gst;

  const handlePayment = async () => {
    try {
      await initiatePayment({
        amount: total,
        name: 'BHARAT EVs',
        description: `${serviceType === 'battery' ? 'Battery' : 'Vehicle'} Service`,
        email: formData.email,
        contact: formData.contact,
      });
      onPaymentComplete();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Service Charge</span>
          <span className="font-medium">₹{amount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">GST (18%)</span>
          <span className="font-medium">₹{gst.toLocaleString()}</span>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between">
            <span className="font-semibold">Total Amount</span>
            <span className="font-semibold">₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          variant="primary"
          className="w-full"
          onClick={handlePayment}
        >
          Pay Now
        </Button>
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        <p>Secure payment powered by Razorpay</p>
      </div>
    </div>
  );
};

export default PaymentSummary;