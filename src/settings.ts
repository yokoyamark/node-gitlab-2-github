export default interface Settings {
  debug: boolean;
  gitlab: GitlabSettings;
  github: GithubSettings;
  usermap: {
    [key: string]: string;
  };
  projectmap: {
    [key: string]: string;
  };
  conversion: {
    useLowerCaseLabels: boolean;
  };
  transfer: {
    description: boolean;
    milestones: boolean;
    labels: boolean;
    issues: boolean;
    mergeRequests: boolean;
    releases: boolean;
  };
  useIssueImportAPI: boolean;
  usePlaceholderMilestonesForMissingMilestones: boolean;
  usePlaceholderIssuesForMissingIssues: boolean;
  useReplacementIssuesForCreationFails: boolean;
  useIssuesForAllMergeRequests: boolean;
  filterByLabel?: string;
  skipMergeRequestStates: string[];
  skipMatchingComments: string[];
  mergeRequests: {
    logFile: string;
    log: boolean;
  };
  s3?: S3Settings;
}

export interface GithubSettings {
  baseUrl?: string;
  apiUrl?: string;
  owner: string;
  token: string;
  token_owner: string;
  repo: string;
  timeout?: number;
  username?: string; // when is this set???
  recreateRepo?: boolean;
  proxy?: string;
}

export interface GitlabSettings {
  url?: string;
  token: string;
  projectId: number;
  sessionCookie: string;
}

export interface S3Settings {
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
}
