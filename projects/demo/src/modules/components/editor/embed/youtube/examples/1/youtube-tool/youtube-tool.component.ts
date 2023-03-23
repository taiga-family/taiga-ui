import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor';
import type {TuiHostedDropdownComponent} from '@taiga-ui/core';

@Component({
    selector: 'youtube-tool',
    templateUrl: './youtube-tool.template.html',
    styleUrls: ['./youtube-tool.styles.less'],
    changeDetection,
    encapsulation,
})
export class ExampleTuiYoutubeToolComponent {
    @ViewChild('dropdown')
    private readonly dropdown?: TuiHostedDropdownComponent;

    youtubeLogo =
        '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'' +
        '  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="24px" style="enable-background:new 0 0' +
        ' 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve"' +
        ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x33_95-youtube"><g><path d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z" style="fill:#FF0000;"/><polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " style="fill:#FFFFFF;"/></g></g><g id="Layer_1"/></svg>';

    placeholder = 'https://www.youtube.com/embed/j2_NnV7nU6s';
    url = '';

    constructor(
        @Inject(TuiTiptapEditorService)
        private readonly editor: TuiTiptapEditorService,
    ) {}

    insertYoutubeVideo(src: string): void {
        if (src) {
            const prevLine = this.editor.state.selection.anchor;

            // @note: don't use `setHardBreak`,
            // it inherits styles of previous lines
            // required two line after
            // this.editor.enter();
            this.editor.enter();
            this.editor.setTextSelection(prevLine);
            this.editor.setYoutubeVideo({src, width: '100%'});

            this.url = '';
            this.dropdown?.close();
        }
    }
}
