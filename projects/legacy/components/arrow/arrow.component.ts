import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {AbstractTuiControl} from '@taiga-ui/legacy/classes';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {
    PolymorpheusComponent,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import {TUI_ARROW_OPTIONS} from './arrow.options';

/**
 * @deprecated: drop in v5.0
 */
@Component({
    standalone: true,
    selector: 'tui-arrow',
    imports: [PolymorpheusOutlet, PolymorpheusTemplate, NgIf, AsyncPipe, TuiIcon],
    templateUrl: './arrow.template.html',
    styleUrls: ['./arrow.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArrowComponent {
    private readonly control: any = inject(AbstractTuiControl, {optional: true});
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly options = inject(TUI_ARROW_OPTIONS);
    protected readonly directive = inject(TuiDropdownOpen, {optional: true});

    @HostBinding('class._rotated')
    protected get rotated(): boolean {
        return this.directive?.tuiDropdownOpen || !!this.control.pseudoOpen || false;
    }

    @HostBinding('class._small')
    protected get small(): boolean {
        return !tuiSizeBigger(this.textfieldSize.size);
    }

    protected get arrowIcon(): PolymorpheusContent {
        return !this.small ? this.options.iconLarge : this.options.iconSmall;
    }
}

/**
 * @deprecated: drop in v5.0
 */
export const TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
