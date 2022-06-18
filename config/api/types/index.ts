export type Variant = string[];

export type Traits = {
  [key: string]: Variant;
};

export type SelectedTraits = { [key: string]: string };

export type ApiError = {
  code: number;
  message: string;
};
