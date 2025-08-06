import {Directive, type DoCheck} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import {type TuiInputNumberComponent} from './input-number.component';

/**
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-number TuiInputNumber} (from @taiga-ui/kit) instead
 * TODO(v5): delete it
 */
@Directive({
    standalone: false,
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
