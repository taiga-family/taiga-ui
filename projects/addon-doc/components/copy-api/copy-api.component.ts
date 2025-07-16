import {ClipboardModule} from '@angular/cdk/clipboard';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import type {TuiApiItemConfig} from '../../services/code-generator.service';
import {TuiCodeGeneratorService} from '../../services/code-generator.service';

const COPIED_TIMEOUT = 1500;

@Component({
    standalone: true,
    selector: 'tui-doc-copy-api',
    imports: [ClipboardModule, TuiButton],
    template: `
        <button
            tuiIconButton
            type="button"
            appearance="flat"
            size="s"
            class="t-copy-api"
            [iconStart]="icon()"
            [cdkCopyToClipboard]="generatedCode"
            (click)="onCopy()"
        >
            {{ copyText() }}
        </button>
    `,
    styles: [`
        .t-copy-api {
            margin-top: 1rem;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopyApi {
    private readonly icons = inject(TUI_DOC_ICONS);
    private readonly codeGenerator = inject(TuiCodeGeneratorService);
    private readonly copy$ = new Subject<void>();

    @Input()
    public selector = '';

    @Input()
    public apiItems: TuiApiItemConfig[] = [];

    @Input()
    public content = '';

    protected readonly copyText = toSignal(
        inject(TUI_COPY_TEXTS).pipe(map(([copy]) => copy)),
        {initialValue: 'Copy code'},
    );

    protected readonly icon = toSignal(
        this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(
                    map(() => this.icons.copy),
                    startWith('✓'),
                ),
            ),
            startWith(this.icons.copy),
        ),
        {initialValue: this.icons.copy},
    );

    protected get generatedCode(): string {
        return this.codeGenerator.generateComponentCode(
            this.selector,
            this.apiItems,
            this.content,
        );
    }

    protected onCopy(): void {
        this.copy$.next();
    }
}