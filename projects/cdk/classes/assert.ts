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

export function tuiAssertIsElement(node?: PossibleNode): asserts node is Element {
    const defaultView = (node as Node)?.ownerDocument?.defaultView;
    const isElement =
        !!defaultView &&
        (node instanceof defaultView.Element || node instanceof defaultView.HTMLDocument);

    tuiAssert.assert(isElement, 'Node is not an Element');
}
