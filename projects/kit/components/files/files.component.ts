import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Input,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {TuiFileDirective} from '@taiga-ui/kit/components/files/file.directive';

@Component({
    selector: 'tui-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiFilesComponent {
    @ContentChildren(TuiFileDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<{}>> | null = null;

    @Input()
    max = 0;

    hidden = true;

    get hasExtraItems(): boolean {
        return !!this.max && !!this.items?.length;
    }

    toggle() {
        this.hidden = !this.hidden;
    }
}
