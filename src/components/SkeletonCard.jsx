const SkeletonCard = () => {
  return (
    <div className="border-other-border bg-other-primary flex h-full animate-pulse flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col gap-4">
        <div className="h-40 w-full rounded-md bg-gray-300"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-3/4 rounded bg-gray-300"></div>
          <div className="h-3 w-1/2 rounded bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="flex flex-col gap-1">
            <div className="h-3 w-24 rounded bg-gray-300"></div>
            <div className="h-2 w-16 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
