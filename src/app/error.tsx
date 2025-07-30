'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-red-500">
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    </div>
  );
}