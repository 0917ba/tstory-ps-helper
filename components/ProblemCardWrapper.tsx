import { ProblemCard } from './problem-card';

export default function ProblemCardWrapper() {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <ProblemCard />
      <ProblemCard />
      <ProblemCard />
    </div>
  );
}
