/* eslint rxjs/no-implicit-any-catch: 0 */
/* eslint rxjs/no-nested-subscribe: 0 */

import {Observable, Subscription} from 'rxjs';

/**
 * Custom RxJS operator that subscribes to the latest `concurrent` inner observables.
 * It automatically unsubscribes from the oldest active inner observable once the limit is exceeded.
 *
 * @param {number} concurrent - Maximum number of concurrent subscriptions allowed.
 */
export const latestAll =
    <T>(concurrent: number) =>
    (source: Observable<Observable<T>>): Observable<T> =>
        new Observable<T>(subscriber => {
            const activeSubscriptions: Subscription[] = [];

            const subscription = source.subscribe({
                next: innerObservable => {
                    const innerSubscription = innerObservable.subscribe({
                        next: value => subscriber.next(value),
                        error: err => subscriber.error(err),
                        complete: () => {
                            const index = activeSubscriptions.indexOf(innerSubscription);

                            if (index !== -1) {
                                activeSubscriptions.splice(index, 1);
                            }
                        },
                    });

                    activeSubscriptions.push(innerSubscription);

                    if (activeSubscriptions.length > concurrent) {
                        activeSubscriptions.shift()?.unsubscribe();
                    }
                },
                error: err => subscriber.error(err),
                complete: () => subscriber.complete(),
            });

            // Ensure all active subscriptions are cleaned up on un-subscription
            subscription.add(() => {
                activeSubscriptions.forEach(sub => sub.unsubscribe());
            });

            return subscription;
        });
