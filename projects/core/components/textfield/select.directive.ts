import {CommonModule, DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

import {TuiTextfieldBase, TuiTextfieldDirective} from './textfield.directive';

@Component({
    standalone: true,
    selector: 'select[tuiTextfield]',
    imports: [CommonModule],
    templateUrl: './select.template.html',
    // We want this template to follow change detection to parent textfield.
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)],
    hostDirectives: [TuiNativeValidator, TuiAppearance],
    host: {
        '[id]': 'textfield.id',
        '[class._empty]': 'stringified === ""',
        '[attr.aria-label]': 'ariaLabel',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
        '(keydown.space.prevent)': '0',
        '(keydown.enter.prevent)': '0',
        '(keydown.backspace)': 'setValue("")',
        '(mousedown.prevent)': 'focus()',
        '(keydown.control.c)': 'onCopy()',
        '(keydown.meta.c)': 'onCopy()',
    },
})
export class TuiSelect<T> extends TuiTextfieldBase<T> {
    private readonly nav = inject(WA_NAVIGATOR);
    private readonly doc = inject(DOCUMENT);

    @Input()
    public placeholder = '';

    public override setValue(value: T): void {
        this.control?.control?.setValue(value);
        this.el.dispatchEvent(new Event('input', {bubbles: true}));
    }

    public focus(): void {
        this.el.classList.add('_ios-fix');
        this.el.focus();
        this.el.classList.remove('_ios-fix');
    }

    protected get ariaLabel(): string | null {
        return this.doc.querySelector(`label[for="${this.el.id}"]`)
            ? null
            : this.el.getAttribute('aria-label') || this.placeholder;
    }

    protected get stringified(): string {
        return this.textfield.stringify(this.control?.value ?? '');
    }

    protected async onCopy(): Promise<void> {
        await this.nav.clipboard.writeText(this.stringified);
    }
}
