import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

export type TuiReorderFunction = (
    order: Map<number, number>,
    currentIndex: number,
    newIndex: number,
) => Map<number, number>;

export const tuiTilesSwap: TuiReorderFunction = (order, currentIndex, newIndex) => {
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

export const tuiTilesShift: TuiReorderFunction = (order, currentIndex, newIndex) => {
    if (!order.has(currentIndex) || !order.has(newIndex)) {
        return order;
    }

    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;
    const newOrder = new Map(order);
    const flipped = new Map(Array.from(order).map(([a, b]) => [b, a]));

    if ((placement - dragged) / Math.abs(placement - dragged) > 0) {
        for (let i = placement; i > dragged; i--) {
            newOrder.set(flipped.get(i) ?? i, i - 1);
        }
    } else {
        for (let i = placement; i < dragged; i++) {
            newOrder.set(flipped.get(i) ?? i, i + 1);
        }
    }

    newOrder.set(currentIndex, placement);

    return newOrder;
};

export const TUI_TILES_REORDER = tuiCreateToken<TuiReorderFunction>(tuiTilesSwap);
