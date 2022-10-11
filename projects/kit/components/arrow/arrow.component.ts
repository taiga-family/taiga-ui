import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiHostedDropdownComponent,
    tuiSizeBigger,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiArrowOptions} from './arrow-options';
import {TUI_ARROW_OPTIONS} from './tokens/arrow-options.token';

@Component({
    selector: `tui-arrow`,
    templateUrl: `./arrow.template.html`,
    styleUrls: [`./arrow.style.less`],
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

    @HostBinding(`class._rotated`)
    get rotated(): boolean {
        return this.dropdown.open;
    }

    get arrowIcon(): PolymorpheusContent {
        return tuiSizeBigger(this.textfieldSize.size)
            ? this.options.iconLarge
            : this.options.iconSmall;
    }
}
