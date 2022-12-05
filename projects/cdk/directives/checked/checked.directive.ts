import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: `input[tuiChecked], input[tuiCheckedChange]`,
})
export class TuiCheckedDirective {
    @Input()
    set tuiChecked(checked: boolean | null) {
        this.updateProperty(`checked`, checked || false);
        this.updateProperty(`indeterminate`, checked === null);
    }

    @Output()
    readonly tuiCheckedChange = new EventEmitter<boolean>();

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
    ) {
        this.updateProperty(`checked`, false);
    }

    @HostListener(`change`, [`$event.target`])
    onChange({checked}: HTMLInputElement): void {
        this.updateProperty(`indeterminate`, false);
        this.tuiCheckedChange.emit(checked);
    }

    private updateProperty(property: 'checked' | 'indeterminate', value: boolean): void {
        this.renderer.setProperty(this.element.nativeElement, property, value);
    }
}
