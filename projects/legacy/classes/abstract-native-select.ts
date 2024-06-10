import {
    Directive,
    HostBinding,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiIdService, tuiInjectElement} from '@taiga-ui/cdk';
import type {TuiTextfieldHost} from '@taiga-ui/core';
import {TUI_TEXTFIELD_HOST, TuiDataListDirective} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit';

import {AbstractTuiControl} from './control';

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

    @HostBinding('id')
    protected get id(): string {
        return this.el.id || this.idService.generate();
    }
}
