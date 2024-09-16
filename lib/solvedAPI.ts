import { ExactTier, ProblemInfo, Tier } from '@/types/solved';

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

export function getTierByLevel(level: number): ExactTier {
  switch (true) {
    case level <= 0:
      return { tier: 'unrated', level: 0 };
    case level <= 5:
      return { tier: 'bronze', level: 6 - level };
    case level <= 10:
      return { tier: 'silver', level: 11 - level };
    case level <= 15:
      return { tier: 'gold', level: 16 - level };
    case level <= 20:
      return { tier: 'platinum', level: 21 - level };
    case level <= 25:
      return { tier: 'diamond', level: 26 - level };
    case level <= 30:
      return { tier: 'ruby', level: 31 - level };
    default:
      return { tier: 'unrated', level: 0 };
  }
}
