import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {AbstractTuiControl} from '@taiga-ui/legacy/classes';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import {
    PolymorpheusComponent,
    type PolymorpheusContent,
    PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus';
import {of} from 'rxjs';

import {TUI_ARROW_OPTIONS} from './arrow.options';

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
@Component({
    selector: 'tui-arrow',
    imports: [PolymorpheusOutlet, TuiIcon],
    templateUrl: './arrow.template.html',
    styleUrl: './arrow.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._rotated]': 'rotated()',
        '[class._small]': 'small',
    },
})
export class TuiArrowComponent {
    readonly #control: any = inject(AbstractTuiControl, {optional: true});
    readonly #textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    readonly #options = inject(TUI_ARROW_OPTIONS);
    protected readonly dropdownOpen = toSignal(
        inject(TuiDropdownOpen, {optional: true})?.tuiDropdownOpenChange || of(false),
    );

    protected readonly rotated = computed(
        () => this.dropdownOpen() || this.#control.pseudoOpen?.(),
    );

    protected get small(): boolean {
        return !tuiSizeBigger(this.#textfieldSize.size);
    }

    protected get arrowIcon(): PolymorpheusContent {
        return !this.small ? this.#options.iconLarge : this.#options.iconSmall;
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
