import {NgModule} from '@angular/core';
import {TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';

import {TuiFileComponent} from './file/file.component';
import {TuiFilesComponent} from './files/files.component';
import {TuiInputFilesComponent} from './input-files/input-files.component';
import {TuiInputFilesDirective} from './input-files/input-files.directive';
import {TuiFileRejectedPipe} from './pipes/file-rejected.pipe';

@NgModule({
    imports: [
        TuiItemModule,
        TuiFileRejectedPipe,
        TuiFileComponent,
        TuiFilesComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
    ],
    exports: [
        TuiItemDirective,
        TuiFileRejectedPipe,
        TuiFileComponent,
        TuiFilesComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
    ],
})
export class TuiFilesModule {}
