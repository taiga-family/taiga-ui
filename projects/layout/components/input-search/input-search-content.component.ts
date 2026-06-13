import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    TemplateRef,
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
    private readonly tpl = viewChild.required(TemplateRef);

    protected readonly host = inject(TuiInputSearch);
    protected readonly ef = effect(() => this.host.template.set(this.tpl()));
}
