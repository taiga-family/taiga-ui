import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiDialogService, TuiNotificationService} from '@taiga-ui/core';
import {TUI_CONFIRM, type TuiConfirmData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiButton, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example implements TuiConfirmData {
    private readonly dialogs = inject(TuiDialogService);
    private readonly alerts = inject(TuiNotificationService);

    protected readonly routes = DemoRoute;
    protected readonly examples = ['Basic'];
    protected readonly exampleService = import('./examples/import/service.md');

    public readonly appearances = ['primary', 'accent', 'secondary'];
    public appearance = this.appearances[0]!;
    public no = 'No';
    public yes = 'Yes';

    public readonly content =
        'This is <code>PolymorpheusContent</code>, so it can be anything you like!';

    protected onClick(): void {
        this.dialogs
            .open<boolean>(TUI_CONFIRM, {
                label: 'Are you sure?',
                size: 's',
                data: this,
            })
            .pipe(switchMap((response) => this.alerts.open(String(response))))
            .subscribe();
    }
}
`;export{i as default};
