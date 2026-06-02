import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';

import {TuiInputPinComponent} from './input-pin.component';

@Component({
    selector: 'tui-input-pin-content',
    imports: [TuiAppearance],
    templateUrl: './input-pin-content.template.html',
    styleUrls: ['./input-pin.style.less', './input-pin-content.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'aria-hidden': 'true'},
})
export class TuiInputPinContent {
    protected readonly pin = inject(TuiInputPinComponent);
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly control = inject(NgControl);
}
