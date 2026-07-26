export const svgNodeFilter = {
    acceptNode(node: Node): number {
        return 'ownerSVGElement' in node
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
    },
};
