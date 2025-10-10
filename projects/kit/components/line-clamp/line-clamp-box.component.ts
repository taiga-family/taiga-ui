import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_HINT_PROVIDERS, TuiHintComponent} from '@taiga-ui/core/directives/hint';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-line-clamp-box',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>
    `,
    styleUrl: './line-clamp-box.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    host: {
        '[style.min-width.px]': 'width',
    },
})
export class TuiLineClampBox extends TuiHintComponent {
    protected get width(): number {
        return this.accessor.getClientRect().width;
    }
}
