import {TuiParsedGradient} from '@taiga-ui/addon-editor/interfaces';

import {parseColor} from './parse-color';

/**
 * @deprecated: use {@link tuiToGradient} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function toGradient({stops, side}: TuiParsedGradient): string {
    return `linear-gradient(${side}, ${stops
        .map(({color, position}) => `rgba(${parseColor(color).join(', ')}) ${position}`)
        .join(', ')})`;
}

export const tuiToGradient = toGradient;
