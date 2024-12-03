"use client";

// import { Button } from "@/components/ui/button";
import Image from "next/image";
import RoutineImg from "~/public/image/image1.png"

const skinTypes = [
  ["Normal", "Dry", "Oily"],
  ["Combination", "Sensitive"]
];

export default function DesignRoutine() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:px-16">
      <div className="bg-rose-200 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image Section - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block relative h-[600px]">
            <Image
              src={RoutineImg}
              alt="Skincare Routine"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
            {/* Mobile Image */}
            <div className="md:hidden w-full aspect-square relative mb-8 rounded-2xl overflow-hidden">
              <Image
                src={RoutineImg}
                alt="Skincare Routine"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              DESIGN YOUR ROUTINE
            </h2>

            <p className="text-gray-700 mb-8 max-w-md">
              Take care of your skin according to your skin type. Let us help you to
              find out the basic skin care routine that matches your skin.
            </p>

            <div className="space-y-4 w-full max-w-md">
              {skinTypes.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-4">
                  {row.map((type) => (
                    <button
                      key={type}
                    //   variant="secondary"
                      className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-2 rounded-md transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}