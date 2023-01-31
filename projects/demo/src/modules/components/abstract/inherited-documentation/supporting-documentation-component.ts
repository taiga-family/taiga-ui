import type {AbstractExampleTuiControl} from '../control';
import type {AbstractExampleTuiHint} from '../hint';
import type {AbstractExampleTuiInteractive} from '../interactive';

export type TuiSupportingDocumentationComponent =
    | AbstractExampleTuiControl
    | AbstractExampleTuiHint
    | AbstractExampleTuiInteractive;
