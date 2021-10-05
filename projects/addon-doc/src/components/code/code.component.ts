import {Component, HostBinding, Input} from '@angular/core';

@Component({
    selector: 'tui-doc-code',
    templateUrl: './code.template.html',
    styleUrls: ['./code.style.less'],
})
export class TuiDocCodeComponent {
    @Input()
    filename = '';

    @Input()
    code = '';

    @HostBinding('class._has-filename')
    get hasFilename(): boolean {
        return !!this.filename;
    }
}
