declare module 'rollup-pluginutils' {
    export type Filter = (id: string) => boolean;

    export function createFilter(include?: string, exclude?: string): Filter;
}
