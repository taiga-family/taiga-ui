/// <reference lib="es2021" />
import {getSourceFiles} from 'ng-morph';

import {ALL_FILES} from '../../../constants';

const CHANGED_ICONS = [
    {from: 'tuiIconClose', to: '@tui.x'},
    {from: 'tuiIconCloseLarge', to: '@tui.x'},
    {from: 'tuiIconEdit2', to: '@tui.pencil'},
    {from: 'tuiIconEdit2Large', to: '@tui.pencil'},
    {from: 'tuiIconMoreHorizontal', to: '@tui.ellipsis'},
    {from: 'tuiIconMoreHorizontalLarge', to: '@tui.ellipsis'},
    {from: 'tuiIconMoreVertical', to: '@tui.ellipsis-vertical'},
    {from: 'tuiIconMoreVerticalLarge', to: '@tui.ellipsis-vertical'},
    {from: 'tuiIconDrag', to: ' @tui.grip-vertical'},
    {from: 'tuiIconDragLarge', to: ' @tui.grip-vertical'},
    {from: 'tuiIconGrid', to: '@tui.layout-grid'},
    {from: 'tuiIconGridLarge', to: '@tui.layout-grid'},
    {from: 'tuiIconTool', to: '@tui.wrench'},
    {from: 'tuiIconUnlock', to: '@tui.lock-open'},
    {from: 'tuiIconMessageCircle', to: '@tui.message-circle'},
    {from: 'tuiIconSliders', to: '@tui.sliders-vertical'},
    {from: 'tuiIconPlusSquare', to: '@tui.square-plus'},
    {from: 'tuiIconAlertTriangle', to: '@tui.triangle-alert'},
    {from: 'tuiIconUploadCloud', to: '@tui.cloud-upload'},
    {from: 'tuiIconDownloadCloud', to: '@tui.cloud-download'},
];

export function renameIcons(pattern = ALL_FILES): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach((file) => {
        let text = file.getFullText();

        CHANGED_ICONS.map(({from, to}) => ({
            from: new RegExp(`["'\`]${from}["'\`]`, 'g'),
            to,
        })).forEach(({from, to}) => {
            text = text.replaceAll(from, `"${to}"`);
        });

        const regex = /['"`]tuiIcon(?!Button\b)[A-Z][a-zA-Z0-9]*\b/g;

        text = text.replaceAll(regex, (match) => convertString(match));

        file.replaceWithText(text);
    });
}

function convertString(input: string): string {
    let result = input
        .replace(/["'`]tuiIcon/, '')
        .replace(/Large$/, '')
        .replaceAll(/([A-Z0-9])/g, '-$1')
        .toLowerCase();

    const circle = result.endsWith('-circle');

    if (circle) {
        result = result.replace('-circle', '');
        result = `circle${result}`;
    }

    return `${input.slice(0, 1)}@tui.${result.startsWith('-') ? result.slice(1) : result}`;
}
