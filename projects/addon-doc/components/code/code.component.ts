import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {RawLoaderContent} from '@taiga-ui/addon-doc/interfaces';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR} from '@taiga-ui/addon-doc/tokens';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import {TuiHandler} from '@taiga-ui/cdk';
import {BehaviorSubject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

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
