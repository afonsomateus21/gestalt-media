export function ProximitySection() {
  return (
    <div className="h-[150px] w-[200px] bg-gradient-to-b from-[#2938A9] to-[#3032A5] grid grid-rows-2 grid-flow-col gap-4 p-8">
      <div className="size-9 rounded-full bg-white hover:bg-blue-700" />
      <div className="size-9 rounded-full bg-white hover:bg-blue-900" />
      <div className="size-9 rounded-full bg-white hover:bg-violet-900" />
      <div className="size-9 rounded-full bg-white hover:bg-violet-950" />
      <div className="size-9 rounded-full bg-violet-900 hover:bg-white" />
      <div className="size-9 rounded-full bg-blue-700 hover:bg-blue-950" />
    </div>
  );
}