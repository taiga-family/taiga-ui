import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'mark[tuiHighlightMark]',
    template: '',
    styleUrls: ['./highlight.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightComponent {}
