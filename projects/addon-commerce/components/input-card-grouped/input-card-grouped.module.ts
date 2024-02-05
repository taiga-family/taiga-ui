import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {TuiFormatCardModule} from '@taiga-ui/addon-commerce/pipes';
import {
    TuiActiveZoneModule,
    TuiAutoFocusModule,
    TuiFocusableModule,
    TuiLetModule,
    TuiMapperPipeModule,
} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        ResizeObserverModule,
        CommonModule,
        FormsModule,
        MaskitoDirective,
        TuiFocusableModule,
        TuiSvgModule,
        TuiWrapperModule,
        TuiActiveZoneModule,
        TuiMapperPipeModule,
        TuiDropdownModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiFormatCardModule,
        TuiAutoFocusModule,
    ],
    declarations: [TuiInputCardGroupedComponent],
    exports: [TuiInputCardGroupedComponent],
})
export class TuiInputCardGroupedModule {}
