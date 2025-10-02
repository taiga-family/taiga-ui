import {Component, signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiButton,
    TuiHeader,
    type TuiHorizontalDirection,
    TuiPopup,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiDrawer} from '@taiga-ui/kit';

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
        'left',
        'right',
    ];

    protected open = signal(false);
    protected overlay = false;
    protected direction: TuiHorizontalDirection = 'right';

    public onClose(): void {
        this.open.set(false);
    }
}
