import {AsyncPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TuiPdfViewerDirective} from './pdf-viewer.directive';

@NgModule({
    imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiButton, AsyncPipe],
    declarations: [TuiPdfViewerComponent, TuiPdfViewerDirective],
    exports: [TuiPdfViewerComponent, TuiPdfViewerDirective],
})
export class TuiPdfViewer {}
