import {Component, ElementRef, HostBinding} from '@angular/core';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';

/** @deprecated use `<th tuiTh [resizable]="true">` from {@link TuiTableModule} */
@Component({
    selector: 'th[tuiResizableColumn]',
    templateUrl: './resizable-column.template.html',
    styleUrls: ['./resizable-column.style.less'],
    providers: [
        {
            provide: TUI_ELEMENT_REF,
            useExisting: ElementRef,
        },
    ],
})
export class TuiResizableColumnComponent {
    @HostBinding('style.width.px')
    width: number | null = null;

    onResize(width: number) {
        this.width = width;
    }
}
