import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiCheckedModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
    TuiHoveredModule,
    TuiPressedModule,
} from '@taiga-ui/cdk';
import {TuiLoaderModule, TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiToggleComponent} from './toggle.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFocusedModule,
        TuiFocusableModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiFocusVisibleModule,
        TuiCheckedModule,
        TuiWrapperModule,
        TuiSvgModule,
        TuiLoaderModule,
        PolymorpheusModule,
    ],
    declarations: [TuiToggleComponent],
    exports: [TuiToggleComponent],
})
export class TuiToggleModule {}
