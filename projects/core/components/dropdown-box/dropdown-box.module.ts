import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiOverscrollModule} from '@taiga-ui/cdk';
import {TuiScrollbarModule} from '@taiga-ui/core/components/scrollbar';
import {TuiModeModule} from '@taiga-ui/core/directives/mode';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiDropdownBoxComponent} from './dropdown-box.component';

@NgModule({
    imports: [
        TuiActiveZoneModule,
        PolymorpheusModule,
        TuiOverscrollModule,
        TuiScrollbarModule,
        TuiModeModule,
    ],
    entryComponents: [TuiDropdownBoxComponent],
    declarations: [TuiDropdownBoxComponent],
    exports: [TuiDropdownBoxComponent],
})
export class TuiDropdownBoxModule {}
