import {TuiHintComponent} from './hint.component';
import {TuiHintDirective} from './hint.directive';
import {TuiHintDescribe} from './hint-describe.directive';
import {TuiHintDriver} from './hint-driver.directive';
import {TuiHintHost} from './hint-host.directive';
import {TuiHintHover} from './hint-hover.directive';
import {TuiHintManual} from './hint-manual.directive';
import {TuiHintOptionsDirective} from './hint-options.directive';
import {TuiHintOverflow} from './hint-overflow.directive';
import {TuiHintPointer} from './hint-pointer.directive';
import {TuiHintPosition} from './hint-position.directive';
import {TuiHintUnstyled} from './hint-unstyled.component';

export const TuiHint = [
    TuiHintComponent,
    TuiHintDirective,
    TuiHintOptionsDirective,
    TuiHintUnstyled,
    TuiHintDriver,
    TuiHintPosition,
    TuiHintHover,
    TuiHintOverflow,
    TuiHintDescribe,
    TuiHintHost,
    TuiHintManual,
    TuiHintPointer,
] as const;
