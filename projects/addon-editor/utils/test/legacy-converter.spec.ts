import {tuiLegacyEditorConverter} from '@taiga-ui/addon-editor';

describe('tuiLegacyEditorConverter', () => {
    it('works', () => {
        const before = `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.
<p>
    <font size="6"><font color="#168a21">Heading</font></font>
</p>
<p>
    <font size="6">Heading</font>
    <font size="5">Subtitle</font>
    <font size="4">Large</font>
    <font size="3">Normal</font>
    <font size="2">Small</font>
</p>
<p>Normal</p>
<p><font size="2">Small</font></p>
<font size="4">
    Lorem ipsum dolor sit amet
    <font color="#ff78a7">consectetur adipiscing elit</font>
    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <span style="background-color: rgb(163, 129, 255)">Ut enim</span>
</font>
<blockquote>
    ad minim veniam,
    <u>quis nostrud exercitation</u>
    <b>ullamco</b>
    , laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.
</blockquote>
<p style="text-align: right">
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>`;

        const after = `WYSIWYG (What you see is what you get) — Rich Text Editor for using with Angular forms.
<h1><span style="color: #168a21">Heading</span></h1><h1>Heading</h1><h2>Subtitle</h2><p><span style="font-size: 17px">Large</span><span style="font-size: 15px">Normal</span><span style="font-size: 13px">Small</span></p><p>Normal</p><p><span style="font-size: 13px">Small</span></p><p><span style="font-size: 17px">
    Lorem ipsum dolor sit amet
    <span style="color: #ff78a7">consectetur adipiscing elit</span>
    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <span style="background-color: rgb(163, 129, 255)">Ut enim</span></span></p><blockquote>
    ad minim veniam,
    <u>quis nostrud exercitation</u><b>ullamco</b>
    , laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.
</blockquote><p style="text-align: right">
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>`;

        expect(tuiLegacyEditorConverter(before).replace(/>\s+</g, '><')).toEqual(after);
    });
});
