import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiDropdownOpenDirective,
    TuiHostedDropdownComponent,
    tuiSizeBigger,
    TuiSvgComponent,
} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW_OPTIONS} from './arrow.options';

@Component({
    standalone: true,
    selector: 'tui-arrow',
    imports: [TuiSvgComponent, PolymorpheusModule, NgIf, AsyncPipe],
    templateUrl: './arrow.template.html',
    styleUrls: ['./arrow.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArrowComponent {
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly options = inject(TUI_ARROW_OPTIONS);
    protected readonly directive = inject(TuiDropdownOpenDirective, {optional: true});
    protected readonly component = inject(TuiHostedDropdownComponent, {optional: true});

    @HostBinding('class._rotated')
    protected get rotated(): boolean {
        return this.component?.open || this.directive?.tuiDropdownOpen || false;
    }

    protected get arrowIcon(): PolymorpheusContent {
        return tuiSizeBigger(this.textfieldSize.size)
            ? this.options.iconLarge
            : this.options.iconSmall;
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
