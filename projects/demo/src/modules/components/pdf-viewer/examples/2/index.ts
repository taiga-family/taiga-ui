import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPopover} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs';

import {ActionsContentComponent} from './actions-content.component';
import {PdfContentComponent} from './pdf-content.component';

export type Buttons = ReadonlyArray<
    Readonly<{
        onClick(context: TuiPopover<TuiPdfViewerOptions<Buttons>, string>): void;
        text: string;
    }>
>;

@Component({
    selector: 'tui-pdf-viewer-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiPdfViewerExample2 {
    private readonly alerts = inject(TuiAlertService);
    private readonly pdfService = inject(TuiPdfViewerService);

    show(): void {
        const options: TuiPdfViewerOptions<Buttons> = {
            label: 'Taiga UI',
            actions: new PolymorpheusComponent(ActionsContentComponent),
            data: [
                {
                    text: 'Sign',
                    onClick: context => context.completeWith('Document signed'),
                },
                {
                    text: 'Deny',
                    onClick: context => context.completeWith('Document denied'),
                },
            ],
        };

        this.pdfService
            .open<string>(new PolymorpheusComponent(PdfContentComponent), options)
            .pipe(switchMap(response => this.alerts.open(response)))
            .subscribe();
    }
}
