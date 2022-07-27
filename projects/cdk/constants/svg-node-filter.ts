// Filtering SVGElements for TreeWalker
// Filter must be a function in IE, other modern browsers are compliant to this format
export const svgNodeFilter: NodeFilter = ((node: Node) =>
    `ownerSVGElement` in node
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT) as any;
