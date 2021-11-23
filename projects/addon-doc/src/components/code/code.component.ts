import {Component, HostBinding, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {RawLoaderContent} from '../../interfaces/page';
import {rawLoad} from '../../utils/raw-load';

@Component({
    selector: 'tui-doc-code',
    templateUrl: './code.template.html',
    styleUrls: ['./code.style.less'],
})
export class TuiDocCodeComponent {
    private readonly rawLoader$$ = new BehaviorSubject<RawLoaderContent>('');

    readonly processor$ = this.rawLoader$$.pipe(switchMap(rawLoad));

    @Input()
    filename = '';

    @Input()
    set code(code: RawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    @HostBinding('class._has-filename')
    get hasFilename(): boolean {
        return !!this.filename;
    }
}
