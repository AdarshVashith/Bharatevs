declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

interface PaymentOptions {
  amount: number;
  currency?: string;
  name: string;
  description: string;
  orderId?: string;
  email: string;
  contact: string;
}

export const initiatePayment = async (options: PaymentOptions): Promise<any> => {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded) {
    throw new Error('Razorpay SDK failed to load');
  }

  const razorpay = new window.Razorpay({
    key: 'YOUR_RAZORPAY_KEY', // Replace with your actual key
    amount: options.amount * 100, // Razorpay expects amount in paise
    currency: options.currency || 'INR',
    name: options.name,
    description: options.description,
    order_id: options.orderId,
    handler: function (response: any) {
      console.log('Payment successful:', response);
      // Handle successful payment
    },
    prefill: {
      email: options.email,
      contact: options.contact,
    },
    theme: {
      color: '#22C55E', // Green-500 from Tailwind
    },
  });

  razorpay.open();
  return razorpay;
};