import { FallbackProps } from "react-error-boundary";

export default function Error({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <pre className="rounded-lg bg-gray-100 p-4">
        <code>{error.message}</code>
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
} 