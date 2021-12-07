export interface ICredConfig {
  vc: Record<string, unknown>;
  excluded: string[];
}

export interface IProfileType {
  _id: string;
  name: string;
  authorized: string[];
  creds: ICredConfig[];
}
