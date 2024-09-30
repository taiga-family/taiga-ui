import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiInteractiveState} from '@taiga-ui/core';
import {TuiButton, TuiOption} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDemo, TuiOption],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected examples = ['Basic', 'Custom', 'Checkbox', 'Bundled'];
    protected descriptions = [
        'Interactive elements react to pointer natively but you can override state with inputs',
        'Use LESS or SCSS mixins to create your own appearances in global styles',
        'You can use it on input[type="checkbox"] to create a custom toggle component easily',
        'You can create your own appearances or use one of the bundled options',
    ];

    protected appearances = ['primary', 'secondary', 'flat'];
    protected appearance = this.appearances[0]!;

    protected states: readonly TuiInteractiveState[] = ['hover', 'active', 'disabled'];
    protected state: TuiInteractiveState | null = null;

    protected focus: boolean | null = null;
}
