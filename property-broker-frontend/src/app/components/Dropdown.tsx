import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export default function Dropdown({ label, options, value, onChange }: DropdownProps) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="font-medium">{label}</span>}
      <select
        className="border border-gray-300 rounded-md p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled hidden>
          Selecciona una opción
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
