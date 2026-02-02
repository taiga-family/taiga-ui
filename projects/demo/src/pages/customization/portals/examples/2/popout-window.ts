import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDialogService, TuiDropdown, TuiRoot} from '@taiga-ui/core';

@Component({
    selector: 'tui-popout-window',
    imports: [TuiButton, TuiDropdown, TuiRoot],
    templateUrl: './popout-window.html',
    styleUrl: './popout-window.less',
    changeDetection,
})
export class PopoutWindow {
    private readonly dialogs = inject(TuiDialogService);

    protected openDialog(): void {
        this.dialogs
            .open('The dialog lives in a separate window and uses its own portal.', {
                label: 'Popup window',
                size: 's',
            })
            .subscribe();
    }
}
