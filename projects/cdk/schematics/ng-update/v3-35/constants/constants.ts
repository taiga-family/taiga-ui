import {type ReplacementIdentifier} from '../../interfaces/replacement-identifier';
import {ICONS} from './icons';

export const ICONS_TS: ReplacementIdentifier[] = ICONS.map(({from, to}) => ({
    from: {name: from, moduleSpecifier: '@taiga-ui/proprietary-icons'},
    to: {name: to, moduleSpecifier: '@taiga-ui/proprietary-tds-icons'},
}));
