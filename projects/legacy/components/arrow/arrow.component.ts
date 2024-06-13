import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {TuiDropdownOpenDirective, TuiIconComponent, tuiSizeBigger} from '@taiga-ui/core';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW_OPTIONS} from './arrow.options';

@Component({
    standalone: true,
    selector: 'tui-arrow',
    imports: [PolymorpheusModule, NgIf, AsyncPipe, TuiIconComponent],
    templateUrl: './arrow.template.html',
    styleUrls: ['./arrow.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArrowComponent {
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly options = inject(TUI_ARROW_OPTIONS);
    protected readonly directive = inject(TuiDropdownOpenDirective, {optional: true});

    @HostBinding('class._rotated')
    protected get rotated(): boolean {
        return this.directive?.tuiDropdownOpen || false;
    }

    @HostBinding('class._small')
    protected get small(): boolean {
        return !tuiSizeBigger(this.textfieldSize.size);
    }

    protected get arrowIcon(): PolymorpheusContent {
        return !this.small ? this.options.iconLarge : this.options.iconSmall;
    }
}

export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
