import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_ANIMATION_OPTIONS, tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core';

@Component({
    selector: 'tui-action-bar',
    templateUrl: './action-bar.template.html',
    styleUrls: ['./action-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiSlideInTop],
    host: {
        tuiTheme: 'night',
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
    },
})
export class TuiActionBarComponent {
    @Input()
    expanded = false;

    constructor(@Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions) {}
}
