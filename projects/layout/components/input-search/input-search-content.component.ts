import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    TemplateRef,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiInputSearch} from './input-search.component';

@Component({
    selector: 'tui-input-search-content',
    imports: [PolymorpheusOutlet],
    templateUrl: './input-search-content.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-search.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputSearchContent {
    private readonly tpl = viewChild.required(TemplateRef);

    protected readonly host = inject(TuiInputSearch);
    protected readonly ef = effect(() => this.host.template.set(this.tpl()));
}
