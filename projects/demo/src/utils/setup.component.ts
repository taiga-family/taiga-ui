import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiDocCodeModule, TuiDocPageComponent} from '@taiga-ui/addon-doc';
import {tuiPure} from '@taiga-ui/cdk';

import {toKebab} from './kebab.pipe';

@Component({
    standalone: true,
    selector: 'tui-setup',
    imports: [TuiDocCodeModule],
    template: `
        <ol class="b-demo-steps">
            <li>
                <p>Add an import:</p>
                <tui-doc-code [code]="computedImport" />
            </li>

            <li>
                <p>Add to the template:</p>
                <tui-doc-code [code]="computedTemplate" />
            </li>
        </ol>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSetupComponent {
    private readonly page = inject(TuiDocPageComponent);

    @Input()
    public import: TuiRawLoaderContent = '';

    @Input()
    public template: TuiRawLoaderContent = '';

    @tuiPure
    protected get computedImport(): TuiRawLoaderContent {
        return (
            this.import ||
            import(
                `../modules/${this.page.type}/${toKebab(this.page.header)}/examples/import/import.md?raw`
            )
        );
    }

    @tuiPure
    protected get computedTemplate(): TuiRawLoaderContent {
        return (
            this.template ||
            import(
                `../modules/${this.page.type}/${toKebab(this.page.header)}/examples/import/template.md?raw`
            )
        );
    }
}
