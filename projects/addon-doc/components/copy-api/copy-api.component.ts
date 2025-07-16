import {Clipboard} from '@angular/cdk/clipboard';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import type {TuiApiItemConfig} from '../../services/code-generator.service';
import {TuiCodeGeneratorService} from '../../services/code-generator.service';

const COPIED_TIMEOUT = 1500;

@Component({
    standalone: true,
    selector: 'tui-doc-copy-api',
    imports: [TuiButton, TuiIcon],
    template: `
        <button
            appearance="flat"
            size="s"
            tuiButton
            type="button"
            class="t-copy-api"
            (click)="onCopy()"
        >
            <tui-icon 
                icon="@tui.copy"
                class="t-icon"
            />
            {{ copied() ? texts()[1] : texts()[0] }}
        </button>
    `,
    styles: [`
        .t-copy-api {
            gap: 0.25rem;
        }
        
        .t-icon {
            font-size: 1rem;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopyApi {
    private readonly clipboard = inject(Clipboard);
    private readonly codeGenerator = inject(TuiCodeGeneratorService);
    private readonly copy$ = new Subject<void>();

    @Input()
    public selector = '';

    @Input()
    public apiItems: TuiApiItemConfig[] = [];

    @Input()
    public content = '';

    protected readonly texts = toSignal(inject(TUI_COPY_TEXTS), {
        initialValue: ['Copy code', 'Copied!'] as const,
    });

    protected readonly copied = toSignal(
        this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(TUI_FALSE_HANDLER), startWith(true)),
            ),
        ),
        {initialValue: false},
    );

    protected onCopy(): void {
        const code = this.codeGenerator.generateComponentCode(
            this.selector,
            this.apiItems,
            this.content,
        );
        
        if (this.clipboard.copy(code)) {
            this.copy$.next();
        }
    }
}