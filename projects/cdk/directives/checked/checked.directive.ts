import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output,
} from '@angular/core';

@Directive({
    selector: 'input[tuiChecked], input[tuiCheckedChange]',
})
export class TuiCheckedDirective {
    private indeterminate = false;
    private checked = false;

    @HostBinding('checked')
    get isChecked(): boolean {
        return this.checked;
    }

    @HostBinding('indeterminate')
    get isIndeterminate(): boolean {
        return this.indeterminate;
    }

    @Input()
    set tuiChecked(checked: boolean | null) {
        this.checked = checked || false;
        this.indeterminate = checked === null;
    }

    @Output()
    readonly tuiCheckedChange = new EventEmitter<boolean>();

    @HostListener('change', ['$event.target'])
    onChange({checked}: HTMLInputElement): void {
        this.checked = checked;
        this.indeterminate = false;
        this.tuiCheckedChange.emit(checked);
    }
}
