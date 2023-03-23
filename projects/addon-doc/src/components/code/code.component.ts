import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {BehaviorSubject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import type {RawLoaderContent} from '../../interfaces/page';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR} from '../../tokens/example-content-processor';
import {tuiRawLoad} from '../../utils/raw-load';

@Component({
    selector: 'tui-doc-code',
    templateUrl: './code.template.html',
    styleUrls: ['./code.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCodeComponent {
    private readonly rawLoader$$ = new BehaviorSubject<RawLoaderContent>('');

    @Input()
    filename = '';

    readonly processor$ = this.rawLoader$$.pipe(
        switchMap(tuiRawLoad),
        map((value: string): string[] => this.markdownCodeProcessor(value)),
    );

    constructor(
        @Inject(TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR)
        readonly markdownCodeProcessor: TuiHandler<string, string[]>,
    ) {}

    @Input()
    set code(code: RawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    @HostBinding('class._has-filename')
    get hasFilename(): boolean {
        return !!this.filename;
    }
}
