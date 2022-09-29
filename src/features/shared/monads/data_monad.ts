export type DataMonad<T, U> =
  | { data: T; failure: undefined }
  | { data: undefined; failure: U };
