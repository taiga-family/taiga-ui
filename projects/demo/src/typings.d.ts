declare module '!!raw-loader!*';
declare module 'highlight*';

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
    id: string;
}

declare module '*.html' {
    const result: string;

    export = result;
}
