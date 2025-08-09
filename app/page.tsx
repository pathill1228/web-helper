import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-toggle";
import TitleScreen from "./titleScreen";

export default function Home() {
  return (
    <div className="relative">
      <TitleScreen />
      <ModeToggle />
    </div>
  );
}
