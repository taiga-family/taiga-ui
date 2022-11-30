export type Asset =
    | string
    | {glob: string; input: string; ignore: string[]; output: string};
