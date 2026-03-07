export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair;
};

export type Language = {
  name: string;
  jl: TranslatePair;
};
