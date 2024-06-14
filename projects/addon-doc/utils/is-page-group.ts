import type {TuiDocPageGroup, TuiDocPageRoute} from '@taiga-ui/addon-doc/types';

export function tuiIsPageGroup(
    page: TuiDocPageGroup | TuiDocPageRoute,
): page is TuiDocPageGroup {
    return 'subPages' in page;
}
