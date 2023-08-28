export type TemplateResource =
    | {
          readonly componentPath: string;
          readonly offset: number;
          readonly template: string;
      }
    | {componentPath: string; readonly templatePath: string};
