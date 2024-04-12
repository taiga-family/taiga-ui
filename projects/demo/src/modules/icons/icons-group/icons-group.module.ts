import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
    TuiAutoFocusDirective,
    TuiFilterPipe,
    TuiKeysPipe,
    TuiLetModule,
} from '@taiga-ui/cdk';
import {TuiHintModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiBadgeDirective, TuiInputModule} from '@taiga-ui/kit';

import {IconsGroupComponent} from './icons-group.component';
import {IconsGroupDirective} from './icons-group.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiInputModule,
        TuiBadgeDirective,
        TuiKeysPipe,
        TuiFilterPipe,
        TuiHintModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiLetModule,
        TuiAutoFocusDirective,
    ],
    declarations: [IconsGroupComponent, IconsGroupDirective],
    exports: [IconsGroupComponent, IconsGroupDirective],
})
export class IconsGroupModule {}
