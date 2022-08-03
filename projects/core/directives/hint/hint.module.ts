import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHintComponent} from './hint.component';
import {TuiHintDirective} from './hint.directive';
import {TuiHintDriverDirective} from './hint-driver.directive';
import {TuiHintHostDirective} from './hint-host.directive';
import {TuiHintHoverDirective} from './hint-hover.directive';
import {TuiHintManualDirective} from './hint-manual.directive';
import {TuiHintPointerDirective} from './hint-pointer.directive';
import {TuiHintPositionDirective} from './hint-position.directive';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [
        TuiHintComponent,
        TuiHintDirective,
        TuiHintDriverDirective,
        TuiHintHostDirective,
        TuiHintHoverDirective,
        TuiHintManualDirective,
        TuiHintPointerDirective,
        TuiHintPositionDirective,
    ],
    exports: [
        TuiHintComponent,
        TuiHintDirective,
        TuiHintDriverDirective,
        TuiHintHostDirective,
        TuiHintHoverDirective,
        TuiHintManualDirective,
        TuiHintPointerDirective,
        TuiHintPositionDirective,
    ],
    entryComponents: [TuiHintComponent],
})
export class TuiHintModule {}
