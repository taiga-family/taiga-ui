import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'tui-compass',
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/compass.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-degrees.deg]': 'degrees()',
    },
})
export class TuiCompass {
    public readonly degrees = input(NaN);
}
