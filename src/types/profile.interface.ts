export interface ICredConfig {
  vc: Record<string, unknown>;
  excluded: string[];
}

export interface IProfileType {
  name: string;
  creds: ICredConfig[];
}
