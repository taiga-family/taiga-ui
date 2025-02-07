import {Observable} from 'rxjs';

interface CloseWatcher {
    destroy: () => void;
    onclose?: (event: Event) => void;
    oncancel?: (event: Event) => void;
}

export function tuiCloseWatcher(): Observable<void> {
    return new Observable((subscriber) => {
        let watcher = getWatcher();

        const setup = () => {
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
    return typeof CloseWatcher === 'undefined' ? {destroy: () => {}} : new CloseWatcher();
}
