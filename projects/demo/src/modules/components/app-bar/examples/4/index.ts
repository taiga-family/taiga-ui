import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService, TuiHeader, TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiCardLarge, TuiHeader, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected step = 0;

    protected open(template: TemplateRef<any>): void {
        this.step = 0;
        this.dialogs
            .open(template, {
                appearance: 'fullscreen',
                closable: false,
                dismissible: false,
            })
            .subscribe();
    }
}
