import { ToggleColorModeButton } from "@/components/ToggleColorModeButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="secondary" className="bg-slate-200">
        Test
      </Button>
      <ToggleColorModeButton />
    </main>
  );
}
