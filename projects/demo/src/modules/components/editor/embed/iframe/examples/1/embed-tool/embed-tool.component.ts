import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';

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

    embed =
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0' +
        ' 0 30 30" height="30px" id="Embed" version="1.1" viewBox="0 0 30 30" width="20px" xml:space="preserve"><polygon id="_x3E_" points="30,13.917 19,7 19,10 27,15 19,20 19,23 30,15.959 "/><polygon id="_x3C_" points="0,13.917 11,7 11,10 3,15 11,20 11,23 0,15.958 "/></svg>';

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
