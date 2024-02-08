import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusVisibleModule, TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiGroupModule,
    TuiLoaderModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFileComponent} from './file/file.component';
import {TuiFilesComponent} from './files.component';

@NgModule({
    imports: [
        CommonModule,
        TuiGroupModule,
        TuiLoaderModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiFocusVisibleModule,
        TuiButtonModule,
        TuiItemModule,
        TuiExpandModule,
    ],
    declarations: [TuiFilesComponent, TuiFileComponent],
    exports: [TuiFilesComponent, TuiFileComponent, TuiItemDirective],
})
export class TuiFilesModule {}
