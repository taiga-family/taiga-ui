import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_HINT_PROVIDERS, TuiHintComponent} from '@taiga-ui/core/portals/hint';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiLineClamp} from './line-clamp.component';

@Component({
    selector: 'tui-line-clamp-box',
    imports: [PolymorpheusOutlet],
    template:
        '<ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>',
    styleUrl: './line-clamp-box.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    host: {
        '[style.min-width.px]': 'width',
        '[style.line-height.px]': 'host.line()',
    },
})
export class TuiLineClampBox extends TuiHintComponent {
    protected readonly host = inject(TuiLineClamp);

    protected get width(): number {
        return this.accessor.getClientRect().width;
    }
}
