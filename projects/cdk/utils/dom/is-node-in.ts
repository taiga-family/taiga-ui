import {tuiIsElement, tuiIsTextNode} from './element-checks';

/**
 * Checks if node is inside a specific selector
 *
 * @param node
 * @param selector
 * @return true if node is inside a particular selector
 */
export function tuiIsNodeIn(node: Node, selector: string): boolean {
    return tuiIsTextNode(node)
        ? !!node.parentElement?.closest(selector)
        : tuiIsElement(node) && !!node.closest(selector);
}
