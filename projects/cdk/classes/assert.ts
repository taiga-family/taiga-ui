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

// TODO: remove `DefaultView` in v3.0
// TS 3.8 Property 'Element' does not exist on type 'Window'.
interface DefaultView {
    Element: typeof Node;
    HTMLElement: typeof Node;
    HTMLDocument: typeof Node;
}

// TODO: replace `HTMLElement` to `Element` in v3.0
// TS 3.8 Argument of type Argument of type 'TuiNativeFocusableElement | HTMLElement' is not assignable to parameter of type 'HTMLElement'.
export function tuiAssertIsHTMLElement(node?: PossibleNode): asserts node is HTMLElement {
    const defaultView = (node as Node)?.ownerDocument
        ?.defaultView as unknown as DefaultView;
    const isElement =
        !!defaultView &&
        (node instanceof defaultView.Element || node instanceof defaultView.HTMLDocument);

    tuiAssert.assert(isElement, 'Node is not an Element');
}
