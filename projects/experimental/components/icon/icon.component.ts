import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'tui-icon',
    template: '',
    host: {'[style.--t-mask]': '"url(" + icon + ")"'},
    styleUrls: ['./icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiIconComponent {
    @Input()
    icon = '';
}
