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
import {TuiFileDirective} from '@taiga-ui/kit/components/files/file.directive';
import {TuiFileComponent} from '@taiga-ui/kit/components/files/file/file.component';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

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
