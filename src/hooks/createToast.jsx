import toast from "react-hot-toast";
import { cn } from "../lib/utils";

export const TOAST_TYPE = {
  SUCCESS: "success",
  WARN: "warn",
  ERROR: "error",
};

const createToast = (title, msg, type = TOAST_TYPE.SUCCESS) => {
  toast.custom(
    (activeToast) => (
      <div
        className={cn(
          "max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5",
          // activeToast.visible ? "animate-enter" : "animate-leave",
          {
            success: "bg-[#04b20c]",
            warn: "bg-[#eab90f]",
            error: "bg-[#e13f32]",
          }[type],
        )}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-1 text-sm text-white">{msg}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => {
              toast.remove(activeToast.id);
            }} // Dismiss on close button click
            type="button"
            className="mr-4 box-content rounded-none border-none opacity-100 hover:no-underline hover:opacity-50 focus:opacity-50 focus:shadow-none focus:outline-none text-white"
            aria-label="Close"
          >
            <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    ),
    {
      duration: 1000, // Auto-dismiss after 3 seconds
    },
  );
};

export default createToast;
