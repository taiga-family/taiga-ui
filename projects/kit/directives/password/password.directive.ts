import {computed, Directive, inject, signal} from '@angular/core';
import {tuiDirectiveBinding, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TUI_APPEARANCE_OPTIONS,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit/tokens';

import {TUI_PASSWORD_OPTIONS} from './password.options';

@Directive({
    selector: 'tui-icon[tuiPassword]',
    providers: [
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'icon'},
        },
    ],
    hostDirectives: [
        TuiWithAppearance,
        {
            directive: TuiHintDirective,
            inputs: ['tuiHintAppearance', 'tuiHintContext'],
        },
    ],
    host: {
        style: 'cursor: pointer',
        '(click)': 'toggle()',
        '[style.border]':
            'textfield.options.size() === "s" ? "0.25rem solid transparent" : null',
    },
})
export class TuiPassword {
    readonly #options = inject(TUI_PASSWORD_OPTIONS);
    readonly #texts = inject(TUI_PASSWORD_TEXTS);

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly hidden = signal(true);
    protected readonly icon = tuiIconStart(
        computed((size = this.textfield.options.size()) => {
            const icon = this.hidden()
                ? this.#options.icons.show
                : this.#options.icons.hide;

            return tuiIsString(icon) ? icon : icon(size);
        }),
    );

    protected readonly hint = tuiDirectiveBinding(
        TuiHintDirective,
        'content',
        computed(() => (this.hidden() ? this.#texts()[0] : this.#texts()[1])),
    );

    protected toggle(): void {
        this.hidden.set(!this.hidden());
        this.textfield.input?.nativeElement.setAttribute(
            'type',
            this.hidden() ? 'password' : 'text',
        );
    }
}
