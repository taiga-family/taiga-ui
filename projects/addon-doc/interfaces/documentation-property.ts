export type TuiDocumentationPropertyType = 'input-output' | 'input' | 'output' | null;

export interface TuiDocumentationProperty {
    type: TuiDocumentationPropertyType;
    value?: string;
}
