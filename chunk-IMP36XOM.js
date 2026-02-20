import"./chunk-HU6DUUP4.js";var e=`import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton} from '@taiga-ui/core';
import {TUI_TOAST_OPTIONS, TuiToast} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiDemo, TuiToast],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    private readonly options = inject(TUI_TOAST_OPTIONS);

    protected readonly examples = ['Basic', 'Customization', 'Service'];
    protected readonly toast = signal(false);
    protected readonly autoCloseVariants = [0, 3000, 5000, 1000, 500];
    protected autoClose = this.options.autoClose;
    protected content = 'Notification';
    protected appearance = '';
    protected closable = this.options.closable;
}
`;export{e as default};
