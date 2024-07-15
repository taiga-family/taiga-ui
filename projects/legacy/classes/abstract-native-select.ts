import {
    Directive,
    HostBinding,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk/services';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiDataListDirective} from '@taiga-ui/core/components/data-list';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';
import type {TuiTextfieldHost} from '@taiga-ui/legacy/tokens';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/legacy/tokens';

import {AbstractTuiControl} from './control';

/**
 * @deprecated: drop in v5.0
 */
@Directive()
export abstract class AbstractTuiNativeSelect<H = TuiTextfieldHost, T = string> {
    private readonly idService = inject(TuiIdService);

    @ViewChild(TuiDataListDirective, {read: TemplateRef, static: true})
    protected readonly datalist: TemplateRef<any> | null = null;

    protected readonly el = tuiInjectElement<HTMLSelectElement>();
    protected readonly host = inject<H>(TUI_TEXTFIELD_HOST);
    protected readonly control = inject(AbstractTuiControl);
    protected readonly itemsHandlers = inject(TUI_ITEMS_HANDLERS);

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> | null = null;

    @Input()
    public placeholder = '';

    @HostBinding('id')
    protected get id(): string {
        return this.el.id || this.idService.generate();
    }

    protected get emptyOption(): boolean {
        return !!this.placeholder && !this.control.value;
    }
}
