export default function GlassSurface({ className }: { className: string }) {
  return (
    <div
      className={`h-full w-full absolute top-0 left-0 z-5 ${className}`}
    ></div>
  );
}
