import {InjectionToken} from '@angular/core';
import {TuiNotificationGroupService} from '@taiga-ui/core/interfaces';

export const TUI_NOTIFICATIONS_GROUP = new InjectionToken<
    readonly TuiNotificationGroupService[]
>('A stream of notifications group');
