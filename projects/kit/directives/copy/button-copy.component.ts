import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgIf} from '@angular/common';

import {TUI_COPY_OPTIONS} from './copy.options';

@Component({
    standalone: true,
    selector: '[tuiButtonCopy]',
    imports: [NgIf],
    template: `
        <ng-container *ngIf="copied(); else notCopied">
            {{ copiedText() }}
        </ng-container>
        <ng-template #notCopied>
            <ng-content />
        </ng-template>
    `,
    styleUrls: ['./button-copy.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({appearance: 'flat-grayscale', size: 's'})],
    hostDirectives: [TuiButton],
    host: {
        tuiButton: '',
        type: 'button',
        '[attr.tuiTheme]':
            'appearance === "dark" ? "light" : darkMode() ? "light" : "dark"',
        '(document:click.capture)': 'copy($event.target)',
    },
})
export class TuiButtonCopyComponent {
    private readonly el = tuiInjectElement();
    private readonly clipboard = inject(Clipboard);
    private readonly options = inject(TUI_COPY_OPTIONS);
    private readonly copyTexts = toSignal(inject(TUI_COPY_TEXTS));
    private readonly notification = inject(TUI_NOTIFICATION_OPTIONS);
    private readonly hint = inject(TuiHintDirective);

    private readonly check = tuiIsString(this.notification.icon)
        ? this.notification.icon
        : this.notification.icon('positive');

    protected readonly appearance =
        this.hint.appearance ||
        this.hint.el.closest('[tuiTheme]')?.getAttribute('tuiTheme');

    protected readonly darkMode = inject(TUI_DARK_MODE);

    protected readonly copied = signal(false);
    protected readonly copiedText = computed(() => this.copyTexts()?.[1] ?? '');
    protected readonly icon = tuiDirectiveBinding(
        TuiIcons,
        'iconStart',
        computed(() => {
            if (this.copied()) {
                return this.check;
            }

            return typeof this.options.icon === 'string'
                ? this.options.icon
                : this.options.icon('s');
        }),
    );

    @Input()
    public tuiButtonCopy = '';

    protected copy(target: HTMLElement): void {
        const copied = this.el === target;

        if (copied) {
            this.clipboard.copy(this.tuiButtonCopy);
        }

        this.copied.set(copied);
    }
}
