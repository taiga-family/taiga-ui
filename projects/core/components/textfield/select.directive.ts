import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {NAVIGATOR} from '@ng-web-apis/common';
import {TuiNativeValidatorDirective, tuiProvide} from '@taiga-ui/cdk';
import {TuiAppearanceDirective} from '@taiga-ui/core/directives/appearance';

import {TuiTextfieldDirective} from './textfield.directive';

@Component({
    standalone: true,
    selector: 'select[tuiTextfield]',
    imports: [CommonModule],
    templateUrl: './select.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TuiTextfieldDirective, TuiSelectDirective)],
    host: {
        '[id]': 'el.id || id',
        '(keydown.space.prevent)': '0',
        '(keydown.enter.prevent)': '0',
        '(keydown.backspace)': 'setValue("")',
        '(pointerdown.prevent)': 'el.focus()',
        '(keydown.control.c)': 'onCopy()',
        '(keydown.meta.c)': 'onCopy()',
    },
    hostDirectives: [TuiNativeValidatorDirective, TuiAppearanceDirective],
})
export class TuiSelectDirective extends TuiTextfieldDirective {
    private readonly nav = inject(NAVIGATOR);
    private readonly control = inject(NgControl);

    @Input()
    public placeholder = '';

    public override setValue(value: string): void {
        this.control.control?.setValue(value);
    }

    protected get value(): string {
        return this.textfield.stringify(this.control.value);
    }

    protected async onCopy(): Promise<void> {
        await this.nav.clipboard.writeText(this.el.value);
    }
}
