'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ItemTypes } from '@/lib/dnd';
import { getTierByLevel } from '@/lib/solvedAPI';
import { cn } from '@/lib/utils';
import { ProblemInfo, Tier } from '@/types/solved';
import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';

interface ProblemCardProps {
  problemInfo: ProblemInfo;
}

export function ProblemCardClient({ problemInfo }: ProblemCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [className, setClassName] = useState('');

  useEffect(() => {
    const problemTier = getTierByLevel(problemInfo.level);

    switch (problemTier.tier) {
      case 'bronze':
        setClassName('bg-bronze-light');
        break;
      case 'silver':
        setClassName('bg-silver-light');
        break;
      case 'gold':
        setClassName('bg-gold-light');
        break;
      case 'platinum':
        setClassName('bg-platinum-light');
        break;
      case 'diamond':
        setClassName('bg-diamond-light');
        break;
      case 'ruby':
        setClassName('bg-ruby-light');
        break;
      default:
        setClassName('');
    }
  }, [problemInfo.level]);

  return (
    <Card
      ref={drag as any}
      className={cn('w-full max-w-lg bg-background', className)}
    >
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{problemInfo.problemId}</h3>
          <p className="text-muted-foreground">{problemInfo.titleKo}</p>
        </div>
      </CardContent>
    </Card>
  );
}
