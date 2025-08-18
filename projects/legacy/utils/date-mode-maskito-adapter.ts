import {type MaskitoDateMode} from '@maskito/kit';
import {type TuiDateMode} from '@taiga-ui/cdk/date-time';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_DATE_MODE_MASKITO_ADAPTER: Record<TuiDateMode, MaskitoDateMode> = {
    DMY: 'dd/mm/yyyy',
    MDY: 'mm/dd/yyyy',
    YMD: 'yyyy/mm/dd',
};
