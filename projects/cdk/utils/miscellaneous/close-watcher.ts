import {Observable} from 'rxjs';

export function tuiCloseWatcher(): Observable<void> {
    return new Observable((subscriber) => {
        // @ts-ignore
        const watcher = typeof CloseWatcher === 'undefined' ? {} : new CloseWatcher();

        watcher.onclose = () => subscriber.next();

        return () => watcher.destroy?.();
    });
}
