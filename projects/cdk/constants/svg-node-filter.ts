export const svgNodeFilter: Exclude<NodeFilter, (node: Node) => number> = {
    acceptNode(node: Node): number {
        return 'ownerSVGElement' in node
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
    },
};
