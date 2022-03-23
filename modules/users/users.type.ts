/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Response {
  data?: any;
  error?: {
    status: number | string;
    statusText: string;
  };
}
