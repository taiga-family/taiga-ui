import {Component, HostBinding, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {RawLoaderContent} from '../../interfaces/page';
import {rawLoad} from '../../utils/raw-load';
import {tryParseMarkdownCodeBlock} from './parse-code-block';

@Component({
    selector: `tui-doc-code`,
    templateUrl: `./code.template.html`,
    styleUrls: [`./code.style.less`],
})
export class TuiDocCodeComponent {
    private readonly rawLoader$$ = new BehaviorSubject<RawLoaderContent>(``);

    @Input()
    filename = ``;

    readonly processor$ = this.rawLoader$$.pipe(
        switchMap(rawLoad),
        map(tryParseMarkdownCodeBlock),
    );

    @Input()
    set code(code: RawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    @HostBinding(`class._has-filename`)
    get hasFilename(): boolean {
        return !!this.filename;
    }
}
