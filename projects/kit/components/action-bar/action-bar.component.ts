import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import type {TuiButtonOptions} from '@taiga-ui/core/components/button';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components/button';
import {TuiExpandComponent} from '@taiga-ui/core/components/expand';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    standalone: true,
    selector: 'tui-action-bar',
    imports: [TuiExpandComponent],
    templateUrl: './action-bar.template.html',
    styleUrls: ['./action-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiProvide(TUI_BUTTON_OPTIONS, TuiActionBarComponent),
        tuiLinkOptionsProvider({appearance: 'action-grayscale', pseudo: true}),
    ],
    animations: [tuiFadeIn, tuiSlideInTop],
    host: {
        tuiTheme: 'dark',
        '[attr.data-size]': 'size',
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
    },
})
export class TuiActionBarComponent implements TuiButtonOptions {
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public expanded = false;

    @Input()
    public size: TuiSizeS = 'm';

    public readonly appearance = 'secondary-grayscale';
}
