declare module '!!raw-loader!*';

declare module 'highlight*';

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
    id: string;
}

/* Import file's content as string.
To understand how it works, see `projects/demo/webpack.config.ts`.
*/
declare module '*?raw' {
    const result: string;

    export default result;
}

declare module '*.md' {
    const result: string;

    export = result;
}

declare module '*.less' {
    const result: string;

    export = result;
}

declare module '*.ts?raw' {
    const result: string;

    export = result;
}
