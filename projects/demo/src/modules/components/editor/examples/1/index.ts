import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-editor-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample1 {
    model =
        `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.` +
        `<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">` +
        `consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ` +
        `<span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, ` +
        `<u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. ` +
        `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote>` +
        `<p style="text-align: right;">Excepteur sint occaecat ` +
        `cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;

    onClick(): void {
        this.model = `<b>HTML FTW!</b>`;
    }
}
