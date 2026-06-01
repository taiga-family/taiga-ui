import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

import {TuiInputPinComponent} from './input-pin.component';

@Component({
    selector: 'tui-input-pin-content',
    imports: [TuiAppearance],
    templateUrl: './input-pin-content.template.html',
    styleUrl: './input-pin.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'aria-hidden': 'true'},
})
export class TuiInputPinContent {
    protected readonly pin = inject(TuiInputPinComponent);
}
