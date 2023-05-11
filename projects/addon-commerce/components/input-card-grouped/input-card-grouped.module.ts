import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoModule} from '@maskito/angular';
import {TuiFormatCardModule} from '@taiga-ui/addon-commerce/pipes';
import {
    TuiActiveZoneModule,
    TuiAutoFocusModule,
    TuiFocusableModule,
    TuiLetModule,
    TuiMapperPipeModule,
    TuiPreventDefaultModule,
    TuiResizeModule,
} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaskitoModule,
        TuiFocusableModule,
        TuiSvgModule,
        TuiWrapperModule,
        TuiActiveZoneModule,
        TuiMapperPipeModule,
        TuiDropdownModule,
        TuiPreventDefaultModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiResizeModule,
        TuiFormatCardModule,
        TuiAutoFocusModule,
    ],
    declarations: [TuiInputCardGroupedComponent],
    exports: [TuiInputCardGroupedComponent],
})
export class TuiInputCardGroupedModule {}
