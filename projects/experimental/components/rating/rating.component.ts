import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiClamp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';

import {TUI_RATING_OPTIONS, TuiRatingOptions} from './rating.options';

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

    @Input()
    icon = this.options.icon;

    @Input()
    max = this.options.max;

    @HostBinding('class._active')
    active = 0;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_RATING_OPTIONS) private readonly options: TuiRatingOptions,
    ) {
        super(control, cdr);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.input?.nativeElement || null;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostListener('keydown.capture', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        if (this.readOnly) {
            event.preventDefault();
        }
    }

    @HostListener('pointerdown', ['1'])
    @HostListener('pointercancel', ['-1'])
    @HostListener('document:pointerup', ['-1'])
    onPointer(delta: number): void {
        this.active = tuiClamp(this.active + delta, 0, 1);
    }

    onClick(value: number): void {
        if (this.active) {
            this.value = value;
        }
    }

    isActive(index: number): boolean {
        return Math.ceil(this.value) >= this.max - index;
    }

    isFraction(index: number): boolean {
        return this.value > this.max - index - 1 && this.value < this.max - index;
    }

    getCut(index: number): number {
        return this.isFraction(index)
            ? 100 * Math.max(this.max - index - this.value, 0)
            : 0;
    }

    protected getFallbackValue(): number {
        return 0;
    }
}
