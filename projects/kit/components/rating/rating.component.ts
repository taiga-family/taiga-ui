import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    tuiClamp,
    TuiControl,
    tuiFallbackValueProvider,
    TuiRepeatTimesDirective,
} from '@taiga-ui/cdk';
import {TuiIconComponent} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TUI_RATING_OPTIONS} from './rating.options';

@Component({
    standalone: true,
    selector: 'tui-rating',
    imports: [
        CommonModule,
        FormsModule,
        TuiIconComponent,
        TuiRepeatTimesDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider(0)],
    host: {
        '[class._disabled]': 'disabled()',
        '[class._readonly]': 'readOnly()',
    },
})
export class TuiRatingComponent extends TuiControl<number> {
    private readonly options = inject(TUI_RATING_OPTIONS);

    @HostBinding('class._active')
    protected active = 0;

    @Input()
    public icon = this.options.icon;

    @Input()
    public max = this.options.max;

    @HostListener('keydown.capture', ['$event'])
    protected onKeyDown(event: KeyboardEvent): void {
        if (this.readOnly()) {
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
