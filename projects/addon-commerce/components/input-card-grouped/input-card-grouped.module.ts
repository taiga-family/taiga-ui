import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFormatCardModule} from '@taiga-ui/addon-commerce/pipes';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiLetModule,
    TuiMapperPipeModule,
    TuiPreventDefaultModule,
} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TextMaskModule,
        TuiFocusableModule,
        TuiSvgModule,
        TuiWrapperModule,
        TuiActiveZoneModule,
        TuiMapperPipeModule,
        TuiDropdownModule,
        TuiPreventDefaultModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiFormatCardModule,
    ],
    declarations: [TuiInputCardGroupedComponent],
    exports: [TuiInputCardGroupedComponent],
})
export class TuiInputCardGroupedModule {}
