import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    HostBinding,
    Inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {AbstractTuiControl, TuiIdService, TuiMapper} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST, TuiDataListDirective, TuiTextfieldHost} from '@taiga-ui/core';

@Directive()
export abstract class AbstractTuiNativeSelect {
    @ViewChild(TuiDataListDirective, {read: TemplateRef, static: true})
    readonly datalist: TemplateRef<any> | null = null;

    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: TuiTextfieldHost,
        @Inject(AbstractTuiControl) readonly control: AbstractTuiControl<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(TuiIdService)
        private readonly idService: TuiIdService,
        @Inject(ChangeDetectorRef) readonly cdr: ChangeDetectorRef,
    ) {
        this.host.process(this.elementRef.nativeElement);
    }

    @HostBinding(`id`)
    get id(): string {
        return this.elementRef.nativeElement.id || this.idService.generate();
    }

    selectedMapper: TuiMapper<string, true | null> = (option, value) =>
        value.includes(option) || null;

    onValueChange(target: HTMLSelectElement): void {
        this.host.onValueChange(
            Array.from(target.selectedOptions).map(option => option.value),
        );
    }
}
