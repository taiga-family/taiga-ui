import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';
import {TuiIconComponent} from '@taiga-ui/core/components/icon';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import type {TuiNotification} from './notification.options';
import {TUI_NOTIFICATION_OPTIONS} from './notification.options';

@Component({
    standalone: true,
    selector: 'tui-notification,a[tuiNotification],button[tuiNotification]',
    imports: [TuiButtonDirective, PolymorpheusModule, NgIf, TuiIconComponent, AsyncPipe],
    templateUrl: './notification.template.html',
    styleUrls: ['./notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationComponent {
    private readonly options = inject(TUI_NOTIFICATION_OPTIONS);

    @Input()
    public icon: PolymorpheusContent<TuiContext<TuiNotification>> = this.options.icon;

    @Input()
    @HostBinding('attr.data-status')
    public status = this.options.status;

    @Input()
    @HostBinding('attr.data-size')
    public size = this.options.size;

    @Input()
    public hideClose = false;

    @Output()
    public readonly close = new EventEmitter<void>();

    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    protected get hasClose(): boolean {
        return !this.hideClose && this.close.observed;
    }
}
