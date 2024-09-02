import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiFallbackValueProvider, tuiInjectElement, tuiIsString} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiIcon,
    TuiTextfieldContent,
    TuiTextfieldDirective,
} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit/directives';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit/tokens';

import {TUI_INPUT_PASSWORD_OPTIONS} from './input-password.options';

@Component({
    standalone: true,
    selector: 'input[tuiInputPassword]',
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
    hostDirectives: [TuiTextfieldDirective],
    providers: [tuiFallbackValueProvider('')],
    host: {
        '[type]': 'hidden() ? "password" : "text"',
    },
    imports: [TuiIcon, TuiTooltip, TuiTextfieldContent],
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

    protected readonly icon = computed(() => {
        const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;

        return tuiIsString(icon) ? icon : icon(this.size());
    });
}
