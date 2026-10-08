import {Clipboard} from '@angular/cdk/clipboard';
import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiCopyProcessor} from '@taiga-ui/cdk/directives/copy-processor';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {TuiHint} from '@taiga-ui/core/portals/hint';
import {type TuiSizeL} from '@taiga-ui/core/types';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {BehaviorSubject, map, startWith, switchMap, timer} from 'rxjs';

import {TUI_COPY_OPTIONS} from './copy.options';

@Component({
    selector: 'tui-copy',
    imports: [TuiButton, TuiHint, TuiIcon],
    templateUrl: './copy.template.html',
    styleUrl: './copy.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
        '(pointerdown)': 'copied$.next(false)',
    },
})
export class TuiCopyComponent {
    private readonly clipboard = inject(Clipboard);
    private readonly processor = inject(TuiCopyProcessor, {optional: true});

    protected readonly notification = inject(TUI_NOTIFICATION_OPTIONS);
    protected readonly options = inject(TUI_COPY_OPTIONS);
    protected readonly copied$ = new BehaviorSubject(false);
    protected readonly texts = inject(TUI_COPY_TEXTS);

    protected readonly hint = toSignal(
        this.copied$.pipe(
            switchMap((copied) =>
                timer(2000).pipe(map(TUI_FALSE_HANDLER), startWith(copied)),
            ),
        ),
    );

    public readonly size = input<TuiSizeL>('m');

    protected get check(): string {
        return tuiIsString(this.notification.icon)
            ? this.notification.icon
            : this.notification.icon('positive');
    }

    protected copy(value: string | null): void {
        const text = value ?? '';

        this.copied$.next(
            this.clipboard.copy(this.processor?.tuiCopyProcessor()(text) ?? text),
        );
    }
}
