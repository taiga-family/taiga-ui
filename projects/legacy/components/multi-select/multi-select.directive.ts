import {Directive} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import type {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiMultiSelectComponent} from './multi-select.component';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: 'tui-multi-select',
    providers: [tuiAsTextfieldHost(TuiMultiSelectDirective)],
})
export class TuiMultiSelectDirective<T = string> extends AbstractTuiTextfieldHost<
    TuiMultiSelectComponent<T>
> {
    public override get readOnly(): boolean {
        return true;
    }

    public get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    public disableItemHandler: TuiBooleanHandler<T> = (item) =>
        this.host.disabledItemHandler(item);

    public onValueChange(): void {}

    public onSelectionChange(value: T[]): void {
        this.host.onValueChange(value);
    }
}
