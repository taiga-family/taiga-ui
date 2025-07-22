import {Observable} from 'rxjs';

interface CloseWatcher {
    destroy: () => void;
    onclose?: (event: Event) => void;
    oncancel?: (event: Event) => void;
}

export function tuiCloseWatcher(): Observable<void> {
    return new Observable((subscriber) => {
        let watcher = getWatcher();

        const setup = (): void => {
            watcher = getWatcher();
            watcher.onclose = () => setup();

            watcher.oncancel = (event) => {
                event.preventDefault();
                subscriber.next();
            };
        };

        setup();

        return () => watcher.destroy();
    });
}

function getWatcher(): CloseWatcher {
    // @ts-ignore
    // eslint-disable-next-line unicorn/no-typeof-undefined
    return typeof CloseWatcher === 'undefined' ? {destroy: () => {}} : new CloseWatcher();
}
