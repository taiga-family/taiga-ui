import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TUI_DIALOGS} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiPdfFallbackModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TuiPdfViewerDirective} from './pdf-viewer.directive';
import {TuiPdfViewerService} from './pdf-viewer.service';

@NgModule({
    imports: [CommonModule, TuiButtonModule, PolymorpheusModule, TuiPdfFallbackModule],
    declarations: [TuiPdfViewerComponent, TuiPdfViewerDirective],
    exports: [TuiPdfViewerComponent, TuiPdfViewerDirective],
    providers: [
        {
            provide: TUI_DIALOGS,
            useExisting: TuiPdfViewerService,
            multi: true,
        },
    ],
    entryComponents: [TuiPdfViewerComponent],
})
export class TuiPdfViewerModule {}
