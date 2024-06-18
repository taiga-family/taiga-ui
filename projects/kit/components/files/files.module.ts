import {NgModule} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';

import {TuiFileComponent} from './file/file.component';
import {TuiFilesComponent} from './files/files.component';
import {TuiInputFilesComponent} from './input-files/input-files.component';
import {TuiInputFilesDirective} from './input-files/input-files.directive';
import {TuiFileRejectedPipe} from './pipes/file-rejected.pipe';

@NgModule({
    imports: [
        TuiItem,
        TuiFileRejectedPipe,
        TuiFileComponent,
        TuiFilesComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
    ],
    exports: [
        TuiItem,
        TuiFileRejectedPipe,
        TuiFileComponent,
        TuiFilesComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
    ],
})
export class TuiFiles {}
