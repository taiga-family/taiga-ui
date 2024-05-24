import {NgModule} from '@angular/core';

import {TuiHintComponent} from './hint.component';
import {TuiHintDirective} from './hint.directive';
import {TuiHintDescribeDirective} from './hint-describe.directive';
import {TuiHintHostDirective} from './hint-host.directive';
import {TuiHintManualDirective} from './hint-manual.directive';
import {TuiHintOptionsDirective} from './hint-options.directive';
import {TuiHintPointerDirective} from './hint-pointer.directive';
import {TuiHintUnstyledDirective} from './hint-unstyled.component';

@NgModule({
    imports: [
        TuiHintComponent,
        TuiHintDirective,
        TuiHintOptionsDirective,
        TuiHintUnstyledDirective,
        TuiHintDescribeDirective,
        TuiHintHostDirective,
        TuiHintManualDirective,
        TuiHintPointerDirective,
    ],
    exports: [
        TuiHintComponent,
        TuiHintDirective,
        TuiHintOptionsDirective,
        TuiHintUnstyledDirective,
        TuiHintDescribeDirective,
        TuiHintHostDirective,
        TuiHintManualDirective,
        TuiHintPointerDirective,
    ],
})
export class TuiHint {}
