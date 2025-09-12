import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiDialogService, TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiProgress,
        TuiTitle,
    ],
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
                label: '',
                size: 'fullscreen',
                closeable: false,
                dismissible: false,
            })
            .subscribe();
    }
}
