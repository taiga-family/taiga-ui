import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';

import {TUI_COPY_OPTIONS} from './copy.options';

@Component({
    selector: '[tuiButtonCopy]',
    template: `
        @if (copied()) {
            {{ copiedText() }}
        } @else {
            <ng-content />
        }
    `,
    styleUrl: './button-copy.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({appearance: 'flat-grayscale', size: 's'})],
    hostDirectives: [TuiButton],
    host: {
        tuiButton: '',
        type: 'button',
        '(document:click.capture)': 'copy($event.target)',
    },
})
export class TuiButtonCopy {
    private readonly el = tuiInjectElement();
    private readonly clipboard = inject(Clipboard);
    private readonly options = inject(TUI_COPY_OPTIONS);
    private readonly copyTexts = inject(TUI_COPY_TEXTS);
    private readonly notification = inject(TUI_NOTIFICATION_OPTIONS);
    private readonly check = tuiIsString(this.notification.icon)
        ? this.notification.icon
        : this.notification.icon('positive');

    protected readonly copied = signal(false);
    protected readonly copiedText = computed(() => this.copyTexts()[1]);
    protected readonly icon = tuiIconStart(
        computed(() => (this.copied() ? this.check : this.options.icon)),
    );

    public readonly tuiButtonCopy = input('');

    protected copy(target: HTMLElement): void {
        const copied = this.el === target;

        if (copied) {
            this.clipboard.copy(this.tuiButtonCopy());
        }

        this.copied.set(copied);
    }
}
