import { fetchProblemInfo } from '@/lib/solvedAPI';
import { ProblemCardClient } from './PCClient';

interface ProblemCardServerProps {
  problemId: number;
}

export default async function ProblemCardServer({
  problemId,
}: ProblemCardServerProps) {
  const problemInfo = await fetchProblemInfo(problemId);
  return problemInfo && <ProblemCardClient problemInfo={problemInfo} />;
}
