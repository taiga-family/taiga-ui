import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {tuiIsNumber} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-resizable',
    templateUrl: './editor-resizable.component.html',
    styleUrls: ['./editor-resizable.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorResizableComponent {
    @Input()
    autoHeight = false;

    @Input()
    width: number | string | null = null;

    @Input()
    height: number | string | null = null;

    @Output()
    readonly sizeChange = new EventEmitter<readonly [width: number, height: number]>();

    @HostBinding('style.width')
    get hostWidth(): number | string | null {
        return tuiIsNumber(this.width) ? `${this.width}px` : this.width;
    }

    @HostBinding('style.height')
    get hostHeight(): number | string | null {
        if (this.autoHeight) {
            return null;
        }

        return tuiIsNumber(this.height) ? `${this.height}px` : this.height;
    }
}
