import {Attrs, Node as NodeElement} from 'prosemirror-model';

export function tuiGetNestedNodes(node: NodeElement): Array<Array<Attrs | string>> {
    const nodes: Array<Array<Attrs | string>> = [];

    // @note: the content field is not array type
    node.content.forEach(child => {
        if (child instanceof NodeElement) {
            nodes.push([child.type.name, child.attrs]);
        }
    });

    return nodes;
}
