import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiGenerateApiCode} from '@taiga-ui/addon-doc/utils';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiNotificationService} from '@taiga-ui/core/components/notification';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {TUI_COPY_TEXTS, TUI_DONE_WORD} from '@taiga-ui/kit/tokens';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import {TuiDocApiCopyRegistry} from './api-copy-registry';

const COPIED_TIMEOUT = 1500;

@Component({
    selector: 'table[tuiDocAPI]',
    imports: [TuiButton],
    templateUrl: './api.template.html',
    styleUrl: './api.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHintOptionsProvider({appearance: 'floating'}), TuiDocApiCopyRegistry],
})
export class TuiDocAPI {
    private readonly clipboard = inject(Clipboard);
    private readonly alerts = inject(TuiNotificationService);
    private readonly copy$ = new Subject<void>();
    private readonly copyTexts = inject(TUI_COPY_TEXTS);
    private readonly doneWord = inject(TUI_DONE_WORD);
    private readonly copyRegistry = inject(TuiDocApiCopyRegistry);

    protected readonly copyLabel = computed(() => this.copyTexts()[0]);
    protected readonly copyDoneLabel = computed(() => this.copyTexts()[1]);

    protected readonly copied = toSignal(
        this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(TUI_FALSE_HANDLER), startWith(true)),
            ),
        ),
        {initialValue: false},
    );

    public readonly copyTag = input('');
    public readonly copyContent = input('');
    public readonly copyStaticAttributes = input('');

    protected copyConfiguration(): void {
        const tag = this.copyTag();

        if (!tag) {
            return;
        }

        const code = tuiGenerateApiCode(
            tag,
            this.copyRegistry.snapshot().map((item) => ({
                name: item.name(),
                type: item.type(),
                value: item.value(),
            })),
            this.copyContent(),
            this.copyStaticAttributes(),
        );

        if (!this.clipboard.copy(code)) {
            return;
        }

        this.copy$.next();
        this.alerts
            .open(this.copyTexts()[1], {label: this.doneWord(), appearance: 'positive'})
            .subscribe();
    }
}
