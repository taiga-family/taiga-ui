import {Component, inject, ViewChild} from '@angular/core';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiFallbackSrcPipe, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiToast, TuiToastService} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiDemo,
        TuiDocIcons,
        TuiFallbackSrcPipe,
        TuiIcon,
        TuiTitle,
        TuiToast,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    @ViewChild('icons')
    private readonly icons!: TuiDocIcons;

    private readonly toast = inject(TuiToastService);

    protected readonly examples = [
        'Basic',
        'Customization',
        'Notification',
        'Mobile notification',
    ];

    protected content = 'Notification';

    protected readonly exampleAlert = import('./examples/import/alert.md?raw');

    protected readonly autoCloseVariants = [0, 3000, 5000, 1000, 500];

    protected autoClose = this.autoCloseVariants[1]!;

    protected appearance = '';

    protected closeVariants = [true, false];

    protected closable = this.closeVariants[0]!;

    public show(): void {
        this.toast.show(this.content, {
            autoClose: this.autoClose,
            closable: this.closable,
            appearance: this.appearance,
            iconStart: this.icons.iconStart,
            iconEnd: this.icons.iconEnd,
        });
    }
}
