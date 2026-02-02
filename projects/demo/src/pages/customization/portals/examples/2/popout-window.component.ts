import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDialogService, TuiDropdown, TuiRoot} from '@taiga-ui/core';

@Component({
    selector: 'tui-popout-window',
    imports: [TuiRoot, TuiButton, TuiDropdown],
    templateUrl: './popout-window.template.html',
    styleUrl: './popout-window.style.less',
    changeDetection,
})
export class PopoutWindowComponent {
    private readonly dialogs = inject(TuiDialogService);

    constructor() {
        console.log('PopoutWindowComponent initialized');
    }

    protected openDialog(): void {
        this.dialogs
            .open('Диалог живет в отдельном окне и использует свой портал.', {
                label: 'Попап окно',
                size: 's',
            })
            .subscribe();
    }
}
