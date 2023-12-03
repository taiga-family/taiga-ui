import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';

@Component({
    selector: 'tui-highlight',
    template: '',
    styleUrls: ['./highlight.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightComponent {
    @HostBinding('style.left.px')
    left = NaN;

    @HostBinding('style.top.px')
    top = NaN;

    @HostBinding('style.width.px')
    width = NaN;

    @HostBinding('style.height.px')
    height = NaN;
}
