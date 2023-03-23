import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor';
import type {TuiHostedDropdownComponent} from '@taiga-ui/core';

@Component({
    selector: 'embed-tool',
    templateUrl: './embed-tool.template.html',
    styleUrls: ['./embed-tool.styles.less'],
    changeDetection,
    encapsulation,
})
export class ExampleTuiEmbedToolComponent {
    @ViewChild('dropdown')
    private readonly dropdown?: TuiHostedDropdownComponent;

    placeholder = 'https://my-embed.site.com/etc1235';
    url = '';

    constructor(
        @Inject(TuiTiptapEditorService)
        private readonly editor: TuiTiptapEditorService,
    ) {}

    embedSource(src: string): void {
        if (src) {
            this.editor.setIframe({src});

            this.url = '';
            this.dropdown?.close();
        }
    }
}
