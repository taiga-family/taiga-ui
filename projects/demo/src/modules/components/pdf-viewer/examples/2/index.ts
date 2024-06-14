import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';
import type {TuiPdfViewerOptions} from '@taiga-ui/kit';
import {TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {ActionsContentComponent} from './actions-content';
import {PdfContentComponent} from './pdf-content';

export type Buttons = ReadonlyArray<
    Readonly<{
        onClick(context: TuiPopover<TuiPdfViewerOptions<Buttons>, string>): void;
        text: string;
    }>
>;

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alerts = inject(TuiAlertService);
    private readonly pdfService = inject(TuiPdfViewerService);

    protected show(): void {
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
