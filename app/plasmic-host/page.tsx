"use client";

import dynamic from "next/dynamic";
import { PLASMIC } from "@/plasmic-init";

// Dynamically import PlasmicCanvasHost to avoid runtime conflicts
const PlasmicCanvasHost = dynamic(
  () => import("@plasmicapp/loader-nextjs").then((mod) => mod.PlasmicCanvasHost),
  { ssr: false } // Disable server-side rendering for this component
);

export default function PlasmicHostPage() {
  return (
    <div>
      {PLASMIC && <PlasmicCanvasHost />}
    </div>
  );
}

