import { GenerateCardProps } from '@/lib/interface'
import { Anchor, Image, LetterText, Mic2, Move, TransgenderIcon, Video, Wand2 } from 'lucide-react'
import React from 'react'
import GenerateCard from './GenerateCard';

export const generateData: GenerateCardProps[] = [
  {
    iconBg: "bg-gradient-to-b from-slate-900 to-slate-500",
    icon: <Image size={18} />,
    title: "Image",
    desc: "Generate images with custom styles in Flux and Ideogram,.",
    isNew: true,
  },
  {
    iconBg: "bg-orange-400",
    icon: <Video size={18} />,
    title: "Video",
    desc: "Generate videos with Haflux, Picx, Runway, Luma and more.",
    isNew: false,
  },
  {
    iconBg: "bg-gradient-to-b from-sky-400 to-sky-100",
    icon: <Anchor size={18} />,
    title: "Real-time",
    desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
    isNew: false,
  },
  {
    iconBg: "bg-gradient-to-b from-black to-gray-500",
    icon: <Wand2 size={18} />,
    title: "Enhancer",
    desc: "Update and enhance images and videos up to 22K.",
    isNew: true,
  },
  {
    iconBg: "bg-gradient-to-b from-purple-700 via-purple-500 to-gray-200",
    icon: <LetterText size={18} />,
    title: "Edit",
    desc: "Add objects, change style, or expand photos and generations",
    isNew: true,
  },
  {
    iconBg: "bg-gradient-to-b from-purple-800 via-slate-400 to-orange-100",
    icon: <Mic2 size={18} />,
    title: "Video Lipsync",
    desc: "Lipsync any video to any audio",
    isNew: false,
  },
  {
    iconBg: "bg-black",
    icon: <Move size={18} />,
    title: "Motion Transfer",
    desc: "Transfer motion to images and animate characters",
    isNew: false,
  },
  {
    iconBg: "bg-white dark:bg-black",
    icon: <TransgenderIcon size={18} className='text-black dark:text-white' />,
    title: "Train",
    desc: "Teach Krea to replicate your style, products and characters",
    isNew: true,
  },
];
const Generate = () => {
  return (
    <div>
      <h1 className='text-xl font-medium'>Generate</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {generateData.map((card, index) => (
          <GenerateCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Generate