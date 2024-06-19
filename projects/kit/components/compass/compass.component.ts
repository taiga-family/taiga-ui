import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-compass',
    template: '',
    styleUrls: ['./compass.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCompass {
    @Input()
    @HostBinding('style.--t-degrees.deg')
    public degrees = NaN;
}
