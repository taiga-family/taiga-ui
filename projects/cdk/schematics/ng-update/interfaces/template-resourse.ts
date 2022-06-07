export type TemplateResource =
    | {readonly template: string; readonly componentPath: string; readonly offset: number}
    | {readonly templatePath: string};
