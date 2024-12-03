"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import HeroImg from "~/public/image/image0.png";

export default function ProductHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ALL YOU NEED IN ONE PACK
          </h1>
          <div className="text-rose-700 text-3xl font-bold mb-6">$300</div>
          <p className="text-gray-700 mb-8">
            Moisturizer, Sunscreen, Face toner, Cleansing balm, and Face wash
            now comes in a single pack.
          </p>
          <button className="bg-rose-700 text-white px-8 py-3 rounded-md hover:bg-rose-800 transition-colors">
            SHOP NOW
          </button>

          <div className="mt-12">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-600 stroke-amber-600"
                />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "I bought this pack and it made my purchasing of skincare products
              make super easy. Each of the product were amazing and can be used
              for every skin types. I just love it"
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="bg-rose  md:h-[400px] ">
            <Image
              src={HeroImg}
              alt="Skincare Product Pack"
                width={1000}
                height={1000}
            //   fill
              className="w-full h-auto "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
