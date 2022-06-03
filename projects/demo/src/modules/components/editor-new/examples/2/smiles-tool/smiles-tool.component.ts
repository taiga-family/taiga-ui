import {Component, Inject} from '@angular/core';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor';

@Component({
    selector: 'smiles-tool',
    templateUrl: './smiles-tool.template.html',
    styleUrls: ['./smiles-tool.styles.less'],
})
export class ExampleSmilesToolComponent {
    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */
    readonly smiles = [
        '&#129409;',
        '&#9200;',
        '&#9749;',
        '&#9989;',
        '&#10060;',
        '&#10071;',
        '&#10133;',
        '&#128064;',
        '&#128070;',
        '&#128076;',
        '&#128522;',
        '&#128640;',
    ];

    constructor(
        @Inject(TuiTiptapEditorService)
        private readonly editor: TuiTiptapEditorService,
    ) {}

    insertSmile(smile: string): void {
        this.editor
            .getOriginTiptapEditor()
            .chain()
            .focus()
            .insertContent(`<p>${smile}</p>`)
            .insertContent(` `)
            .run();
    }
}
