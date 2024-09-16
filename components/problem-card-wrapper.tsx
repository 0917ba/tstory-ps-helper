'use client';

import { DndProvider } from 'react-dnd';
import { ProblemCard } from './problem-card';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function ProblemCardWrapper() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full flex flex-col items-center gap-3">
        <ProblemCard className="bg-slate-50" />
        <ProblemCard className=" bg-yellow-50" />
        <ProblemCard className="bg-emerald-50" />
      </div>
    </DndProvider>
  );
}
