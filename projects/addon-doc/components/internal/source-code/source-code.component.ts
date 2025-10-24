import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {
    TUI_DOC_ICONS,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_SOURCE_CODE_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import {type TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-doc-source-code',
    imports: [PolymorpheusOutlet, TuiButton],
    templateUrl: './source-code.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSourceCode {
    protected readonly icons = inject(TUI_DOC_ICONS);
    protected readonly sourceCode = inject(TUI_DOC_SOURCE_CODE);
    protected readonly text = inject(TUI_DOC_SOURCE_CODE_TEXT);

    public readonly header = input('');

    public readonly package = input('');

    public readonly type = input('');

    public readonly path = input('');

    protected get pathOptions(): TuiDocSourceCodePathOptions {
        return this.getPathOptions(
            this.header(),
            this.package(),
            this.type(),
            this.path(),
        );
    }

    @tuiPure
    protected pathIsUrl(path: string): boolean {
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
