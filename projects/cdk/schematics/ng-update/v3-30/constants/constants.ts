import {ReplacementConst} from '../../interfaces/replacement-const';
import {ICONS} from './icons';

export const ICONS_TS: ReplacementConst[] = ICONS.map(({from, to}) => ({
    from: {name: from, moduleSpecifier: `@taiga-ui/proprietary-icons`},
    to: {name: to, moduleSpecifier: `@taiga-ui/proprietary-tds-icons`},
}));
