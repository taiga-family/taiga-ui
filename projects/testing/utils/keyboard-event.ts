export function tuiCreateKeyboardEvent(
    key: string,
    eventType: string = `keydown`,
): KeyboardEvent {
    const event = new KeyboardEvent(eventType, {bubbles: true});

    delete (event as unknown as {target?: EventTarget}).target;
    Object.defineProperty(event, `type`, {value: eventType});

    delete (event as unknown as {key?: string}).key;
    Object.defineProperty(event, `key`, {value: key});

    return event;
}
