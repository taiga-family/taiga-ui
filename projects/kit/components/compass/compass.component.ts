import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    standalone: true,
    selector: 'tui-compass',
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/compass.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiCompassV: TUI_VERSION,
        '[style.--t-degrees.deg]': 'degrees',
    },
})
export class TuiCompass {
    @Input()
    public degrees = NaN;
}
