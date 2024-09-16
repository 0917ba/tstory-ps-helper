import ProblemCardServer from './PCServer';
import ProblemCardWrapperClient from './PCWrapperClient';

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
          <ProblemCardServer key={number} problemId={number} />
        ))}
      </ProblemCardWrapperClient>
    )
  );
}
