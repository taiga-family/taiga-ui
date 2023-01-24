import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';

@Component({
    selector: 'tui-elastic-container',
    templateUrl: './elastic-container.component.html',
    styleUrls: ['./elastic-container.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiElasticContainerComponent {
    @HostBinding('style.height.px')
    height = NaN;
}
