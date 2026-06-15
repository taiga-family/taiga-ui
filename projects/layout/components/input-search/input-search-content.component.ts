import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    inject,
    viewChild,
} from '@angular/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiInputSearch} from './input-search.component';

@Component({
    selector: 'tui-input-search-content',
    imports: [PolymorpheusOutlet],
    templateUrl: './input-search-content.template.html',
    styleUrl: './input-search.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputSearchContent {
    protected readonly host = inject(TuiInputSearch);

    public readonly container = viewChild.required<ElementRef<HTMLElement>>('container');
}
