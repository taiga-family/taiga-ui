import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDroppableModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
    TuiHoveredModule,
    TuiItemDirective,
    TuiLetModule,
    TuiPressedModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiGroupModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {
    TuiFileComponent,
    TuiFilesComponent,
    TuiFilesModule,
} from '@taiga-ui/kit/components/files';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputFilesComponent} from './input-files.component';

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
        TuiGroupModule,
        TuiFilesModule,
    ],
    declarations: [TuiInputFilesComponent],
    exports: [
        TuiInputFilesComponent,
        TuiFilesComponent,
        TuiFileComponent,
        TuiItemDirective,
    ],
})
export class TuiInputFilesModule {}
