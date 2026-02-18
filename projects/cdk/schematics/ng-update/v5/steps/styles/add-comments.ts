import {STYLE_COMMENTS} from '../constants/style-comments';

export function addStyleComments(fileContent: string): string {
    return Object.entries(STYLE_COMMENTS).reduce((text, [entity, comment]) => {
        const wordRegex = new RegExp(String.raw`(^|\n)(?=[^\n]*${entity}\b)`, 'g');

        return text.replaceAll(wordRegex, `$1// TODO: (Taiga UI migration) ${comment}\n`);
    }, fileContent);
}
