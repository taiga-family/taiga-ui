import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_RATING_OPTIONS} from './rating.options';

@Component({
    selector: 'tui-rating',
    imports: [FormsModule, PolymorpheusOutlet, TuiIcon],
    templateUrl: './rating.template.html',
    styleUrl: './rating.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[class._disabled]': 'disabled()',
        '[class._readonly]': 'readOnly()',
        '[class._active]': 'active()',
        '(keydown.capture)': 'onKeyDown($event)',
        '(pointerdown)': 'onPointer(1)',
        '(pointercancel)': 'onPointer(-1)',
        '(document:pointerup)': 'onPointer(-1)',
    },
})
export class TuiRating extends TuiControl<number> {
    private readonly options = inject(TUI_RATING_OPTIONS);

    protected readonly active = signal(0);
    protected readonly array = computed(() => Array.from({length: this.max()}));

    public readonly icon = input(this.options.icon);
    public readonly max = input(this.options.max);

    protected onKeyDown(event: KeyboardEvent): void {
        if (this.readOnly()) {
            event.preventDefault();
        }
    }

    protected onPointer(delta: number): void {
        this.active.update((active) => tuiClamp(active + delta, 0, 1));
    }

    protected onClick(value: number): void {
        if (this.active()) {
            this.onChange(value);
        }
    }

    protected isActive(index: number): boolean {
        return Math.ceil(this.value()) >= this.max() - index;
    }

    protected isFraction(index: number): boolean {
        return this.value() > this.max() - index - 1 && this.value() < this.max() - index;
    }

    protected getCut(index: number): number {
        return this.isFraction(index)
            ? 100 * Math.max(this.max() - index - this.value(), 0)
            : 0;
    }
}
