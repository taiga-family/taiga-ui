import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TuiRawLoaderContent} from '@taiga-ui/addon-doc/interfaces';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR} from '@taiga-ui/addon-doc/tokens';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiHandler} from '@taiga-ui/cdk';
import {BehaviorSubject, map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-doc-code',
    templateUrl: './code.template.html',
    styleUrls: ['./code.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCodeComponent {
    private readonly rawLoader$$ = new BehaviorSubject<TuiRawLoaderContent>('');

    @Input()
    public filename = '';

    protected readonly markdownCodeProcessor = inject<TuiHandler<string, string[]>>(
        TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
    );

    protected readonly copy$ = new Subject<void>();

    protected readonly icon$ = this.copy$.pipe(
        switchMap(() =>
            timer(2000).pipe(
                map(() => 'tuiIconCopyLarge'),
                startWith('tuiIconCheckLarge'),
            ),
        ),
    );

    protected readonly processor$ = this.rawLoader$$.pipe(
        switchMap(tuiRawLoad),
        map((value: string): string[] => this.markdownCodeProcessor(value)),
    );

    @Input()
    public set code(code: TuiRawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    @HostBinding('class._has-filename')
    protected get hasFilename(): boolean {
        return !!this.filename;
    }
}
