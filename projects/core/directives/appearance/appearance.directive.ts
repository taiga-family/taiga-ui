import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TUI_APPEARANCE_OPTIONS} from './appearance.options';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/appearance.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-appearance',
    },
})
class TuiAppearanceStyles {}

@Directive({
    standalone: true,
    selector: '[tuiAppearance]',
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'tuiAppearance',
        '[attr.data-state]': 'tuiAppearanceState',
        '[attr.data-focus]': 'tuiAppearanceFocus',
    },
})
export class TuiAppearance {
    protected readonly nothing = tuiWithStyles(TuiAppearanceStyles);

    @Input()
    public tuiAppearance = inject(TUI_APPEARANCE_OPTIONS).appearance;

    @Input()
    public tuiAppearanceState: TuiInteractiveState | null = null;

    @Input()
    public tuiAppearanceFocus: boolean | null = null;
}
