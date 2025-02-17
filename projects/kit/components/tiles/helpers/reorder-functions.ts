export type TuiReorderFunction = (
    order: Map<number, number>,
    currentIndex: number,
    newIndex: number,
) => Map<number, number>;

export const tuiTileSwap: TuiReorderFunction = (order, currentIndex, newIndex) => {
    if (!order.has(currentIndex) || !order.has(newIndex)) {
        return order;
    }

    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;

    const newOrder = new Map(order);

    newOrder.set(currentIndex, placement);
    newOrder.set(newIndex, dragged);

    return newOrder;
};

export const tuiTileShift: TuiReorderFunction = (order, currentIndex, newIndex) => {
    if (!order.has(currentIndex) || !order.has(newIndex)) {
        return order;
    }

    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;

    const reversedOrder = new Map(
        Array.from(order).map(([elemIndex, orderIndex]) => [orderIndex, elemIndex]),
    );

    const newOrder = new Map(order);

    const direction = (placement - dragged) / Math.abs(placement - dragged);

    if (direction > 0) {
        for (let i = placement; i > dragged; i--) {
            const tmp = reversedOrder.get(i) ?? i;

            newOrder.set(tmp, i - 1);
        }
    } else {
        for (let i = placement; i < dragged; i++) {
            const tmp = reversedOrder.get(i) ?? i;

            newOrder.set(tmp, i + 1);
        }
    }

    newOrder.set(currentIndex, placement);

    return newOrder;
};
