import {NgModule} from '@angular/core';

import {TuiHintComponent} from './hint.component';
import {TuiHintDirective} from './hint.directive';
import {TuiHintDescribeDirective} from './hint-describe.directive';
import {TuiHintDriverDirective} from './hint-driver.directive';
import {TuiHintHostDirective} from './hint-host.directive';
import {TuiHintHoverDirective} from './hint-hover.directive';
import {TuiHintManualDirective} from './hint-manual.directive';
import {TuiHintOptionsDirective} from './hint-options.directive';
import {TuiHintPointerDirective} from './hint-pointer.directive';
import {TuiHintPositionDirective} from './hint-position.directive';
import {
    TuiHintUnstyledComponent,
    TuiHintUnstyledDirective,
} from './hint-unstyled.component';

@NgModule({
    imports: [
        TuiHintComponent,
        TuiHintDirective,
        TuiHintDriverDirective,
        TuiHintHostDirective,
        TuiHintHoverDirective,
        TuiHintManualDirective,
        TuiHintPointerDirective,
        TuiHintDescribeDirective,
        TuiHintPositionDirective,
        TuiHintOptionsDirective,
        TuiHintUnstyledComponent,
        TuiHintUnstyledDirective,
    ],
    exports: [
        TuiHintComponent,
        TuiHintDirective,
        TuiHintDriverDirective,
        TuiHintHostDirective,
        TuiHintHoverDirective,
        TuiHintManualDirective,
        TuiHintPointerDirective,
        TuiHintDescribeDirective,
        TuiHintPositionDirective,
        TuiHintOptionsDirective,
        TuiHintUnstyledDirective,
    ],
})
export class TuiHint {}
