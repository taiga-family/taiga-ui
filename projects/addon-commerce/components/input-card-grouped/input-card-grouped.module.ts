import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiActiveZoneModule,
    TuiAutofilledModule,
    TuiFocusableModule,
    TuiHoveredModule,
} from '@taiga-ui/cdk';
import {TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';
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
        TuiHoveredModule,
        TuiActiveZoneModule,
        TuiAutofilledModule,
    ],
    declarations: [TuiInputCardGroupedComponent],
    exports: [TuiInputCardGroupedComponent],
})
export class TuiInputCardGroupedModule {}
