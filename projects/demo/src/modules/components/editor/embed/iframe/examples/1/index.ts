import {Component, Inject, Injector} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {TUI_IS_CYPRESS, tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-embed-iframe-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@taiga-ui/addon-editor/extensions/iframe-editor').then(
                    ({createIframeEditorExtension}) =>
                        createIframeEditorExtension(injector),
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorEmbedIframeExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];

    readonly control = new FormControl(
        `
        <p>Here is an online IDE:</p>
        <iframe
         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${
             this.isCypress ? '' : '%2Cresult'
         }&editable=true"
         height="375"
         width="100%"
         scrolling="no"
         frameborder="no"
         loading="lazy"
         allowtransparency="true"
         data-type="iframe-editor"
         allowfullscreen="true">
        </iframe>
        </iframe>
        <p>Here is a media player:</p>
        <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"
            height="42"
            width="100%"
            data-type="iframe-editor">
        </iframe>
        <p></p>
    `,
        Validators.required,
    );

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean,
    ) {}

    @tuiPure
    safe(content: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
