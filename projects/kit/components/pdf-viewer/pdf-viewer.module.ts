import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TuiPdfViewerDirective} from './pdf-viewer.directive';

@NgModule({
    imports: [CommonModule, TuiButtonDirective, PolymorpheusModule],
    declarations: [TuiPdfViewerComponent, TuiPdfViewerDirective],
    exports: [TuiPdfViewerComponent, TuiPdfViewerDirective],
})
export class TuiPdfViewerModule {}
