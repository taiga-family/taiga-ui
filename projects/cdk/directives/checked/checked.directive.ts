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
    public get isChecked(): boolean {
        return this.checked;
    }

    @HostBinding('indeterminate')
    public get isIndeterminate(): boolean {
        return this.indeterminate;
    }

    @Input()
    public set tuiChecked(checked: boolean | null) {
        this.checked = checked || false;
        this.indeterminate = checked === null;
    }

    @Output()
    public readonly tuiCheckedChange = new EventEmitter<boolean>();

    @HostListener('change', ['$event.target'])
    public onChange({checked}: HTMLInputElement): void {
        this.checked = checked;
        this.indeterminate = false;
        this.tuiCheckedChange.emit(checked);
    }
}
