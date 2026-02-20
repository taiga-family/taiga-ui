import"./chunk-HU6DUUP4.js";var t=`import {Component, inject, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService, TuiInput, TuiPopup, TuiTitle} from '@taiga-ui/core';
import {TUI_CONFIRM, TuiDrawer} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';
import {filter} from 'rxjs';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDrawer,
        TuiHeader,
        TuiInput,
        TuiPopup,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dialogs = inject(TuiDialogService);
    protected readonly control = new FormControl('Some value');
    protected readonly open = signal(false);

    public onClose(): void {
        if (this.control.pristine) {
            this.open.set(false);

            return;
        }

        this.dialogs
            .open(TUI_CONFIRM, {
                label: 'Cancel editing form?',
                size: 's',
                data: {content: 'You have unsaved changes that will be lost'},
            })
            .pipe(filter(Boolean))
            .subscribe(() => {
                this.open.set(false);
                this.control.reset('Some value');
            });
    }
}
`;export{t as default};
