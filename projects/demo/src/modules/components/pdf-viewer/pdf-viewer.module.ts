import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLoaderModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiPdfViewerModule} from '@taiga-ui/kit';

import {TuiPdfViewerExample1} from './examples/1';
import {TuiPdfViewerExample2} from './examples/2';
import {ActionsContent} from './examples/2/actions-content.component';
import {PdfContent} from './examples/2/pdf-content.component';
import {TuiPdfViewerExample3} from './examples/3';
import {ExampleTuiPdfViewerComponent} from './pdf-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPdfViewerModule,
        TuiLoaderModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPdfViewerComponent)),
    ],
    declarations: [
        ExampleTuiPdfViewerComponent,
        PdfContent,
        ActionsContent,
        TuiPdfViewerExample1,
        TuiPdfViewerExample2,
        TuiPdfViewerExample3,
    ],
    exports: [ExampleTuiPdfViewerComponent],
})
export class ExampleTuiPdfViewerModule {}
