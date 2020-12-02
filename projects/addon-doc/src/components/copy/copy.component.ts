import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {Observable, Subject, timer} from 'rxjs';
import {mapTo, startWith, switchMapTo} from 'rxjs/operators';

const COPIED_TIMEOUT = 1500;

@Component({
    selector: 'tui-doc-copy',
    templateUrl: './copy.template.html',
    styleUrls: ['./copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopyComponent {
    private readonly copy$ = new Subject();

    @HostBinding('attr.title')
    readonly title = this.texts[0];

    constructor(@Inject(TUI_COPY_TEXTS) readonly texts: [string, string]) {}

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
