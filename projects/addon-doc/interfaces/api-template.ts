import {TuiDocumentationProperty} from './documentation-property';

export interface TuiApiHostTemplate {
    tagName: string;
    baseProperties: Record<string, TuiDocumentationProperty>;
}
