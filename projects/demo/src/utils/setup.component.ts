import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {TuiDocCode, TuiDocPage, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';

import {toKebab} from './kebab.pipe';

@Component({
    selector: 'tui-setup',
    imports: [TuiDocCode],
    template: `
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                <p>Add an import:</p>
                <tui-doc-code [code]="computedImport()" />
            </li>

            <li class="tui-list__item">
                <p>Add to the template:</p>
                <tui-doc-code [code]="computedTemplate()" />
            </li>

            <ng-content />
        </ol>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSetup {
    private readonly page = inject(TuiDocPage);

    public readonly import = input<TuiRawLoaderContent>('');

    public readonly template = input<TuiRawLoaderContent>('');

    protected readonly computedImport = computed(
        (): TuiRawLoaderContent =>
            this.import() ||
            import(
                `../modules/${this.page.type()}/${toKebab(this.page.header())}/examples/import/import.md`
            ),
    );

    protected readonly computedTemplate = computed(
        (): TuiRawLoaderContent =>
            this.template() ||
            import(
                `../modules/${this.page.type()}/${toKebab(this.page.header())}/examples/import/template.md`
            ),
    );
}
