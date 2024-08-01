import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-compass',
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/compass.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCompass {
    @Input()
    @HostBinding('style.--t-degrees.deg')
    public degrees = NaN;
}
