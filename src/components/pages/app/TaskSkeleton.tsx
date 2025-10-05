import {Skeleton} from '@/components/ui/Skeleton';

export default function TaskSkeleton() {
  return (
    <div className="flex items-start gap-3 p-4 border rounded-lg">
      <Skeleton className="size-4 aspect-square flex-shrink-0" />

      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>

      <Skeleton className="size-8 rounded" />
    </div>
  );
}
