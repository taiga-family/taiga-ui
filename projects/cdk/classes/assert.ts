import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

export const tuiAssert = {
    enabled: false,
    get assert(): (assertion: boolean, ...args: any[]) => void {
        return this.enabled
            ? Function.prototype.bind.call(console.assert, console)
            : EMPTY_FUNCTION;
    },
};

type PossibleNode = Node | Element | EventTarget | null;

export function tuiAssertIsHTMLElement(node?: PossibleNode): asserts node is HTMLElement {
    const document = (node as Node)?.ownerDocument;
    const defaultView = document?.defaultView as unknown as {HTMLElement: typeof Node};
    const isHTMLElement = node instanceof defaultView?.HTMLElement;

    tuiAssert.assert(isHTMLElement, 'Node is not an HTMLElement');
}
