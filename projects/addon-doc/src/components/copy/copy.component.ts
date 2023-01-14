import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {ALWAYS_FALSE_HANDLER, TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {Observable, Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

const COPIED_TIMEOUT = 1500;

@Component({
    selector: 'tui-doc-copy',
    templateUrl: './copy.template.html',
    styleUrls: ['./copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiDocCopyComponent {
    private readonly copy$ = new Subject<void>();

    constructor(@Inject(TUI_COPY_TEXTS) readonly texts$: Observable<[string, string]>) {}

    @tuiPure
    get copied$(): Observable<boolean> {
        return this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true)),
            ),
        );
    }

    onClick(): void {
        this.copy$.next();
    }
}
