import {
    Directive,
    ElementRef,
    HostBinding,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {AbstractTuiControl, TuiBooleanHandler, TuiIdService} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST, TuiDataListDirective, TuiTextfieldHost} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';

@Directive()
export abstract class AbstractTuiNativeSelect<H = TuiTextfieldHost, T = string> {
    private readonly idService = inject(TuiIdService);
    protected readonly el: HTMLSelectElement = inject(ElementRef).nativeElement;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> | null = null;

    @ViewChild(TuiDataListDirective, {read: TemplateRef, static: true})
    protected readonly datalist: TemplateRef<any> | null = null;

    protected readonly host = inject<H>(TUI_TEXTFIELD_HOST);
    protected readonly control = inject(AbstractTuiControl);
    protected readonly itemsHandlers = inject(TUI_ITEMS_HANDLERS);

    @HostBinding('id')
    protected get id(): string {
        return this.el.id || this.idService.generate();
    }
}
