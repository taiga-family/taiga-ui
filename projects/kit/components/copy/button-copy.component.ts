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
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TuiHintDirective} from '@taiga-ui/core/portals/hint';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';

import {TUI_COPY_OPTIONS} from './copy.options';

@Component({
    selector: '[tuiButtonCopy]',
    templateUrl: './button-copy.template.html',
    styleUrl: './button-copy.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider(() => {
            const hintAppearance = inject(TuiHintDirective, {
                optional: true,
            })?.appearance();

            return {
                appearance: hintAppearance === 'floating' ? 'flat-grayscale' : 'default',
                size: 's',
            };
        }),
    ],
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
    private readonly icons = inject(TUI_COMMON_ICONS);
    private readonly options = inject(TUI_COPY_OPTIONS);
    private readonly copyTexts = inject(TUI_COPY_TEXTS);
    protected readonly copied = signal(false);
    protected readonly copiedText = computed(() => this.copyTexts()[1]);
    public readonly copyToClipboard = input('', {alias: 'tuiButtonCopy'});

    protected readonly icon = tuiIconStart(
        computed(() => (this.copied() ? this.icons.check : this.options.icon('s'))),
    );

    protected copy(target: HTMLElement): void {
        const copied = this.el === target;

        if (copied) {
            this.clipboard.copy(this.copyToClipboard());
        }

        this.copied.set(copied);
    }
}
