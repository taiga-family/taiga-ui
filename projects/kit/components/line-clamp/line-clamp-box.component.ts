import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {TUI_HINT_PROVIDERS, tuiFadeIn, TuiHintComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    template: `
        <ng-container *polymorpheusOutlet="content as text">{{ text }}</ng-container>
    `,
    styleUrls: ['./line-clamp-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_HINT_PROVIDERS,
    animations: [tuiFadeIn],
    imports: [PolymorpheusModule],
})
export class TuiLineClampBoxComponent extends TuiHintComponent {
    @HostBinding('style.min-width.px')
    protected get width(): number {
        return this.accessor.getClientRect().width;
    }
}
