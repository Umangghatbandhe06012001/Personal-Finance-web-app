import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonLoading({ txt }: { txt: string }) {
  return (
    <Button size="sm" disabled className="flex items-center gap-2">
      <Loader2Icon className="w-4 h-4 animate-spin" />
      {txt}
    </Button>
  );
}
