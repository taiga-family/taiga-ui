/// <reference lib="es2021" />
import {getSourceFiles} from 'ng-morph';

import {ALL_FILES} from '../../../constants';

export function renameProprietaryIcons(pattern = ALL_FILES): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach(file => {
        let text = file.getFullText();

        const regex = /\btuiIcon(?!Button\b)[A-Z][a-zA-Z0-9]*\b/g;

        text = text.replaceAll(regex, match => convertString(match));

        file.replaceWithText(text);
    });
}

function convertString(input: string): string {
    const result = input
        .replace(/^tuiIconTds/, '')
        .replace(/SmallPragmatic$/, '')
        .replace(/MediumPragmatic$/, '')
        .replace(/Small$/, '')
        .replace(/Medium$/, '')
        .replaceAll(/([A-Z0-9])/g, '-$1')
        .toLowerCase();

    const pack = input.includes('Pragmatic') ? 'pragmatic' : 'fancy';
    const size = input.includes('Medium') ? 'medium' : 'small';

    return `@tui.${pack}.${size}.${result.startsWith('-') ? result.slice(1) : result}`;
}
