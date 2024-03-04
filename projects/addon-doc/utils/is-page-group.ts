import {type TuiDocPage, type TuiDocPageGroup} from '@taiga-ui/addon-doc/interfaces';

export function tuiIsPageGroup(
    page: TuiDocPage | TuiDocPageGroup,
): page is TuiDocPageGroup {
    return 'subPages' in page;
}
