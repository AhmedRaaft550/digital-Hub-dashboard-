import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-8 animate-spin", className)}
      size={24}
      {...props}
    />
  );
}

export function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4 h-screen justify-center">
      <Spinner className="size-8 text-amber-800" />
    </div>
  );
}
