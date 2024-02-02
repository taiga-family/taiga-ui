import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TuiPdfViewerDirective} from './pdf-viewer.directive';

@NgModule({
    imports: [CommonModule, TuiButtonModule, PolymorpheusModule],
    declarations: [TuiPdfViewerComponent, TuiPdfViewerDirective],
    exports: [TuiPdfViewerComponent, TuiPdfViewerDirective],
})
export class TuiPdfViewerModule {}
