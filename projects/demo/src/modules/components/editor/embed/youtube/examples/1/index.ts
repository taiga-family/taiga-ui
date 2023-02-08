import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-embed-youtube-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@taiga-ui/addon-editor/extensions/youtube').then(
                    ({Youtube}) => Youtube,
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorEmbedYoutubeExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl(
        `
        <p>Editor now supports YouTube embeds!</p>
        <div data-youtube-video>
            <iframe width="100%" src="https://www.youtube.com/watch?v=KdO8CFCXQu0"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>
    `,
        Validators.required,
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    /**
     * TUI_SANITIZER doesn't support iframe inside content
     */
    @tuiPure
    safe(content: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
