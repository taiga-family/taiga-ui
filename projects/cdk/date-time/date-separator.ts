import {tuiCreateToken} from '@taiga-ui/cdk/utils';

/**
 * Date separator for Taiga UI components
 */
export const TUI_DATE_SEPARATOR = tuiCreateToken('.');

export const changeDateSeparator = (
    dateString: string,
    newDateSeparator: string,
): string => dateString.replaceAll(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
