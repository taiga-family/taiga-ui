import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiAsDialog} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TuiPdfViewerDirective} from './pdf-viewer.directive';
import {TuiPdfViewerService} from './pdf-viewer.service';

@NgModule({
    imports: [CommonModule, TuiButtonModule, PolymorpheusModule],
    declarations: [TuiPdfViewerComponent, TuiPdfViewerDirective],
    providers: [tuiAsDialog(TuiPdfViewerService)],
    exports: [TuiPdfViewerComponent, TuiPdfViewerDirective],
})
export class TuiPdfViewerModule {}
