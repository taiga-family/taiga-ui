import {TuiParsedGradient} from '@taiga-ui/addon-editor/interfaces';
import {tuiParseColor} from '@taiga-ui/cdk';

export function tuiToGradient({stops, side}: TuiParsedGradient): string {
    return `linear-gradient(${side}, ${stops
        .map(
            ({color, position}) => `rgba(${tuiParseColor(color).join(`, `)}) ${position}`,
        )
        .join(`, `)})`;
}
