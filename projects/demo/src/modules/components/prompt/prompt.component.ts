import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAlertService, TuiDialogService} from '@taiga-ui/core';
import {TUI_PROMPT, TuiPromptData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    selector: 'example-tui-prompt',
    templateUrl: './prompt.template.html',
    changeDetection,
})
export class ExampleTuiPromptComponent implements TuiPromptData {
    private readonly dialogs = inject(TuiDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleService = import('./examples/import/service.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    public readonly content =
        'This is <code>PolymorpheusContent</code>, so it can be anything you like!';

    public no = 'No';
    public yes = 'Yes';

    protected onClick(): void {
        this.dialogs
            .open<boolean>(TUI_PROMPT, {
                label: 'Are you sure?',
                size: 's',
                data: this,
            })
            .pipe(switchMap(response => this.alerts.open(String(response))))
            .subscribe();
    }
}
