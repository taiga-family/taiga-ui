import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialog} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs/operators';

import {ActionsContentComponent} from './actions-content.component';
import {PdfContentComponent} from './pdf-content.component';

export type Buttons = ReadonlyArray<
    Readonly<{
        onClick(context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>): void;
        text: string;
    }>
>;

@Component({
    selector: 'tui-pdf-viewer-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiPdfViewerExample2 {
    constructor(
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
    ) {}

    show(): void {
        const options: TuiPdfViewerOptions<Buttons> = {
            actions: new PolymorpheusComponent(ActionsContentComponent),
            data: [
                {
                    onClick: context => context.completeWith('Document signed'),
                    text: 'Sign',
                },
                {
                    onClick: context => context.completeWith('Document denied'),
                    text: 'Deny',
                },
            ],
            label: 'Taiga UI',
        };

        this.pdfService
            .open<string>(new PolymorpheusComponent(PdfContentComponent), options)
            .pipe(switchMap(response => this.alerts.open(response)))
            .subscribe();
    }
}
