import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {NAVIGATOR} from '@ng-web-apis/common';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

import {TuiTextfieldDirective} from './textfield.directive';

@Component({
    standalone: true,
    selector: 'select[tuiTextfield]',
    imports: [CommonModule],
    templateUrl: './select.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)],
    hostDirectives: [TuiNativeValidator, TuiAppearance],
    host: {
        '[id]': 'el.id || id',
        '(keydown.space.prevent)': '0',
        '(keydown.enter.prevent)': '0',
        '(keydown.backspace)': 'setValue("")',
        '(mousedown.prevent)': 'focus()',
        '(keydown.control.c)': 'onCopy()',
        '(keydown.meta.c)': 'onCopy()',
    },
})
export class TuiSelect extends TuiTextfieldDirective {
    private readonly nav = inject(NAVIGATOR);
    private readonly control = inject(NgControl);

    @Input()
    public placeholder = '';

    public override setValue(value: string): void {
        this.control.control?.setValue(value);
    }

    public focus(): void {
        this.el.classList.add('_ios-fix');
        this.el.focus();
        this.el.classList.remove('_ios-fix');
    }

    protected get value(): string {
        return this.textfield.stringify(this.control.value);
    }

    protected async onCopy(): Promise<void> {
        await this.nav.clipboard.writeText(this.el.value);
    }
}
