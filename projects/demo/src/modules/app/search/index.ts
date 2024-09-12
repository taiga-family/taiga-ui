import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import {SEARCH_CONFIG} from './env';

const docsearch = require('@docsearch/js').default;

@Component({
    standalone: true,
    selector: 'tui-demo-search',
    imports: [RouterLink, TuiLink, TuiNotification],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDemoSearch implements AfterViewInit {
    private readonly config = inject(SEARCH_CONFIG);

    public ngAfterViewInit(): void {
        this.enableSearch();
    }

    private enableSearch(): void {
        docsearch(this.config);
    }
}
