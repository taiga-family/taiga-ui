import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import type {TuiTextfieldSizeDirective} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiHostedDropdownComponent,
    tuiSizeBigger,
} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import type {TuiArrowOptions} from './arrow-options';
// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TUI_ARROW_OPTIONS} from './arrow-options';

@Component({
    selector: 'tui-arrow',
    templateUrl: './arrow.template.html',
    styleUrls: ['./arrow.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArrowComponent {
    constructor(
        @Inject(TuiHostedDropdownComponent)
        readonly dropdown: TuiHostedDropdownComponent,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_ARROW_OPTIONS) private readonly options: TuiArrowOptions,
    ) {}

    @HostBinding('class._rotated')
    get rotated(): boolean {
        return this.dropdown.open;
    }

    get arrowIcon(): PolymorpheusContent {
        return tuiSizeBigger(this.textfieldSize.size)
            ? this.options.iconLarge
            : this.options.iconSmall;
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
