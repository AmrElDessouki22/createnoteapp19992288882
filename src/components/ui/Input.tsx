'use client';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      type="text"
      className="border p-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}