/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy } from '@angular/core';
/**
 * Interface used to register message elements and keep a count of how many registrations have
 * the same message and the reference to the message element used for the `aria-describedby`.
 */
export interface RegisteredMessage {
    /** The element containing the message. */
    messageElement: Element;
    /** The number of elements that reference this message element via `aria-describedby`. */
    referenceCount: number;
}
/** ID used for the body container where all messages are appended. */
export declare const MESSAGES_CONTAINER_ID = "cdk-describedby-message-container";
/** ID prefix used for each created message element. */
export declare const CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
/** Attribute given to each host element that is described by a message element. */
export declare const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
export declare class AriaDescriber implements OnDestroy {
    private _document;
    constructor(_document: any);
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    describe(hostElement: Element, message: string | HTMLElement): void;
    /** Removes the host element's aria-describedby reference to the message element. */
    removeDescription(hostElement: Element, message: string | HTMLElement): void;
    /** Unregisters all created message elements and removes the message container. */
    ngOnDestroy(): void;
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    private _createMessageElement;
    /** Assigns a unique ID to an element, if it doesn't have one already. */
    private _setMessageId;
    /** Deletes the message element from the global messages container. */
    private _deleteMessageElement;
    /** Creates the global container for all aria-describedby messages. */
    private _createMessagesContainer;
    /** Deletes the global messages container. */
    private _deleteMessagesContainer;
    /** Removes all cdk-describedby messages that are hosted through the element. */
    private _removeCdkDescribedByReferenceIds;
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    private _addMessageReference;
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    private _removeMessageReference;
    /** Returns true if the element has been described by the provided message ID. */
    private _isElementDescribedByMessage;
    /** Determines whether a message can be described on a particular element. */
    private _canBeDescribed;
    /** Checks whether a node is an Element node. */
    private _isElementNode;
}
