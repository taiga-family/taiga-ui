import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TUI_HINT_PROVIDERS, TuiHintComponent} from '@taiga-ui/core/directives/hint';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-hint',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>
    `,
    styleUrls: ['./line-clamp-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    animations: [tuiFadeIn],
    host: {
        '[style.min-width.px]': 'width',
    },
})
export class TuiLineClampBox extends TuiHintComponent {
    protected get width(): number {
        return this.accessor.getClientRect().width;
    }
}
