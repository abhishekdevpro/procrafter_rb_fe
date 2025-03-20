import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 text-center">
      <FaCheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
      <p className="text-gray-700 mt-2">Thank you for your purchase.</p>
      <button
        className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        onClick={() => router.push("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
}
