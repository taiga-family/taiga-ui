import {NgModule} from '@angular/core';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {
    TuiFileComponent,
    TuiFilesComponent,
    TuiFilesModule,
} from '@taiga-ui/kit/components/files';

import {TuiInputFilesComponent} from './input-files.component';
import {TuiInputFilesDirective} from './input-files.directive';
import {TuiMaxSizeRejectionErrorPipe} from './max-size-rejection-error.pipe';

@NgModule({
    imports: [TuiFilesModule, TuiInputFilesComponent, TuiInputFilesDirective],
    declarations: [TuiMaxSizeRejectionErrorPipe],
    exports: [
        TuiInputFilesComponent,
        TuiInputFilesDirective,
        TuiFilesComponent,
        TuiFileComponent,
        TuiItemDirective,
    ],
})
export class TuiInputFilesModule {}
