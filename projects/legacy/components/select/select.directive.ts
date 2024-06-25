import {Directive} from '@angular/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiSelectComponent} from './select.component';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: 'tui-select',
    providers: [tuiAsTextfieldHost(TuiSelectDirective)],
})
export class TuiSelectDirective extends AbstractTuiTextfieldHost<
    TuiSelectComponent<unknown>
> {
    public override get readOnly(): boolean {
        return true;
    }

    public override get value(): string {
        return this.host.computedValue;
    }

    public get stringify(): TuiItemsHandlers<unknown>['stringify'] {
        return this.host.stringify;
    }

    public onValueChange(value: unknown): void {
        this.host.onValueChange(value);
    }
}
