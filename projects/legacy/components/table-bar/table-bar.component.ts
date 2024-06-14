import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TuiButtonDirective,
    tuiParentAnimation,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import type {TuiTableBarOptions} from './table-bar.options';

@Component({
    standalone: true,
    selector: 'tui-table-bar',
    imports: [
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButtonDirective,
        AsyncPipe,
        NgIf,
    ],
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
    protected readonly context =
        inject<TuiPopover<TuiTableBarOptions, void>>(POLYMORPHEUS_CONTEXT);

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected getTheme(appearance: string): string | null {
        return appearance === 'onDark' ? 'dark' : null;
    }

    protected close(): void {
        this.context.$implicit.complete();
    }
}
