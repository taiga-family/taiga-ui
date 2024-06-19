import type {TuiDocRoutePage, TuiDocRoutePageGroup} from '@taiga-ui/addon-doc/types';

export function tuiIsRoutePageGroup(
    page: TuiDocRoutePage | TuiDocRoutePageGroup,
): page is TuiDocRoutePageGroup {
    return 'subPages' in page;
}
