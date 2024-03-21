import type {AbstractExampleTuiControl} from '../control';
import type {AbstractExampleTuiHint} from '../hint';
import type {AbstractExampleTuiInteractive} from '../interactive';
import type {AbstractExampleTuiNumberFormat} from '../number-format';

export type TuiSupportingDocumentationComponent =
    | AbstractExampleTuiControl
    | AbstractExampleTuiHint
    | AbstractExampleTuiInteractive
    | AbstractExampleTuiNumberFormat;
