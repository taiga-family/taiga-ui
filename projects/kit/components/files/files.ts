import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiFile} from './file/file.component';
import {TuiFilesComponent} from './files/files.component';
import {TuiInputFiles} from './input-files/input-files.component';
import {TuiInputFilesDirective} from './input-files/input-files.directive';
import {TuiFileRejectedPipe} from './pipes/file-rejected.pipe';

export const TuiFiles = [
    TuiItem,
    TuiFile,
    TuiInputFiles,
    TuiFilesComponent,
    TuiFileRejectedPipe,
    TuiInputFilesDirective,
] as const;
