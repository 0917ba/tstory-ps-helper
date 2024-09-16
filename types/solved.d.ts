export interface ProblemTitleTranslated {
  language: string;
  languageDisplay: string;
  title: string;
  isOriginal: boolean;
}

export interface ProblemTagAlias {
  alias: string;
}

export interface ProblemTag {
  key: string;
  isMeta: boolean;
  bojTagId: number;
  problemCount: number;
  displayNames: ProblemTagNameTranslated[];
  aliases: ProblemTagAlias[];
}

export interface ProblemInfo {
  problemId: number;
  titleKo: string;
  titles: ProblemTitleTranslated[];
  isSolvable: boolean;
  isPartial: boolean;
  acceptedUserCount: number;
  level: number;
  votedUserCount: number;
  sprout: boolean;
  givesNoRating: boolean;
  isLevelLocked: boolean;
  averageTries: number;
  official: boolean;
  tags: ProblemTag[];
  metadata: any;
}
