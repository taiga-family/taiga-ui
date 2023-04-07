import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
    TuiFilterPipeModule,
    TuiForAsyncModule,
    TuiKeysPipeModule,
    TuiLetModule,
} from '@taiga-ui/cdk';
import {TuiHintModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiBadgeModule, TuiInputModule} from '@taiga-ui/kit';

import {IconsGroupComponent} from './icons-group.component';
import {IconsGroupDirective} from './icons-group.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiInputModule,
        TuiBadgeModule,
        TuiForAsyncModule,
        TuiKeysPipeModule,
        TuiFilterPipeModule,
        TuiHintModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiLetModule,
    ],
    declarations: [IconsGroupComponent, IconsGroupDirective],
    exports: [IconsGroupComponent, IconsGroupDirective],
})
export class IconsGroupModule {}
