import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

const COPIED_TIMEOUT = 1500;

@Component({
    standalone: true,
    selector: 'tui-doc-copy',
    imports: [NgIf, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopy {
    private readonly copy$ = new Subject<void>();

    protected readonly texts = toSignal(inject(TUI_COPY_TEXTS), {
        initialValue: ['', ''] as const,
    });

    protected readonly copied = toSignal(
        this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(TUI_FALSE_HANDLER), startWith(true)),
            ),
        ),
        {initialValue: false},
    );

    protected onClick(): void {
        this.copy$.next();
    }
}
