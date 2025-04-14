import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TuiTooltip} from '@taiga-ui/kit/directives';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit/tokens';

import {TUI_INPUT_PASSWORD_OPTIONS} from './input-password.options';

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
@Component({
    standalone: true,
    selector: 'input[tuiInputPassword]',
    imports: [TuiIcon, TuiTextfieldContent, TuiTooltip],
    template: `
        <tui-icon
            *tuiTextfieldContent
            [icon]="icon()"
            [style.border]="size() === 's' ? null : 'none'"
            [tuiTooltip]="text()"
            (click)="hidden.set(!hidden())"
            (mousedown.capture.prevent.stop)="el.focus()"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider('')],
    hostDirectives: [TuiWithTextfield],
    host: {
        ngSkipHydration: 'true',
        '[type]': 'hidden() ? "password" : "text"',
    },
})
export class TuiInputPassword {
    private readonly options = inject(TUI_INPUT_PASSWORD_OPTIONS);
    private readonly texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
        initialValue: ['', ''] as const,
    });

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    protected readonly hidden = signal(true);
    protected readonly text = computed(() =>
        this.hidden() ? this.texts()[0] : this.texts()[1],
    );

    protected readonly icon = computed((size = this.size()) => {
        const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;

        return tuiIsString(icon) ? icon : icon(size);
    });
}
