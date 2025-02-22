import track1 from "@/public/svgs/tracks/track1Front.svg";
import track2 from "@/public/svgs/tracks/track2Front.svg";
import track3 from "@/public/svgs/tracks/track3Front.svg";
import track4 from "@/public/svgs/tracks/track4Front.svg";
import track1Back from "@/public/svgs/tracks/track1Back.svg";
import track2Back from "@/public/svgs/tracks/track2Back.svg";
import track3Back from "@/public/svgs/tracks/track3Back.svg";
import track4Back from "@/public/svgs/tracks/track4Back.svg";

export const TRACKS = [
  {
    title: "Global Impact Design",
    front: track1,
    describe: "Examining the Social Impacts of Inclusive & Eco-Friendly Design",
    back: track1Back,
    bg: "bg-track-blue",
    text: "text-track-blue",
    border: "border-track-blue",
  },
  {
    title: "Beginner's Track: Design 101",
    front: track2,
    describe: "Design 101:Practice & Perfect Fundamental Design Principles",
    back: track2Back,
    bg: "bg-track-red",
    text: "text-track-red",
    border: "border-track-red",
  },
  {
    title: "Deep Dive Into Prototyping",
    front: track3,
    describe:
      "Put Your Skills to the Test and Ideate Solutions—UX Research Challenge",
    back: track3Back,
    bg: "bg-track-green",
    text: "text-track-green",
    border: "border-track-green",
  },
  {
    title: "Visionary's Challenge",
    front: track4,
    describe:
      "Broadening horizons in a real-world context through visual design principles and functionality",
    back: track4Back,
    bg: "bg-track-yellow",
    text: "text-track-yellow",
    border: "border-track-yellow",
  },
];
