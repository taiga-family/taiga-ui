import {AbstractExampleTuiField} from '../field';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiReactiveField} from '../reactive-field';

export type supportingDocumentationComponent =
    | AbstractExampleTuiField
    | AbstractExampleTuiReactiveField
    | AbstractExampleTuiHint;
