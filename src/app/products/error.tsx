"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button
        className="border px-2 py-2 mx-2 bg-cyan-500 rounded-md"
        onClick={reset}
      >
        Recover From Error
      </button>
    </div>
  );
}