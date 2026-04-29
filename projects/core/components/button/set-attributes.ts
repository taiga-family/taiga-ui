import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

export function tuiSetAttributes(selectors: string[]): undefined {
    const el = tuiInjectElement();

    el.getAttributeNames()
        .filter((name) => selectors.some((selector) => name === selector.toLowerCase()))
        .forEach((name) => el.setAttribute(name, TUI_VERSION));

    return undefined;
}
