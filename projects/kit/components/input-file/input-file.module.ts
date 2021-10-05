import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDroppableModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
    TuiHoveredModule,
    TuiLetModule,
    TuiPressedModule,
    TuiPreventDefaultModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiGroupModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiFileComponent} from './file/file.component';
import {TuiInputFileComponent} from './input-file.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiFocusedModule,
        TuiFocusVisibleModule,
        TuiPressedModule,
        TuiHoveredModule,
        TuiFocusableModule,
        TuiDroppableModule,
        TuiWrapperModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiLoaderModule,
        TuiButtonModule,
        TuiPreventDefaultModule,
        TuiGroupModule,
    ],
    declarations: [TuiFileComponent, TuiInputFileComponent],
    exports: [TuiInputFileComponent],
})
export class TuiInputFileModule {}
