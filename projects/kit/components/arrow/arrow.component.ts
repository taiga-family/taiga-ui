import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Optional,
} from '@angular/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiDropdownOpenDirective,
    TuiHostedDropdownComponent,
    tuiSizeBigger,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW_OPTIONS, TuiArrowOptions} from './arrow.options';

@Component({
    selector: 'tui-arrow',
    templateUrl: './arrow.template.html',
    styleUrls: ['./arrow.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArrowComponent {
    constructor(
        @Optional()
        @Inject(TuiDropdownOpenDirective)
        readonly directive: TuiDropdownOpenDirective | null,
        @Optional()
        @Inject(TuiHostedDropdownComponent)
        readonly component: TuiHostedDropdownComponent | null,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_ARROW_OPTIONS) private readonly options: TuiArrowOptions,
    ) {}

    @HostBinding('class._rotated')
    get rotated(): boolean {
        return this.component?.open || this.directive?.tuiDropdownOpen || false;
    }

    get arrowIcon(): PolymorpheusContent {
        return tuiSizeBigger(this.textfieldSize.size)
            ? this.options.iconLarge
            : this.options.iconSmall;
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
