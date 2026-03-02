import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, type TuiHorizontalDirection, TuiPopup, TuiTitle} from '@taiga-ui/core';
import {TuiDrawer} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDemo,
        TuiDrawer,
        TuiHeader,
        TuiPopup,
        TuiTitle,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Full', 'Modal'];
    protected readonly directionVariants: readonly TuiHorizontalDirection[] = [
        'start',
        'end',
    ];

    protected open = signal(false);
    protected overlay = false;
    protected direction: TuiHorizontalDirection = 'end';

    public onClose(): void {
        this.open.set(false);
    }
}
`;export{t as default};
