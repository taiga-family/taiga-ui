import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiInputSearch} from './input-search.component';

@Component({
    selector: 'tui-input-search-content',
    imports: [PolymorpheusOutlet],
    templateUrl: './input-search-content.template.html',
    styleUrl: './input-search.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiTheme: 'dark',
        '(document:focusin)': 'host.onFocus($event)',
        '(keydown.esc)': 'host.close()',
        '(pointerdown.self)': 'host.close()',
    },
})
export class TuiInputSearchContent {
    protected readonly host = inject(TuiInputSearch);
}
