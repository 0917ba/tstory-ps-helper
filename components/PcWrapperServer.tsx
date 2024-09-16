import ProblemCardWrapperClient from './PcWrapperClient';
import { ProblemCard } from './ProblemCard';

interface ProblemCardWrapperServerProps {
  problemNumbers?: number[];
}

export default function ProblemCardWrapperServer({
  problemNumbers,
}: ProblemCardWrapperServerProps) {
  return (
    problemNumbers && (
      <ProblemCardWrapperClient>
        {problemNumbers.map((number) => (
          <ProblemCard key={number} />
        ))}
      </ProblemCardWrapperClient>
    )
  );
}
