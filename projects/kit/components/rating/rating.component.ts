import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_RATING_OPTIONS, type TuiRatingOptions} from './rating.options';

@Component({
    standalone: true,
    selector: 'tui-rating',
    imports: [CommonModule, FormsModule, PolymorpheusOutlet, TuiIcon, TuiRepeatTimes],
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[class._disabled]': 'disabled()',
        '[class._readonly]': 'readOnly()',
        '[class._active]': 'active',
        '(keydown.capture)': 'onKeyDown($event)',
        '(pointerdown)': 'onPointer(1)',
        '(pointercancel)': 'onPointer(-1)',
        '(document:pointerup)': 'onPointer(-1)',
    },
})
export class TuiRating extends TuiControl<number> {
    private readonly options = inject(TUI_RATING_OPTIONS);

    protected active = 0;

    @Input()
    public icon: TuiRatingOptions['icon'] = this.options.icon;

    @Input()
    public max = this.options.max;

    protected onKeyDown(event: KeyboardEvent): void {
        if (this.readOnly()) {
            event.preventDefault();
        }
    }

    protected onPointer(delta: number): void {
        this.active = tuiClamp(this.active + delta, 0, 1);
    }

    protected onClick(value: number): void {
        if (this.active) {
            this.onChange(value);
        }
    }

    protected isActive(index: number): boolean {
        return Math.ceil(this.value()) >= this.max - index;
    }

    protected isFraction(index: number): boolean {
        return this.value() > this.max - index - 1 && this.value() < this.max - index;
    }

    protected getCut(index: number): number {
        return this.isFraction(index)
            ? 100 * Math.max(this.max - index - this.value(), 0)
            : 0;
    }
}
