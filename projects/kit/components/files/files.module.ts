import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusVisibleModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiGroupModule,
    TuiLoaderModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFileDirective} from './file.directive';
import {TuiFileComponent} from './file/file.component';
import {TuiFilesComponent} from './files.component';

@NgModule({
    declarations: [TuiFilesComponent, TuiFileComponent, TuiFileDirective],
    imports: [
        CommonModule,
        TuiGroupModule,
        TuiLoaderModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiFocusVisibleModule,
        TuiButtonModule,
        TuiExpandModule,
    ],
    exports: [TuiFilesComponent, TuiFileComponent, TuiFileDirective],
})
export class TuiFilesModule {}
