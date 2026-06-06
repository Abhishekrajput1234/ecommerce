export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Order Placed Successfully
        </h1>

        <p className="mt-4">
          Thank you for your purchase.
        </p>
      </div>
    </div>
  );
}