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
