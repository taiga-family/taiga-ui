import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
    TuiAutoFocusDirective,
    TuiFilterPipe,
    TuiKeysPipe,
    TuiLetDirective,
} from '@taiga-ui/cdk';
import {TuiHint, TuiTextfieldControllerModule} from '@taiga-ui/core';
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
        TuiHint,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiLetDirective,
        TuiAutoFocusDirective,
    ],
    declarations: [IconsGroupComponent, IconsGroupDirective],
    exports: [IconsGroupComponent, IconsGroupDirective],
})
export class IconsGroupModule {}
