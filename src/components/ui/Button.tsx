'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}