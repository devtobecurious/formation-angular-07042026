export interface Statistic {
  selfie: {
    id: string;
    title: string;
  },
  year: number;
  month: number;
  nbViews: number;
}

export type CreateStat = Omit<Statistic, 'selfie'> & {
  selfieId: number;
};

export type SavedStat = Statistic & {
  id: number;
};


export type Statistics = Array<Statistic>;
