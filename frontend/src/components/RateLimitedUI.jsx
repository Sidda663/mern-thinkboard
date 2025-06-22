import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-2">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md p-6 flex items-center space-x-6">
        <div className="bg-primary/20 p-4 rounded-full">
          <ZapIcon className="size-10 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
          <p className="text-base-content mb-1">
            You've made too many requests in a short period. Please wait a moment.
          </p>
          <p className="text-sm text-base-content/70">
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;