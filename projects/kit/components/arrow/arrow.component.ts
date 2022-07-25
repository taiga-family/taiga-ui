import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {
    sizeBigger,
    TUI_TEXTFIELD_SIZE,
    TuiHostedDropdownComponent,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW_OPTIONS, TuiArrowOptions} from './arrow-options';

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
        return sizeBigger(this.textfieldSize.size)
            ? this.options.iconLarge
            : this.options.iconSmall;
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
