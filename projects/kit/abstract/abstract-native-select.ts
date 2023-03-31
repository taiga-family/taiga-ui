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
export abstract class AbstractTuiNativeSelect<T = TuiTextfieldHost> {
    @Input()
    disabledItemHandler: TuiBooleanHandler<string> | null = null;

    @ViewChild(TuiDataListDirective, {read: TemplateRef, static: true})
    readonly datalist: TemplateRef<any> | null = null;

    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: T,
        @Inject(AbstractTuiControl) readonly control: AbstractTuiControl<unknown>,
        @Inject(ElementRef) protected readonly elementRef: ElementRef<HTMLSelectElement>,
        @Inject(TuiIdService)
        private readonly idService: TuiIdService,
        @Inject(TUI_ITEMS_HANDLERS)
        readonly itemsHandlers: TuiItemsHandlers<string>,
    ) {}

    @HostBinding(`id`)
    get id(): string {
        return this.elementRef.nativeElement.id || this.idService.generate();
    }
}
