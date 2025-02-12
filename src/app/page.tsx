/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        width={50}
        height={50}
        alt="Logo"
        src='/logo.svg'
      />
      <p className="text-xl font-semibold tracking-tight">
        You channel
        </p>
    </div>
  );
}
