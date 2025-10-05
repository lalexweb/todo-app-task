import {cn} from '@/shared/utils/styles';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({className}: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} />;
}
