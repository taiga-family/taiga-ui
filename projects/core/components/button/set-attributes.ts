import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

export function tuiSetAttributes(): undefined {
    const el = tuiInjectElement();

    el.getAttributeNames()
        .filter((name) => name.startsWith('tui'))
        .forEach((name) => el.setAttribute(name, TUI_VERSION));

    return undefined;
}
