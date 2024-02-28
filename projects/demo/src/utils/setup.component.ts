import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiDocCodeModule, TuiRawLoaderContent} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'tui-setup',
    imports: [TuiDocCodeModule],
    template: `
        <ol class="b-demo-steps">
            <li>
                <p>Add an import:</p>
                <tui-doc-code [code]="import"></tui-doc-code>
            </li>

            <li>
                <p>Add to the template:</p>
                <tui-doc-code [code]="template"></tui-doc-code>
            </li>
        </ol>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSetupComponent {
    @Input()
    public import: TuiRawLoaderContent = '';

    @Input()
    public template: TuiRawLoaderContent = '';
}
