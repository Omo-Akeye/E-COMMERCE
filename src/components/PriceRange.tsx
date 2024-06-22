import { useState } from "react";


export default function PriceRange() {
    const [IsOpen,setIsOpen] = useState<boolean>(true)
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10000);
    const MIN = 0;
    const MAX = 10000;

    const handleMinChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - 100);
        setMinValue(value);
      };
    
      const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + 100);
        setMaxValue(value);
      };
    
      const handleMinSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - 100);
        setMinValue(value);
      };
    
      const handleMaxSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + 100);
        setMaxValue(value);
      };
  
    return (
      <div className="py-3 text-sm font-semibold border-b-2">
          <div className="flex justify-between mb-1">
          <h2 className="text-semibold">Price Range</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsOpen(!IsOpen)}></i>
        </div>
         {
            IsOpen && (
                <>
                  <div className="relative pt-1">
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={minValue}
            onChange={handleMinSliderChange}
            className="absolute w-full pointer-events-none appearance-none bg-transparent h-1.5"
            style={{ zIndex: minValue > MAX / 2 ? 1 : 2 }}
          />
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={maxValue}
            onChange={handleMaxSliderChange}
            className="absolute w-full pointer-events-none appearance-none bg-transparent h-1.5"
            style={{ zIndex: maxValue > MAX / 2 ? 2 : 1 }}
          />
          <div className="relative w-full h-1.5 bg-gray-200 rounded">
            <div
              className="absolute h-1.5 bg-blue-500 rounded"
              style={{
                left: `${(minValue / MAX) * 100}%`,
                right: `${100 - (maxValue / MAX) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="w-24 p-1 border rounded"
          />
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-24 p-1 border rounded"
          />
        </div>
        <button className="w-full p-2 mt-4 text-sm text-white bg-black rounded">
          Apply
        </button></>
            )
         }
      </div>
    );
}
