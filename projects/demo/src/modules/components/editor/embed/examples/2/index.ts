import {Component, Inject, Injector} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {TUI_IS_CYPRESS, tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-embed-example-2',
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
export class TuiEditorEmbedExample2 {
    readonly builtInTools = [TuiEditorTool.Undo];

    readonly control = new FormControl(
        `
        <p>Here is an online IDE:</p>
        <iframe
            src="https://stackblitz.com/edit/angular?embed=1${
                this.isCypress ? '&view=editor' : ''
            }"
            frameborder="0"
            width="100%"
            allowfullscreen="true"
            data-type="iframe-editor"
            height="500"
        >
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
