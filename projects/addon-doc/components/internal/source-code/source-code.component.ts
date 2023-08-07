import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/interfaces';
import {
    TUI_DOC_ICONS,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_SOURCE_CODE_TEXT,
    TuiDocIcons,
} from '@taiga-ui/addon-doc/tokens';
import {tuiPure} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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

    constructor(
        @Inject(TUI_DOC_ICONS) readonly icons: TuiDocIcons,
        @Inject(TUI_DOC_SOURCE_CODE)
        readonly sourceCode: PolymorpheusContent<TuiDocSourceCodePathOptions>,
        @Inject(TUI_DOC_SOURCE_CODE_TEXT) readonly text: string,
    ) {}

    get pathOptions(): TuiDocSourceCodePathOptions {
        return this.getPathOptions(this.header, this.package, this.type, this.path);
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
