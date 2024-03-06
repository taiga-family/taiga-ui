import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ALWAYS_FALSE_HANDLER, TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

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

    protected readonly texts$ = inject(TUI_COPY_TEXTS);

    @tuiPure
    protected get copied$(): Observable<boolean> {
        return this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true)),
            ),
        );
    }

    protected onClick(): void {
        this.copy$.next();
    }
}
