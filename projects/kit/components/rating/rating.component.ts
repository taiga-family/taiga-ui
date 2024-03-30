import {CommonModule} from '@angular/common';
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
import {FormsModule, NgControl} from '@angular/forms';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiClamp,
    tuiIsNativeFocused,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiIconComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_RATING_OPTIONS} from './rating.options';

@Component({
    standalone: true,
    selector: 'tui-rating',
    imports: [
        CommonModule,
        FormsModule,
        TuiIconComponent,
        TuiRepeatTimesModule,
        PolymorpheusModule,
    ],
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

    @Input()
    public icon = this.options.icon;

    @Input()
    public max = this.options.max;

    @HostBinding('class._active')
    protected active = 0;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled ? null : this.input?.nativeElement || null;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostListener('keydown.capture', ['$event'])
    protected onKeyDown(event: KeyboardEvent): void {
        if (this.readOnly) {
            event.preventDefault();
        }
    }

    @HostListener('pointerdown', ['1'])
    @HostListener('pointercancel', ['-1'])
    @HostListener('document:pointerup', ['-1'])
    protected onPointer(delta: number): void {
        this.active = tuiClamp(this.active + delta, 0, 1);
    }

    protected onClick(value: number): void {
        if (this.active) {
            this.value = value;
        }
    }

    protected isActive(index: number): boolean {
        return Math.ceil(this.value) >= this.max - index;
    }

    protected isFraction(index: number): boolean {
        return this.value > this.max - index - 1 && this.value < this.max - index;
    }

    protected getCut(index: number): number {
        return this.isFraction(index)
            ? 100 * Math.max(this.max - index - this.value, 0)
            : 0;
    }

    protected getFallbackValue(): number {
        return 0;
    }
}
