import {Component, inject} from '@angular/core';
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
    private readonly toast = inject(TuiToastService);

    protected readonly examples = [
        'Basic',
        'Customization',
        'Notification',
        'Mobile notification',
    ];

    protected content = 'Notification';

    protected readonly positionVariants = ['0.25rem auto 0 auto', '2rem 3rem 0 auto'];

    protected readonly exampleAlert = import('./examples/import/alert.md?raw');

    protected position = this.positionVariants[0]!;

    protected readonly autoCloseVariants = [0, 3000, 5000, 1000, 500];

    protected autoClose = this.autoCloseVariants[1]!;

    protected appearance = '';

    protected closable = true;

    public show(): void {
        this.toast.hideAll().show(this.content, {
            autoClose: this.autoClose,
            closable: this.closable,
            appearance: this.appearance,
            position: this.position,
        });
    }
}
