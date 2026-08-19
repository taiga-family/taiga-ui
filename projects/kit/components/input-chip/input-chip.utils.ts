import {tuiSanitizeText} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';

export function tuiParseInputChipValue<T>(
    rawValue: string,
    separator: RegExp | string,
    handlers: TuiItemsHandlers<T>,
): T[] {
    const value = rawValue.trim();
    const items = separator ? value.split(separator) : [value];
    const isDisabled = handlers.disabledItemHandler();
    const stringify = handlers.stringify();

    return items
        .map((item) => tuiSanitizeText(item) as T)
        .filter((item) => item && !isDisabled(item) && stringify(item));
}
