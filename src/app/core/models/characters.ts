export interface Characters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: any
  },
  results: [
    {
      id?: number;
      name?: string;
      status?: string;
      species?: string;
      type?: string;
      gender?: string;
    }
  ]
}
