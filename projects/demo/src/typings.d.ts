declare module 'highlight*';

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
    id: string;
}

declare module '*.md' {
    const content: string;
    export default content;
}

declare module '*.html' {
    const content: string;
    export default content;
}

declare module '*.less' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

/**
 * At this time, TypeScript does not support type definitions that are based on import attribute values.
 * We cannot import Typescript files as raw text without @ts-ignore.
 * This is a workaround to do it without @ts-ignore
 * (adding ?raw postfix takes less space than @ts-ignore comment above).
 */
declare module '*.ts?raw' {
    const content: string;
    export default content;
}
