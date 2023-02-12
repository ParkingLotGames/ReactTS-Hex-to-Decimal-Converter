import React, { useState } from "react";

const HexToDecimal: React.FC = () => {
  const [hex, setHex] = useState("");
  const [decimal, setDecimal] = useState("");

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHex(e.target.value);
    setDecimal(parseInt(e.target.value, 16).toString());
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 appearance-none leading-normal"
        placeholder="Enter Hexadecimal Number"
        value={hex}
        onChange={handleHexChange}
      />
      <p className="mt-4 text-xl font-medium">Decimal: {decimal}</p>
    </div>
  );
};

export default HexToDecimal;
