import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    defaultEditorExtensions,
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_STYLES,
} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample1 {
    control = new FormControl(
        '<p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) — <u>Rich Text Editor</u> for using with Angular<sup> forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p>ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: #FFDD2C" colspan="1" rowspan="1"><p>+</p></td><td style="background: #39b54a" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>',
        Validators.required,
    );

    example1(): void {
        this.control.setValue(
            '<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated</span></h1>',
        );
    }

    example2(): void {
        this.control.setValue(
            `
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>

                <ol>
                    <li>A</li>
                    <li>B</li>
                </ol>
            `,
        );
    }

    example3(): void {
        this.control.setValue(
            `
                <ul>
                  <li>
                    1
                    <ul>
                      <li>
                        2
                        <ul>
                          <li>3</li>
                          <li>4</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>5</li>
                </ul>

                <ol>
                  <li>
                    1
                    <ol>
                      <li>
                        2
                        <ol>
                          <li>3</li>
                          <li>4</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>5</li>
                </ol>
            `,
        );
    }
}
