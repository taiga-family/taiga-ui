import type {TuiDocPage, TuiDocPageGroup} from '@taiga-ui/addon-doc/types';

export function tuiIsPageGroup(
    page: TuiDocPage | TuiDocPageGroup,
): page is TuiDocPageGroup {
    return 'subPages' in page;
}
