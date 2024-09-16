import { ProblemInfo } from '@/types/solved';

export async function fetchProblemInfo(
  problemId: number
): Promise<ProblemInfo | null> {
  const url = `${process.env.SOLVEDAC_URL}/problem/show?problemId=${problemId}`;
  const options = {
    method: 'GET',
    headers: { 'x-solvedac-language': '', Accept: 'application/json' },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
