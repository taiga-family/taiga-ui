import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_DOC_DOCUMENTATION_TEXTS} from '@taiga-ui/addon-doc/tokens';

@Component({
    standalone: true,
    selector: 'table[tuiDocAPI]',
    templateUrl: './api.template.html',
    styleUrl: './api.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAPI {
    protected readonly texts = inject(TUI_DOC_DOCUMENTATION_TEXTS);
}
