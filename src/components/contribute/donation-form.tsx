import { Button } from "@/components/ui/button";

const DonationForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Enter Amount</h3>
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium">
          One-time
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium">
          Monthly
        </button>
      </div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <div className="relative">
          <input
            type="number"
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          />
          <span className="absolute right-3 top-2 text-sm text-gray-500">
            USD
          </span>
        </div>
        <Button
          type={"submit"}
          className={
            "text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          }
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default DonationForm;
