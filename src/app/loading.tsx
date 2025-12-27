import { SpinnerCustom } from "@/components/Loader/Spinner";

export function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SpinnerCustom />
    </div>
  );
}

export default Loading;
