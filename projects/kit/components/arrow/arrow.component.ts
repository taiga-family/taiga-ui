import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiDropdownOpenDirective,
    TuiHostedDropdownComponent,
    tuiSizeBigger,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW_OPTIONS} from './arrow.options';

@Component({
    selector: 'tui-arrow',
    templateUrl: './arrow.template.html',
    styleUrls: ['./arrow.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArrowComponent {
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly options = inject(TUI_ARROW_OPTIONS);
    readonly directive = inject(TuiDropdownOpenDirective, {optional: true});
    readonly component = inject(TuiHostedDropdownComponent, {optional: true});

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
