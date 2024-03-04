import {type NgZone} from '@angular/core';
import {tuiZonefull} from '@taiga-ui/cdk';
import {distinctUntilChanged, map, type OperatorFunction, pipe} from 'rxjs';

/**
 * Works like regular map + distinctUntilChanged
 * and only returns to NgZone if value has changed
 *
 * @param project mapping function
 * @param zone NgZone instance
 */
export function tuiZonefulMap<T, R>(
    project: (value: T, index: number) => R,
    zone: NgZone,
): OperatorFunction<T, R> {
    return pipe(map(project), distinctUntilChanged(), tuiZonefull(zone));
}
