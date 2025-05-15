import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TUI_HINT_PROVIDERS, TuiHintComponent} from '@taiga-ui/core/directives/hint';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-line-clamp-box',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>
    `,
    styleUrls: ['./line-clamp-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    hostDirectives: [TuiAnimated],
    host: {
        '[style.min-width.px]': 'width',
    },
})
export class TuiLineClampBox extends TuiHintComponent {
    protected get width(): number {
        return this.accessor.getClientRect().width;
    }
}
