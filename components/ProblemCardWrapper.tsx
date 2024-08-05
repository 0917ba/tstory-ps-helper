import { ProblemCard } from './problem-card';

export default function ProblemCardWrapper() {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <ProblemCard className="bg-slate-50" />
      <ProblemCard className=" bg-yellow-50" />
      <ProblemCard className="bg-emerald-50" />
    </div>
  );
}
