import { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden group shadow-xl">
      {/* After Image */}
      <img
        src={afterImage}
        alt="Dopo il trattamento"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image with clip-path */}
      <img
        src={beforeImage}
        alt="Prima del trattamento"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      />

      {/* Slider Handle Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-sm pointer-events-none z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle Knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform group-hover:scale-110">
          <MoveHorizontal className="text-slate-500 w-5 h-5" />
        </div>
      </div>

      {/* Range Input (Invisible) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
      
      {/* Labels */}
      <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity z-10">
        Prima
      </div>
      <div className="absolute top-4 right-4 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity z-10">
        Dopo
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
