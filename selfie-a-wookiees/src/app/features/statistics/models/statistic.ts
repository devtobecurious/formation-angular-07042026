export interface Statistic {
  selfie: {
    id: string;
    title: string;
  },
  year: number;
  month: number;
  nbViews: number;
}


export type Statistics = Array<Statistic>;
