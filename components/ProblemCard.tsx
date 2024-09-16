'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ItemTypes } from '@/lib/dnd';
import { cn } from '@/lib/utils';
import { useDrag } from 'react-dnd';

interface ProblemCardProps {
  className?: string;
}

export function ProblemCard({ className }: { className?: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card
      ref={drag as any}
      className={cn('w-full max-w-lg bg-background', className)}
    >
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">문제번호</h3>
          <p className="text-muted-foreground">문제내용</p>
        </div>
      </CardContent>
    </Card>
  );
}
