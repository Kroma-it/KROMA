import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  link: string
}
const slides: Slide[] = [
  {
    id: '01',
    number: '01 / 03',
    title: 'NEON DYNAMICS',
    description: "Redefining the digital ecosystem for the world's leading performance automotive brand.",
    tag: 'FEATURED PROJECT',
    image: '/assets/lybek.png',
    link : 'https://lybek.vercel.app'
  },
  {
    id: '02',
    number: '02 / 03',
    title: 'PRISMATIC FLOW',
    description: "Creating a seamless visual identity for next-generation tech startups.",
    tag: 'BRANDING DESIGN',
    image: '/assets/slide2.png',
    link:''
  },
  {
    id: '03',
    number: '03 / 03',
    title: 'AETHERIAL VISION',
    description: "Pushing the boundaries of immersive web experiences through minimalist art.",
    tag: 'WEB DEVELOPMENT',
    image: '/assets/slide3.png',
    link:''
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsExiting(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsExiting(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsExiting(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#02060B] flex items-center justify-center">
      {/* Background Asset - Enhanced */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000">
            <img 
              key={slides[currentSlide].image}
              src={slides[currentSlide].image} 
              alt="background effect"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-60 mix-blend-screen scale-110 animate-fade-in"
            />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-kroma-700 bg-black/30" />

        {/* Secondary Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-12 md:px-24 relative z-10">
        <div className={`transition-all duration-700 delay-100 ${isExiting ? 'opacity-0 -translate-x-12 blur-sm' : 'opacity-100 translate-x-0 blur-0'}`}>

          {/* Tagline */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-fuchsia-600" />
            <span className="text-fuchsia-500 text-xs font-bold tracking-[0.3em] uppercase">
              {slides[currentSlide].tag} {slides[currentSlide].number}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-10 drop-shadow-2xl">
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>

          {/* Description */}
          <div className="max-w-xl mb-12">
            <p className="text-white/50 text-xl leading-relaxed font-light tracking-wide">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Button */}
          <a href={slides[currentSlide].link}>  
          <button className="group relative flex items-center gap-6 px-10 py-5 bg-fuchsia-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_25px_50px_-15px_rgba(192,38,211,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 group-hover:from-fuchsia-400 group-hover:to-purple-500 transition-all" />
            <span className="relative text-white font-bold text-lg tracking-wide">Explore</span>
            
            <ArrowRight className="relative text-white w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 right-16 z-30 flex gap-6">
        <button
          onClick={prevSlide}
          className="group w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="group w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Background Projects Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
       
      </div>
    </div>
  );
}
