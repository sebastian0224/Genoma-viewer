"use client";

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
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <div className="relative flex items-center gap-2 sm:gap-3 p-2 bg-bg-card rounded-xl border border-[#3f4147] focus-within:border-[#c4d82e] transition-all duration-200 shadow-lg">
            <div className="pl-3 sm:pl-4 pr-1 sm:pr-2 shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-text-muted"
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
              placeholder="Enter name..."
              className="flex-1 py-3 sm:py-4 px-2 text-base sm:text-lg bg-transparent border-none outline-none text-text-primary placeholder:text-text-muted"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={!username.trim() || isLoading}
              className="px-4 sm:px-8 py-3 sm:py-4 bg-[#c4d82e] text-bg-primary font-semibold rounded-lg hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-xl shrink-0"
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
                  <span className="hidden sm:inline">Searching...</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Search</span>
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
    </div>
  );
}
