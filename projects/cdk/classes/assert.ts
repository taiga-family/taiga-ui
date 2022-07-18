import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

export const tuiAssert = {
    enabled: false,
    get assert(): (assertion: boolean, ...args: unknown[]) => void {
        return this.enabled
            ? Function.prototype.bind.call(console.assert, console)
            : EMPTY_FUNCTION;
    },
};

type PossibleNode = Node | Element | EventTarget | null;

interface DefaultView {
    Element: typeof Node;
    HTMLElement: typeof Node;
    HTMLDocument: typeof Node;
}

export function tuiAssertIsHTMLElement(node?: PossibleNode): asserts node is HTMLElement {
    const document = (node as Node)?.ownerDocument;
    const defaultView = document?.defaultView as unknown as DefaultView;
    const isHTMLElement =
        node !== null &&
        node !== undefined &&
        (node instanceof defaultView?.HTMLElement ||
            node instanceof defaultView?.Element ||
            node instanceof defaultView?.HTMLDocument);

    tuiAssert.assert(isHTMLElement, 'Node is not an Element');
}
