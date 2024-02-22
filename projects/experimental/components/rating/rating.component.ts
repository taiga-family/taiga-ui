import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiClamp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';

import {TUI_RATING_OPTIONS} from './rating.options';

@Component({
    selector: 'tui-rating',
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRatingComponent
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(NgControl, {read: ElementRef, static: true})
    private readonly input?: ElementRef<HTMLInputElement>;

    private readonly options = inject(TUI_RATING_OPTIONS);

    @HostBinding('class._active')
    protected active = 0;

    @Input()
    public icon = this.options.icon;

    @Input()
    public max = this.options.max;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.input?.nativeElement || null;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostListener('keydown.capture', ['$event'])
    public onKeyDown(event: KeyboardEvent): void {
        if (this.readOnly) {
            event.preventDefault();
        }
    }

    @HostListener('pointerdown', ['1'])
    @HostListener('pointercancel', ['-1'])
    @HostListener('document:pointerup', ['-1'])
    public onPointer(delta: number): void {
        this.active = tuiClamp(this.active + delta, 0, 1);
    }

    public onClick(value: number): void {
        if (this.active) {
            this.value = value;
        }
    }

    public isActive(index: number): boolean {
        return Math.ceil(this.value) >= this.max - index;
    }

    public isFraction(index: number): boolean {
        return this.value > this.max - index - 1 && this.value < this.max - index;
    }

    public getCut(index: number): number {
        return this.isFraction(index)
            ? 100 * Math.max(this.max - index - this.value, 0)
            : 0;
    }

    protected getFallbackValue(): number {
        return 0;
    }
}
