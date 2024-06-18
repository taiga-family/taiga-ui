import {TuiHintComponent} from './hint.component';
import {TuiHintDirective} from './hint.directive';
import {TuiHintDescribe} from './hint-describe.directive';
import {TuiHintHost} from './hint-host.directive';
import {TuiHintManual} from './hint-manual.directive';
import {TuiHintOptionsDirective} from './hint-options.directive';
import {TuiHintPointer} from './hint-pointer.directive';

export const TuiHint = [
    TuiHintComponent,
    TuiHintDirective,
    TuiHintOptionsDirective,
    TuiHintDescribe,
    TuiHintHost,
    TuiHintManual,
    TuiHintPointer,
] as const;
