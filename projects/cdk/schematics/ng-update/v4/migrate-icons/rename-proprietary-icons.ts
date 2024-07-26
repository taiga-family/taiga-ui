/// <reference lib="es2021" />
import {getSourceFiles} from 'ng-morph';

import {ALL_FILES} from '../../../constants';

export function renameProprietaryIcons(pattern = ALL_FILES): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach((file) => {
        let text = file.getFullText();

        const regex = /['"`]tuiIcon(?!Button\b)[A-Z][a-zA-Z0-9]*\b/g;

        text = text.replaceAll(regex, (match) => convertString(match));

        file.replaceWithText(text);
    });
}

function convertString(input: string): string {
    const result = input
        .replace(/['"`]tuiIconTds/, '')
        .replace(/SmallPragmatic$/, '')
        .replace(/MediumPragmatic$/, '')
        .replace(/Small$/, '')
        .replace(/Medium$/, '')
        .replace(/Flags$/, '')
        .replace(/Service$/, '')
        .replace(/Logo$/, '')
        .replace(/LogoSiteheader$/, '')
        .replace(/LogoSquare$/, '')
        .replaceAll(/([A-Z0-9])/g, '-$1')
        .toLowerCase();

    const pack = extractPackName(input);
    const subfolder = extractSubfolder(input);

    return `${input.slice(0, 1)}@tui.${pack}${subfolder ? `.${subfolder}` : ''}.${result.startsWith('-') ? result.slice(1) : result}`;
}

function extractPackName(input: string): string {
    if (input.endsWith('Pragmatic')) {
        return 'pragmatic';
    }

    if (input.endsWith('Service')) {
        return 'service';
    }

    if (
        input.endsWith('Logo') ||
        input.endsWith('LogoSquare') ||
        input.endsWith('LogoSiteheader')
    ) {
        return 'logo';
    }

    if (input.endsWith('Flags')) {
        return 'flags';
    }

    return 'fancy';
}

function extractSubfolder(input: string): string | null {
    if (input.includes('Medium')) {
        return 'medium';
    }

    if (input.includes('Small')) {
        return 'small';
    }

    if (input.includes('LogoSquare')) {
        return 'square';
    }

    if (input.includes('LogoSiteheader')) {
        return 'siteheader';
    }

    return null;
}
