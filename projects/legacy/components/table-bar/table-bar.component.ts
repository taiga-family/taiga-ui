import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiParentAnimation, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';
import {
    injectContext,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import type {TuiTableBarOptions} from './table-bar.options';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
@Component({
    standalone: true,
    selector: 'tui-table-bar',
    imports: [AsyncPipe, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton],
    templateUrl: './table-bar.template.html',
    styleUrls: ['./table-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiParentAnimation],
    host: {
        '[@tuiSlideInTop]': 'animation',
        '[attr.data-appearance]': 'context.mode',
    },
})
export class TuiTableBarComponent {
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly context = injectContext<TuiPopover<TuiTableBarOptions, void>>();

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected getTheme(appearance: string): string | null {
        return appearance === 'onDark' ? 'dark' : null;
    }

    protected close(): void {
        this.context.$implicit.complete();
    }
}
