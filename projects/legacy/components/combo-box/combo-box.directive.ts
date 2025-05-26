import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiComboBoxComponent} from './combo-box.component';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/combo-box TuiComboBox} (from @taiga-ui/kit) instead
 */
@Directive({
    standalone: false,
    selector: 'tui-combo-box',
    providers: [tuiAsTextfieldHost(TuiComboBoxDirective)],
})
export class TuiComboBoxDirective extends AbstractTuiTextfieldHost<
    TuiComboBoxComponent<unknown>
> {
    public override get value(): string {
        return this.host.nativeValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
