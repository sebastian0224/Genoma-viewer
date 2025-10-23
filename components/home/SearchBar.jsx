// export default function SearchBar() {
//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
//       <div className="relative">
//         <div className="relative flex items-center gap-2 p-2 bg-white rounded-2xl shadow-lg border border-[var(--color-border)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-opacity-20 transition-all">
//           {/* Search Icon */}
//           <div className="pl-4 pr-2">
//             <svg
//               className="w-5 h-5 text-[var(--color-text-muted)]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </div>

//           {/* Input */}
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter Torre username..."
//             className="flex-1 py-3 px-2 text-base bg-transparent border-none outline-none text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
//             disabled={isLoading}
//           />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={!username.trim() || isLoading}
//             className="px-6 py-3 bg-[var(--color-primary)] text-black font-medium rounded-xl hover:bg-[var(--color-primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
//           >
//             {isLoading ? (
//               <>
//                 <svg
//                   className="animate-spin h-5 w-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 <span className="hidden sm:inline">Loading...</span>
//               </>
//             ) : (
//               <>
//                 <span>Search</span>
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </>
//             )}
//           </button>
//         </div>

//         {/* Suggestions
//         <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
//           <span className="text-sm text-[var(--color-text-muted)]">Try:</span>
//           {["torrenegra", "john", "maria"].map((suggestion) => (
//             <button
//               key={suggestion}
//               type="button"
//               onClick={() => setUsername(suggestion)}
//               className="px-3 py-1.5 text-sm bg-white border border-(--color-border) rounded-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
//             >
//               {suggestion}
//             </button>
//           ))}
//         </div> */}
//       </div>
//     </form>
//   );
// }

import { useState } from "react";

export default function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="relative flex items-center gap-2 p-2 bg-white rounded-2xl shadow-lg border border-[var(--color-border)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-opacity-20 transition-all">
          <div className="pl-4 pr-2">
            <svg
              className="w-5 h-5 text-[var(--color-text-muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Torre username..."
            className="flex-1 py-3 px-2 text-base bg-transparent border-none outline-none text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={!username.trim() || isLoading}
            className="px-6 py-3 bg-[var(--color-primary)] text-black font-medium rounded-xl hover:bg-[var(--color-primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="hidden sm:inline">Loading...</span>
              </>
            ) : (
              <>
                <span>Search</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
