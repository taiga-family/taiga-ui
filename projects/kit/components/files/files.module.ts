import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand, TuiIcon, TuiLoader} from '@taiga-ui/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiFile} from './file/file.component';
import {TuiFilesComponent} from './files/files.component';
import {TuiInputFilesComponent} from './input-files/input-files.component';
import {TuiInputFilesDirective} from './input-files/input-files.directive';
import {TuiFileRejectedPipe} from './pipes/file-rejected.pipe';

@NgModule({
    imports: [
        TuiItem,
        AsyncPipe,
        TuiButton,
        NgIf,
        PolymorpheusOutlet,
        TuiLoader,
        TuiIcon,
        NgTemplateOutlet,
        TuiExpand,
        NgForOf,
    ],
    declarations: [
        TuiFileRejectedPipe,
        TuiFile,
        TuiFilesComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
    ],
    exports: [
        TuiItem,
        TuiFileRejectedPipe,
        TuiFile,
        TuiFilesComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
    ],
})
export class TuiFiles {}
