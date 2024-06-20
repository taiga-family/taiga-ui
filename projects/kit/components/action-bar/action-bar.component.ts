import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiExpandComponent} from '@taiga-ui/core/components/expand';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    standalone: true,
    selector: 'tui-action-bar',
    imports: [TuiExpandComponent],
    templateUrl: './action-bar.template.html',
    styleUrls: ['./action-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiSlideInTop],
    host: {
        tuiTheme: 'dark',
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
    },
})
export class TuiActionBarComponent {
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public expanded = false;
}
