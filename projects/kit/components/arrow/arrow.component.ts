import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    sizeBigger,
    TUI_TEXTFIELD_SIZE,
    TuiHostedDropdownComponent,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

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
    ) {}

    get arrowIcon(): string {
        return sizeBigger(this.textfieldSize.size)
            ? 'tuiIconArrowDownLarge'
            : 'tuiIconArrowDown';
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
