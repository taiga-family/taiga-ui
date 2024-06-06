import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {
    TuiAlertService,
    TuiButtonDirective,
    TuiDialogService,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import type {TuiConfirmData} from '@taiga-ui/kit';
import {TUI_CONFIRM} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiLinkDirective,
        RouterModule,
        TuiNotificationComponent,
        TuiDemo,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent implements TuiConfirmData {
    private readonly dialogs = inject(TuiDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected readonly routes = DemoRoute;
    protected readonly examples = ['Basic'];
    protected readonly exampleService = import('./examples/import/service.md?raw');

    public readonly appearances = ['primary', 'accent', 'secondary'];
    public appearance = this.appearances[0];
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
            .pipe(switchMap(response => this.alerts.open(String(response))))
            .subscribe();
    }
}
