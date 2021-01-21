import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {Observable, Subject, timer} from 'rxjs';
import {mapTo, startWith, switchMapTo, takeUntil} from 'rxjs/operators';

const COPIED_TIMEOUT = 1500;

// @dynamic
@Component({
    selector: 'tui-doc-copy',
    templateUrl: './copy.template.html',
    styleUrls: ['./copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiDocCopyComponent {
    private readonly copy$ = new Subject();

    @HostBinding('attr.title')
    title = '';

    copiedMessage = '';

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(TUI_COPY_TEXTS) texts$: Observable<[string, string]>,
    ) {
        texts$.pipe(takeUntil(destroy$)).subscribe(texts => {
            [this.title, this.copiedMessage] = texts;
        });
    }

    @tuiPure
    get copied$(): Observable<boolean> {
        return this.copy$.pipe(
            switchMapTo(timer(COPIED_TIMEOUT).pipe(mapTo(false), startWith(true))),
        );
    }

    onClick() {
        this.copy$.next();
    }
}
