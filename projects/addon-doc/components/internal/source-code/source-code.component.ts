import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/interfaces';
import {
    TUI_DOC_ICONS,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_SOURCE_CODE_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-doc-source-code',
    templateUrl: './source-code.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSourceCodeComponent {
    @Input()
    header = '';

    @Input()
    package = '';

    @Input()
    type = '';

    @Input()
    path = '';

    readonly icons = inject(TUI_DOC_ICONS);
    readonly sourceCode = inject(TUI_DOC_SOURCE_CODE);
    readonly text = inject(TUI_DOC_SOURCE_CODE_TEXT);

    get pathOptions(): TuiDocSourceCodePathOptions {
        return this.getPathOptions(this.header, this.package, this.type, this.path);
    }

    @tuiPure
    pathIsUrl(path: string): boolean {
        return path.startsWith('http');
    }

    @tuiPure
    private getPathOptions(
        header: string,
        packageName: string,
        type: string,
        path: string,
    ): TuiDocSourceCodePathOptions {
        return {
            header,
            package: packageName,
            type,
            path,
        };
    }
}
