import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {
    TUI_DOC_ICONS,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_SOURCE_CODE_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import {type TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/types';
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

    protected readonly pathOptions = computed(
        (): TuiDocSourceCodePathOptions => ({
            header: this.header(),
            package: this.package(),
            type: this.type(),
            path: this.path(),
        }),
    );

    protected readonly pathIsUrl = computed(
        (): boolean => this.path()?.startsWith('http') ?? false,
    );
}
