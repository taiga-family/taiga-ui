import {Component, Inject, Injector} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {tuiPure} from '@taiga-ui/cdk';

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
            src="https://stackblitz.com/edit/angular?embed=1"
            frameborder="0"
            width="100%"
            allowfullscreen="true"
            data-type="iframe-editor"
            height="500"
        >
        </iframe>
        <p>Here is a media player:</p>
        <iframe
            src="https://music.yandex.com/iframe/#track/71263/419460"
            frameborder="0"
            width="400"
            allowfullscreen="true"
            data-type="iframe-editor"
        >
        </iframe>
        <p></p>
    `,
        Validators.required,
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    @tuiPure
    safe(content: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
