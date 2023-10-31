export function tuiRetargetedBoundaryCrossing(event: any): boolean {
    // firefox
    if (`explicitOriginalTarget` in event) {
        return event?.explicitOriginalTarget !== event.target;
    }

    // chrome
    if (`pointerId` in event) {
        return event.pointerId === -1;
    }

    // safari
    if (`detail` in event && `webkitForce` in event) {
        return event?.detail === 0;
    }

    return false;
}
