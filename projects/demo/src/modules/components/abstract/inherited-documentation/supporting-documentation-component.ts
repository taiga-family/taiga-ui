import {AbstractExampleTuiControl} from '../control';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiInteractive} from '../interactive';

export type supportingDocumentationComponent =
    | AbstractExampleTuiInteractive
    | AbstractExampleTuiControl
    | AbstractExampleTuiHint;
