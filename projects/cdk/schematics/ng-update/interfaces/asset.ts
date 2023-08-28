export type Asset =
    | string
    | {glob: string; ignore: string[]; input: string; output: string};
