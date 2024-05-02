import {inject} from '@angular/core';
import {TUI_IS_MOBILE, tuiCreateToken, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {mergeAll} from 'rxjs/operators';

import {TuiAlertQueueOperator} from './alert.queue';

export const TUI_ALERT_POSITION = tuiCreateTokenFromFactory<string>(() =>
    inject(TUI_IS_MOBILE) ? '1rem 1rem 0 auto' : '2rem 3rem 0 auto',
);

/**
 * A dependency injection token used to provide a specific `TuiAlertQueueOperator`.
 * This operator is based on the RxJS `mergeAll` operator, but is likely customized
 * for handling alert queue operations. It can be used to control the behavior of
 * alert queues, such as managing concurrency or preserving order.
 */
export const TUI_ALERT_QUEUE_OPERATOR = tuiCreateToken<TuiAlertQueueOperator>(() =>
    mergeAll(),
);
