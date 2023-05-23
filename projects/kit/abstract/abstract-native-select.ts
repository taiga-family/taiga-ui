import {
    Directive,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {AbstractTuiControl, TuiBooleanHandler, TuiIdService} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST, TuiDataListDirective, TuiTextfieldHost} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';

@Directive()
export abstract class AbstractTuiNativeSelect<H = TuiTextfieldHost, T = string> {
    @Input()
    disabledItemHandler: TuiBooleanHandler<T> | null = null;

    @ViewChild(TuiDataListDirective, {read: TemplateRef, static: true})
    readonly datalist: TemplateRef<any> | null = null;

    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: H,
        @Inject(AbstractTuiControl) readonly control: AbstractTuiControl<unknown>,
        @Inject(ElementRef) protected readonly el: ElementRef<HTMLSelectElement>,
        @Inject(TuiIdService)
        private readonly idService: TuiIdService,
        @Inject(TUI_ITEMS_HANDLERS)
        readonly itemsHandlers: TuiItemsHandlers<T>,
    ) {}

    @HostBinding(`id`)
    get id(): string {
        return this.el.nativeElement.id || this.idService.generate();
    }
}
