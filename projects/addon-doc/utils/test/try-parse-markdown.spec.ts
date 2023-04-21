import {tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

describe(`tryParseMarkdown`, () => {
    const codeSection = `\`\`\``;

    it(`should be correct parse markdown`, () => {
        const tsCode = `
import {TuiAvatarModule} from '@taiga-ui/kit';

// ...

@NgModule({
    imports: [
        // ...
        TuiAvatarModule,
    ],
})
export class MyAvatarModule {
}`;

        const htmlCode = `<p>hello world</p>`;

        expect(
            tuiTryParseMarkdownCodeBlock(
                `
${codeSection}ts\n${tsCode}\n${codeSection}

# H1 (will be ignored)

${codeSection}\nContent without type\n${codeSection}

${codeSection}html\n${htmlCode}\n${codeSection}
        `,
            ),
        ).toEqual([`${tsCode}\n`, `Content without type\n`, `${htmlCode}\n`]);
    });

    it(`should correct parse plain text`, () => {
        const txt = `
// ...

@NgModule({
    imports: [
        // ...
        TuiAvatarModule,
    ],
})
export class MyAvatarModule {
}
`;

        expect(tuiTryParseMarkdownCodeBlock(txt)).toEqual([txt]);
    });

    it(`correct parse typescript file as plain text`, () => {
        const txt = `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'tui-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiRatingExample1 {
    control = new FormControl('');

    setDisable(): void {
        control.enable();
    }
}
`;

        expect(tuiTryParseMarkdownCodeBlock(txt)).toEqual([txt]);
    });

    it(`should be correct parse with deep markdown in variable`, () => {
        const code = `
${codeSection}ts
const a = "${codeSection}\
#Title\
${codeSection}\
";
${codeSection}
        `;

        expect(tuiTryParseMarkdownCodeBlock(code)).toEqual([
            `const a = "\`\`\`#Title\`\`\`";\n`,
        ]);
    });
});
