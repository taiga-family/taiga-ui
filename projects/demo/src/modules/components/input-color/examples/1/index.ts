import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputColorModule, TuiTextfield, FormsModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected color = '#ffdd2d';
}
