'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function ProblemCardWrapperClient({ children }: any) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full flex flex-col items-center gap-3">{children}</div>
    </DndProvider>
  );
}
