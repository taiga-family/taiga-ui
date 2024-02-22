import {Directive, DoCheck} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputNumberComponent} from './input-number.component';

@Directive({
    selector: 'tui-input-number',
    providers: [tuiAsTextfieldHost(TuiInputNumberDirective)],
})
export class TuiInputNumberDirective
    extends AbstractTuiTextfieldHost<TuiInputNumberComponent>
    implements DoCheck
{
    protected input?: HTMLInputElement;

    public override get value(): string {
        return this.host.computedValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public ngDoCheck(): void {
        if (!this.host.nativeFocusableElement) {
            return;
        }

        this.host.nativeFocusableElement.inputMode = this.host.inputMode;
        this.host.nativeFocusableElement.maxLength =
            this.host.nativeFocusableElement.maxLength > 0
                ? this.host.nativeFocusableElement.maxLength
                : this.host.calculatedMaxLength;
    }
}
