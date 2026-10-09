import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-stone-800 rounded-xl bg-stone-900/60 overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-stone-200 hover:text-amber-400 transition-colors"
            >
              <span className="text-sm">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-amber-400" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="p-4 pt-0 text-xs text-stone-400 border-t border-stone-800/40 leading-relaxed bg-stone-950/40">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}