declare module '*';

/* SystemJS module definition */
declare var module: NodeModule;

// tslint:disable:interface-name
interface NodeModule {
    id: string;
}

declare module '!!file-loader!*' {
    const result: string;

    export = result;
}

declare module '!!raw-loader!*' {
    const result: string;

    export = result;
}

declare module '*.html' {
    const result: string;

    export = result;
}
