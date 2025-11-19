import {Directive, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDataListDirective} from '@taiga-ui/core/components/data-list';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';
import {TUI_TEXTFIELD_HOST, type TuiTextfieldHost} from '@taiga-ui/legacy/tokens';

import {AbstractTuiControl} from './control';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    standalone: false,
    host: {
        '[id]': 'id',
    },
})
export abstract class AbstractTuiNativeSelect<H = TuiTextfieldHost, T = string> {
    @ViewChild(TuiDataListDirective, {read: TemplateRef, static: true})
    protected readonly datalist: TemplateRef<any> | null = null;

    protected readonly autoId = tuiGenerateId();
    protected readonly el = tuiInjectElement<HTMLSelectElement>();
    protected readonly host = inject<H>(TUI_TEXTFIELD_HOST);
    protected readonly control = inject(AbstractTuiControl);
    protected readonly itemsHandlers = inject(TUI_ITEMS_HANDLERS);

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> | null = null;

    @Input()
    public placeholder = '';

    protected get id(): string {
        return this.el.id || this.autoId;
    }

    protected get emptyOption(): boolean {
        return !!this.placeholder && !this.control.value;
    }
}
