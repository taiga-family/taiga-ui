import { __assign, __read, __spread, __values } from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE, NoopAnimationPlayer, ɵAnimationGroupPlayer as AnimationGroupPlayer, ɵPRE_STYLE as PRE_STYLE } from '@angular/animations';
import { ElementInstructionMap } from '../dsl/element_instruction_map';
import { copyObj, ENTER_CLASSNAME, eraseStyles, LEAVE_CLASSNAME, NG_ANIMATING_CLASSNAME, NG_ANIMATING_SELECTOR, NG_TRIGGER_CLASSNAME, NG_TRIGGER_SELECTOR, setStyles } from '../util';
import { getOrSetAsInMap, listenOnPlayer, makeAnimationEvent, normalizeKeyframes, optimizeGroupPlayer } from './shared';
var QUEUED_CLASSNAME = 'ng-animate-queued';
var QUEUED_SELECTOR = '.ng-animate-queued';
var DISABLED_CLASSNAME = 'ng-animate-disabled';
var DISABLED_SELECTOR = '.ng-animate-disabled';
var STAR_CLASSNAME = 'ng-star-inserted';
var STAR_SELECTOR = '.ng-star-inserted';
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
    namespaceId: '',
    setForRemoval: false,
    setForMove: false,
    hasAnimation: false,
    removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
    namespaceId: '',
    setForMove: false,
    setForRemoval: false,
    hasAnimation: false,
    removedBeforeQueried: true
};
export var REMOVAL_FLAG = '__ng_removed';
var StateValue = /** @class */ (function () {
    function StateValue(input, namespaceId) {
        if (namespaceId === void 0) { namespaceId = ''; }
        this.namespaceId = namespaceId;
        var isObj = input && input.hasOwnProperty('value');
        var value = isObj ? input['value'] : input;
        this.value = normalizeTriggerValue(value);
        if (isObj) {
            var options = copyObj(input);
            delete options['value'];
            this.options = options;
        }
        else {
            this.options = {};
        }
        if (!this.options.params) {
            this.options.params = {};
        }
    }
    Object.defineProperty(StateValue.prototype, "params", {
        get: function () {
            return this.options.params;
        },
        enumerable: true,
        configurable: true
    });
    StateValue.prototype.absorbOptions = function (options) {
        var newParams = options.params;
        if (newParams) {
            var oldParams_1 = this.options.params;
            Object.keys(newParams).forEach(function (prop) {
                if (oldParams_1[prop] == null) {
                    oldParams_1[prop] = newParams[prop];
                }
            });
        }
    };
    return StateValue;
}());
export { StateValue };
export var VOID_VALUE = 'void';
export var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = /** @class */ (function () {
    function AnimationTransitionNamespace(id, hostElement, _engine) {
        this.id = id;
        this.hostElement = hostElement;
        this._engine = _engine;
        this.players = [];
        this._triggers = {};
        this._queue = [];
        this._elementListeners = new Map();
        this._hostClassName = 'ng-tns-' + id;
        addClass(hostElement, this._hostClassName);
    }
    AnimationTransitionNamespace.prototype.listen = function (element, name, phase, callback) {
        var _this = this;
        if (!this._triggers.hasOwnProperty(name)) {
            throw new Error("Unable to listen on the animation trigger event \"" + phase + "\" because the animation trigger \"" + name + "\" doesn't exist!");
        }
        if (phase == null || phase.length == 0) {
            throw new Error("Unable to listen on the animation trigger \"" + name + "\" because the provided event is undefined!");
        }
        if (!isTriggerEventValid(phase)) {
            throw new Error("The provided animation trigger event \"" + phase + "\" for the animation trigger \"" + name + "\" is not supported!");
        }
        var listeners = getOrSetAsInMap(this._elementListeners, element, []);
        var data = { name: name, phase: phase, callback: callback };
        listeners.push(data);
        var triggersWithStates = getOrSetAsInMap(this._engine.statesByElement, element, {});
        if (!triggersWithStates.hasOwnProperty(name)) {
            addClass(element, NG_TRIGGER_CLASSNAME);
            addClass(element, NG_TRIGGER_CLASSNAME + '-' + name);
            triggersWithStates[name] = DEFAULT_STATE_VALUE;
        }
        return function () {
            // the event listener is removed AFTER the flush has occurred such
            // that leave animations callbacks can fire (otherwise if the node
            // is removed in between then the listeners would be deregistered)
            _this._engine.afterFlush(function () {
                var index = listeners.indexOf(data);
                if (index >= 0) {
                    listeners.splice(index, 1);
                }
                if (!_this._triggers[name]) {
                    delete triggersWithStates[name];
                }
            });
        };
    };
    AnimationTransitionNamespace.prototype.register = function (name, ast) {
        if (this._triggers[name]) {
            // throw
            return false;
        }
        else {
            this._triggers[name] = ast;
            return true;
        }
    };
    AnimationTransitionNamespace.prototype._getTrigger = function (name) {
        var trigger = this._triggers[name];
        if (!trigger) {
            throw new Error("The provided animation trigger \"" + name + "\" has not been registered!");
        }
        return trigger;
    };
    AnimationTransitionNamespace.prototype.trigger = function (element, triggerName, value, defaultToFallback) {
        var _this = this;
        if (defaultToFallback === void 0) { defaultToFallback = true; }
        var trigger = this._getTrigger(triggerName);
        var player = new TransitionAnimationPlayer(this.id, triggerName, element);
        var triggersWithStates = this._engine.statesByElement.get(element);
        if (!triggersWithStates) {
            addClass(element, NG_TRIGGER_CLASSNAME);
            addClass(element, NG_TRIGGER_CLASSNAME + '-' + triggerName);
            this._engine.statesByElement.set(element, triggersWithStates = {});
        }
        var fromState = triggersWithStates[triggerName];
        var toState = new StateValue(value, this.id);
        var isObj = value && value.hasOwnProperty('value');
        if (!isObj && fromState) {
            toState.absorbOptions(fromState.options);
        }
        triggersWithStates[triggerName] = toState;
        if (!fromState) {
            fromState = DEFAULT_STATE_VALUE;
        }
        var isRemoval = toState.value === VOID_VALUE;
        // normally this isn't reached by here, however, if an object expression
        // is passed in then it may be a new object each time. Comparing the value
        // is important since that will stay the same despite there being a new object.
        // The removal arc here is special cased because the same element is triggered
        // twice in the event that it contains animations on the outer/inner portions
        // of the host container
        if (!isRemoval && fromState.value === toState.value) {
            // this means that despite the value not changing, some inner params
            // have changed which means that the animation final styles need to be applied
            if (!objEquals(fromState.params, toState.params)) {
                var errors = [];
                var fromStyles_1 = trigger.matchStyles(fromState.value, fromState.params, errors);
                var toStyles_1 = trigger.matchStyles(toState.value, toState.params, errors);
                if (errors.length) {
                    this._engine.reportError(errors);
                }
                else {
                    this._engine.afterFlush(function () {
                        eraseStyles(element, fromStyles_1);
                        setStyles(element, toStyles_1);
                    });
                }
            }
            return;
        }
        var playersOnElement = getOrSetAsInMap(this._engine.playersByElement, element, []);
        playersOnElement.forEach(function (player) {
            // only remove the player if it is queued on the EXACT same trigger/namespace
            // we only also deal with queued players here because if the animation has
            // started then we want to keep the player alive until the flush happens
            // (which is where the previousPlayers are passed into the new palyer)
            if (player.namespaceId == _this.id && player.triggerName == triggerName && player.queued) {
                player.destroy();
            }
        });
        var transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
        var isFallbackTransition = false;
        if (!transition) {
            if (!defaultToFallback)
                return;
            transition = trigger.fallbackTransition;
            isFallbackTransition = true;
        }
        this._engine.totalQueuedPlayers++;
        this._queue.push({ element: element, triggerName: triggerName, transition: transition, fromState: fromState, toState: toState, player: player, isFallbackTransition: isFallbackTransition });
        if (!isFallbackTransition) {
            addClass(element, QUEUED_CLASSNAME);
            player.onStart(function () {
                removeClass(element, QUEUED_CLASSNAME);
            });
        }
        player.onDone(function () {
            var index = _this.players.indexOf(player);
            if (index >= 0) {
                _this.players.splice(index, 1);
            }
            var players = _this._engine.playersByElement.get(element);
            if (players) {
                var index_1 = players.indexOf(player);
                if (index_1 >= 0) {
                    players.splice(index_1, 1);
                }
            }
        });
        this.players.push(player);
        playersOnElement.push(player);
        return player;
    };
    AnimationTransitionNamespace.prototype.deregister = function (name) {
        var _this = this;
        delete this._triggers[name];
        this._engine.statesByElement.forEach(function (stateMap, element) {
            delete stateMap[name];
        });
        this._elementListeners.forEach(function (listeners, element) {
            _this._elementListeners.set(element, listeners.filter(function (entry) {
                return entry.name != name;
            }));
        });
    };
    AnimationTransitionNamespace.prototype.clearElementCache = function (element) {
        this._engine.statesByElement.delete(element);
        this._elementListeners.delete(element);
        var elementPlayers = this._engine.playersByElement.get(element);
        if (elementPlayers) {
            elementPlayers.forEach(function (player) { return player.destroy(); });
            this._engine.playersByElement.delete(element);
        }
    };
    AnimationTransitionNamespace.prototype._signalRemovalForInnerTriggers = function (rootElement, context) {
        var _this = this;
        var elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
        // emulate a leave animation for all inner nodes within this node.
        // If there are no animations found for any of the nodes then clear the cache
        // for the element.
        elements.forEach(function (elm) {
            // this means that an inner remove() operation has already kicked off
            // the animation on this element...
            if (elm[REMOVAL_FLAG])
                return;
            var namespaces = _this._engine.fetchNamespacesByElement(elm);
            if (namespaces.size) {
                namespaces.forEach(function (ns) { return ns.triggerLeaveAnimation(elm, context, false, true); });
            }
            else {
                _this.clearElementCache(elm);
            }
        });
        // If the child elements were removed along with the parent, their animations might not
        // have completed. Clear all the elements from the cache so we don't end up with a memory leak.
        this._engine.afterFlushAnimationsDone(function () { return elements.forEach(function (elm) { return _this.clearElementCache(elm); }); });
    };
    AnimationTransitionNamespace.prototype.triggerLeaveAnimation = function (element, context, destroyAfterComplete, defaultToFallback) {
        var _this = this;
        var triggerStates = this._engine.statesByElement.get(element);
        if (triggerStates) {
            var players_1 = [];
            Object.keys(triggerStates).forEach(function (triggerName) {
                // this check is here in the event that an element is removed
                // twice (both on the host level and the component level)
                if (_this._triggers[triggerName]) {
                    var player = _this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
                    if (player) {
                        players_1.push(player);
                    }
                }
            });
            if (players_1.length) {
                this._engine.markElementAsRemoved(this.id, element, true, context);
                if (destroyAfterComplete) {
                    optimizeGroupPlayer(players_1).onDone(function () { return _this._engine.processLeaveNode(element); });
                }
                return true;
            }
        }
        return false;
    };
    AnimationTransitionNamespace.prototype.prepareLeaveAnimationListeners = function (element) {
        var _this = this;
        var listeners = this._elementListeners.get(element);
        if (listeners) {
            var visitedTriggers_1 = new Set();
            listeners.forEach(function (listener) {
                var triggerName = listener.name;
                if (visitedTriggers_1.has(triggerName))
                    return;
                visitedTriggers_1.add(triggerName);
                var trigger = _this._triggers[triggerName];
                var transition = trigger.fallbackTransition;
                var elementStates = _this._engine.statesByElement.get(element);
                var fromState = elementStates[triggerName] || DEFAULT_STATE_VALUE;
                var toState = new StateValue(VOID_VALUE);
                var player = new TransitionAnimationPlayer(_this.id, triggerName, element);
                _this._engine.totalQueuedPlayers++;
                _this._queue.push({
                    element: element,
                    triggerName: triggerName,
                    transition: transition,
                    fromState: fromState,
                    toState: toState,
                    player: player,
                    isFallbackTransition: true
                });
            });
        }
    };
    AnimationTransitionNamespace.prototype.removeNode = function (element, context) {
        var _this = this;
        var engine = this._engine;
        if (element.childElementCount) {
            this._signalRemovalForInnerTriggers(element, context);
        }
        // this means that a * => VOID animation was detected and kicked off
        if (this.triggerLeaveAnimation(element, context, true))
            return;
        // find the player that is animating and make sure that the
        // removal is delayed until that player has completed
        var containsPotentialParentTransition = false;
        if (engine.totalAnimations) {
            var currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
            // when this `if statement` does not continue forward it means that
            // a previous animation query has selected the current element and
            // is animating it. In this situation want to continue forwards and
            // allow the element to be queued up for animation later.
            if (currentPlayers && currentPlayers.length) {
                containsPotentialParentTransition = true;
            }
            else {
                var parent_1 = element;
                while (parent_1 = parent_1.parentNode) {
                    var triggers = engine.statesByElement.get(parent_1);
                    if (triggers) {
                        containsPotentialParentTransition = true;
                        break;
                    }
                }
            }
        }
        // at this stage we know that the element will either get removed
        // during flush or will be picked up by a parent query. Either way
        // we need to fire the listeners for this element when it DOES get
        // removed (once the query parent animation is done or after flush)
        this.prepareLeaveAnimationListeners(element);
        // whether or not a parent has an animation we need to delay the deferral of the leave
        // operation until we have more information (which we do after flush() has been called)
        if (containsPotentialParentTransition) {
            engine.markElementAsRemoved(this.id, element, false, context);
        }
        else {
            var removalFlag = element[REMOVAL_FLAG];
            if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
                // we do this after the flush has occurred such
                // that the callbacks can be fired
                engine.afterFlush(function () { return _this.clearElementCache(element); });
                engine.destroyInnerAnimations(element);
                engine._onRemovalComplete(element, context);
            }
        }
    };
    AnimationTransitionNamespace.prototype.insertNode = function (element, parent) {
        addClass(element, this._hostClassName);
    };
    AnimationTransitionNamespace.prototype.drainQueuedTransitions = function (microtaskId) {
        var _this = this;
        var instructions = [];
        this._queue.forEach(function (entry) {
            var player = entry.player;
            if (player.destroyed)
                return;
            var element = entry.element;
            var listeners = _this._elementListeners.get(element);
            if (listeners) {
                listeners.forEach(function (listener) {
                    if (listener.name == entry.triggerName) {
                        var baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
                        baseEvent['_data'] = microtaskId;
                        listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
                    }
                });
            }
            if (player.markedForDestroy) {
                _this._engine.afterFlush(function () {
                    // now we can destroy the element properly since the event listeners have
                    // been bound to the player
                    player.destroy();
                });
            }
            else {
                instructions.push(entry);
            }
        });
        this._queue = [];
        return instructions.sort(function (a, b) {
            // if depCount == 0 them move to front
            // otherwise if a contains b then move back
            var d0 = a.transition.ast.depCount;
            var d1 = b.transition.ast.depCount;
            if (d0 == 0 || d1 == 0) {
                return d0 - d1;
            }
            return _this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
        });
    };
    AnimationTransitionNamespace.prototype.destroy = function (context) {
        this.players.forEach(function (p) { return p.destroy(); });
        this._signalRemovalForInnerTriggers(this.hostElement, context);
    };
    AnimationTransitionNamespace.prototype.elementContainsData = function (element) {
        var containsData = false;
        if (this._elementListeners.has(element))
            containsData = true;
        containsData =
            (this._queue.find(function (entry) { return entry.element === element; }) ? true : false) || containsData;
        return containsData;
    };
    return AnimationTransitionNamespace;
}());
export { AnimationTransitionNamespace };
var TransitionAnimationEngine = /** @class */ (function () {
    function TransitionAnimationEngine(bodyNode, driver, _normalizer) {
        this.bodyNode = bodyNode;
        this.driver = driver;
        this._normalizer = _normalizer;
        this.players = [];
        this.newHostElements = new Map();
        this.playersByElement = new Map();
        this.playersByQueriedElement = new Map();
        this.statesByElement = new Map();
        this.disabledNodes = new Set();
        this.totalAnimations = 0;
        this.totalQueuedPlayers = 0;
        this._namespaceLookup = {};
        this._namespaceList = [];
        this._flushFns = [];
        this._whenQuietFns = [];
        this.namespacesByHostElement = new Map();
        this.collectedEnterElements = [];
        this.collectedLeaveElements = [];
        // this method is designed to be overridden by the code that uses this engine
        this.onRemovalComplete = function (element, context) { };
    }
    /** @internal */
    TransitionAnimationEngine.prototype._onRemovalComplete = function (element, context) {
        this.onRemovalComplete(element, context);
    };
    Object.defineProperty(TransitionAnimationEngine.prototype, "queuedPlayers", {
        get: function () {
            var players = [];
            this._namespaceList.forEach(function (ns) {
                ns.players.forEach(function (player) {
                    if (player.queued) {
                        players.push(player);
                    }
                });
            });
            return players;
        },
        enumerable: true,
        configurable: true
    });
    TransitionAnimationEngine.prototype.createNamespace = function (namespaceId, hostElement) {
        var ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
        if (hostElement.parentNode) {
            this._balanceNamespaceList(ns, hostElement);
        }
        else {
            // defer this later until flush during when the host element has
            // been inserted so that we know exactly where to place it in
            // the namespace list
            this.newHostElements.set(hostElement, ns);
            // given that this host element is apart of the animation code, it
            // may or may not be inserted by a parent node that is an of an
            // animation renderer type. If this happens then we can still have
            // access to this item when we query for :enter nodes. If the parent
            // is a renderer then the set data-structure will normalize the entry
            this.collectEnterElement(hostElement);
        }
        return this._namespaceLookup[namespaceId] = ns;
    };
    TransitionAnimationEngine.prototype._balanceNamespaceList = function (ns, hostElement) {
        var limit = this._namespaceList.length - 1;
        if (limit >= 0) {
            var found = false;
            for (var i = limit; i >= 0; i--) {
                var nextNamespace = this._namespaceList[i];
                if (this.driver.containsElement(nextNamespace.hostElement, hostElement)) {
                    this._namespaceList.splice(i + 1, 0, ns);
                    found = true;
                    break;
                }
            }
            if (!found) {
                this._namespaceList.splice(0, 0, ns);
            }
        }
        else {
            this._namespaceList.push(ns);
        }
        this.namespacesByHostElement.set(hostElement, ns);
        return ns;
    };
    TransitionAnimationEngine.prototype.register = function (namespaceId, hostElement) {
        var ns = this._namespaceLookup[namespaceId];
        if (!ns) {
            ns = this.createNamespace(namespaceId, hostElement);
        }
        return ns;
    };
    TransitionAnimationEngine.prototype.registerTrigger = function (namespaceId, name, trigger) {
        var ns = this._namespaceLookup[namespaceId];
        if (ns && ns.register(name, trigger)) {
            this.totalAnimations++;
        }
    };
    TransitionAnimationEngine.prototype.destroy = function (namespaceId, context) {
        var _this = this;
        if (!namespaceId)
            return;
        var ns = this._fetchNamespace(namespaceId);
        this.afterFlush(function () {
            _this.namespacesByHostElement.delete(ns.hostElement);
            delete _this._namespaceLookup[namespaceId];
            var index = _this._namespaceList.indexOf(ns);
            if (index >= 0) {
                _this._namespaceList.splice(index, 1);
            }
        });
        this.afterFlushAnimationsDone(function () { return ns.destroy(context); });
    };
    TransitionAnimationEngine.prototype._fetchNamespace = function (id) {
        return this._namespaceLookup[id];
    };
    TransitionAnimationEngine.prototype.fetchNamespacesByElement = function (element) {
        // normally there should only be one namespace per element, however
        // if @triggers are placed on both the component element and then
        // its host element (within the component code) then there will be
        // two namespaces returned. We use a set here to simply the dedupe
        // of namespaces incase there are multiple triggers both the elm and host
        var namespaces = new Set();
        var elementStates = this.statesByElement.get(element);
        if (elementStates) {
            var keys = Object.keys(elementStates);
            for (var i = 0; i < keys.length; i++) {
                var nsId = elementStates[keys[i]].namespaceId;
                if (nsId) {
                    var ns = this._fetchNamespace(nsId);
                    if (ns) {
                        namespaces.add(ns);
                    }
                }
            }
        }
        return namespaces;
    };
    TransitionAnimationEngine.prototype.trigger = function (namespaceId, element, name, value) {
        if (isElementNode(element)) {
            var ns = this._fetchNamespace(namespaceId);
            if (ns) {
                ns.trigger(element, name, value);
                return true;
            }
        }
        return false;
    };
    TransitionAnimationEngine.prototype.insertNode = function (namespaceId, element, parent, insertBefore) {
        if (!isElementNode(element))
            return;
        // special case for when an element is removed and reinserted (move operation)
        // when this occurs we do not want to use the element for deletion later
        var details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval) {
            details.setForRemoval = false;
            details.setForMove = true;
            var index = this.collectedLeaveElements.indexOf(element);
            if (index >= 0) {
                this.collectedLeaveElements.splice(index, 1);
            }
        }
        // in the event that the namespaceId is blank then the caller
        // code does not contain any animation code in it, but it is
        // just being called so that the node is marked as being inserted
        if (namespaceId) {
            var ns = this._fetchNamespace(namespaceId);
            // This if-statement is a workaround for router issue #21947.
            // The router sometimes hits a race condition where while a route
            // is being instantiated a new navigation arrives, triggering leave
            // animation of DOM that has not been fully initialized, until this
            // is resolved, we need to handle the scenario when DOM is not in a
            // consistent state during the animation.
            if (ns) {
                ns.insertNode(element, parent);
            }
        }
        // only *directives and host elements are inserted before
        if (insertBefore) {
            this.collectEnterElement(element);
        }
    };
    TransitionAnimationEngine.prototype.collectEnterElement = function (element) {
        this.collectedEnterElements.push(element);
    };
    TransitionAnimationEngine.prototype.markElementAsDisabled = function (element, value) {
        if (value) {
            if (!this.disabledNodes.has(element)) {
                this.disabledNodes.add(element);
                addClass(element, DISABLED_CLASSNAME);
            }
        }
        else if (this.disabledNodes.has(element)) {
            this.disabledNodes.delete(element);
            removeClass(element, DISABLED_CLASSNAME);
        }
    };
    TransitionAnimationEngine.prototype.removeNode = function (namespaceId, element, isHostElement, context) {
        if (isElementNode(element)) {
            var ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
            if (ns) {
                ns.removeNode(element, context);
            }
            else {
                this.markElementAsRemoved(namespaceId, element, false, context);
            }
            if (isHostElement) {
                var hostNS = this.namespacesByHostElement.get(element);
                if (hostNS && hostNS.id !== namespaceId) {
                    hostNS.removeNode(element, context);
                }
            }
        }
        else {
            this._onRemovalComplete(element, context);
        }
    };
    TransitionAnimationEngine.prototype.markElementAsRemoved = function (namespaceId, element, hasAnimation, context) {
        this.collectedLeaveElements.push(element);
        element[REMOVAL_FLAG] =
            { namespaceId: namespaceId, setForRemoval: context, hasAnimation: hasAnimation, removedBeforeQueried: false };
    };
    TransitionAnimationEngine.prototype.listen = function (namespaceId, element, name, phase, callback) {
        if (isElementNode(element)) {
            return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
        }
        return function () { };
    };
    TransitionAnimationEngine.prototype._buildInstruction = function (entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
        return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
    };
    TransitionAnimationEngine.prototype.destroyInnerAnimations = function (containerElement) {
        var _this = this;
        var elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach(function (element) { return _this.destroyActiveAnimationsForElement(element); });
        if (this.playersByQueriedElement.size == 0)
            return;
        elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
        elements.forEach(function (element) { return _this.finishActiveQueriedAnimationOnElement(element); });
    };
    TransitionAnimationEngine.prototype.destroyActiveAnimationsForElement = function (element) {
        var players = this.playersByElement.get(element);
        if (players) {
            players.forEach(function (player) {
                // special case for when an element is set for destruction, but hasn't started.
                // in this situation we want to delay the destruction until the flush occurs
                // so that any event listeners attached to the player are triggered.
                if (player.queued) {
                    player.markedForDestroy = true;
                }
                else {
                    player.destroy();
                }
            });
        }
    };
    TransitionAnimationEngine.prototype.finishActiveQueriedAnimationOnElement = function (element) {
        var players = this.playersByQueriedElement.get(element);
        if (players) {
            players.forEach(function (player) { return player.finish(); });
        }
    };
    TransitionAnimationEngine.prototype.whenRenderingDone = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.players.length) {
                return optimizeGroupPlayer(_this.players).onDone(function () { return resolve(); });
            }
            else {
                resolve();
            }
        });
    };
    TransitionAnimationEngine.prototype.processLeaveNode = function (element) {
        var _this = this;
        var details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval) {
            // this will prevent it from removing it twice
            element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
            if (details.namespaceId) {
                this.destroyInnerAnimations(element);
                var ns = this._fetchNamespace(details.namespaceId);
                if (ns) {
                    ns.clearElementCache(element);
                }
            }
            this._onRemovalComplete(element, details.setForRemoval);
        }
        if (this.driver.matchesElement(element, DISABLED_SELECTOR)) {
            this.markElementAsDisabled(element, false);
        }
        this.driver.query(element, DISABLED_SELECTOR, true).forEach(function (node) {
            _this.markElementAsDisabled(node, false);
        });
    };
    TransitionAnimationEngine.prototype.flush = function (microtaskId) {
        var _this = this;
        if (microtaskId === void 0) { microtaskId = -1; }
        var players = [];
        if (this.newHostElements.size) {
            this.newHostElements.forEach(function (ns, element) { return _this._balanceNamespaceList(ns, element); });
            this.newHostElements.clear();
        }
        if (this.totalAnimations && this.collectedEnterElements.length) {
            for (var i = 0; i < this.collectedEnterElements.length; i++) {
                var elm = this.collectedEnterElements[i];
                addClass(elm, STAR_CLASSNAME);
            }
        }
        if (this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
            var cleanupFns = [];
            try {
                players = this._flushAnimations(cleanupFns, microtaskId);
            }
            finally {
                for (var i = 0; i < cleanupFns.length; i++) {
                    cleanupFns[i]();
                }
            }
        }
        else {
            for (var i = 0; i < this.collectedLeaveElements.length; i++) {
                var element = this.collectedLeaveElements[i];
                this.processLeaveNode(element);
            }
        }
        this.totalQueuedPlayers = 0;
        this.collectedEnterElements.length = 0;
        this.collectedLeaveElements.length = 0;
        this._flushFns.forEach(function (fn) { return fn(); });
        this._flushFns = [];
        if (this._whenQuietFns.length) {
            // we move these over to a variable so that
            // if any new callbacks are registered in another
            // flush they do not populate the existing set
            var quietFns_1 = this._whenQuietFns;
            this._whenQuietFns = [];
            if (players.length) {
                optimizeGroupPlayer(players).onDone(function () {
                    quietFns_1.forEach(function (fn) { return fn(); });
                });
            }
            else {
                quietFns_1.forEach(function (fn) { return fn(); });
            }
        }
    };
    TransitionAnimationEngine.prototype.reportError = function (errors) {
        throw new Error("Unable to process animations due to the following failed trigger transitions\n " + errors.join('\n'));
    };
    TransitionAnimationEngine.prototype._flushAnimations = function (cleanupFns, microtaskId) {
        var _this = this;
        var subTimelines = new ElementInstructionMap();
        var skippedPlayers = [];
        var skippedPlayersMap = new Map();
        var queuedInstructions = [];
        var queriedElements = new Map();
        var allPreStyleElements = new Map();
        var allPostStyleElements = new Map();
        var disabledElementsSet = new Set();
        this.disabledNodes.forEach(function (node) {
            disabledElementsSet.add(node);
            var nodesThatAreDisabled = _this.driver.query(node, QUEUED_SELECTOR, true);
            for (var i_1 = 0; i_1 < nodesThatAreDisabled.length; i_1++) {
                disabledElementsSet.add(nodesThatAreDisabled[i_1]);
            }
        });
        var bodyNode = this.bodyNode;
        var allTriggerElements = Array.from(this.statesByElement.keys());
        var enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
        // this must occur before the instructions are built below such that
        // the :enter queries match the elements (since the timeline queries
        // are fired during instruction building).
        var enterNodeMapIds = new Map();
        var i = 0;
        enterNodeMap.forEach(function (nodes, root) {
            var className = ENTER_CLASSNAME + i++;
            enterNodeMapIds.set(root, className);
            nodes.forEach(function (node) { return addClass(node, className); });
        });
        var allLeaveNodes = [];
        var mergedLeaveNodes = new Set();
        var leaveNodesWithoutAnimations = new Set();
        for (var i_2 = 0; i_2 < this.collectedLeaveElements.length; i_2++) {
            var element = this.collectedLeaveElements[i_2];
            var details = element[REMOVAL_FLAG];
            if (details && details.setForRemoval) {
                allLeaveNodes.push(element);
                mergedLeaveNodes.add(element);
                if (details.hasAnimation) {
                    this.driver.query(element, STAR_SELECTOR, true).forEach(function (elm) { return mergedLeaveNodes.add(elm); });
                }
                else {
                    leaveNodesWithoutAnimations.add(element);
                }
            }
        }
        var leaveNodeMapIds = new Map();
        var leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
        leaveNodeMap.forEach(function (nodes, root) {
            var className = LEAVE_CLASSNAME + i++;
            leaveNodeMapIds.set(root, className);
            nodes.forEach(function (node) { return addClass(node, className); });
        });
        cleanupFns.push(function () {
            enterNodeMap.forEach(function (nodes, root) {
                var className = enterNodeMapIds.get(root);
                nodes.forEach(function (node) { return removeClass(node, className); });
            });
            leaveNodeMap.forEach(function (nodes, root) {
                var className = leaveNodeMapIds.get(root);
                nodes.forEach(function (node) { return removeClass(node, className); });
            });
            allLeaveNodes.forEach(function (element) {
                _this.processLeaveNode(element);
            });
        });
        var allPlayers = [];
        var erroneousTransitions = [];
        for (var i_3 = this._namespaceList.length - 1; i_3 >= 0; i_3--) {
            var ns = this._namespaceList[i_3];
            ns.drainQueuedTransitions(microtaskId).forEach(function (entry) {
                var player = entry.player;
                var element = entry.element;
                allPlayers.push(player);
                if (_this.collectedEnterElements.length) {
                    var details = element[REMOVAL_FLAG];
                    // move animations are currently not supported...
                    if (details && details.setForMove) {
                        player.destroy();
                        return;
                    }
                }
                var nodeIsOrphaned = !bodyNode || !_this.driver.containsElement(bodyNode, element);
                var leaveClassName = leaveNodeMapIds.get(element);
                var enterClassName = enterNodeMapIds.get(element);
                var instruction = _this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
                if (instruction.errors && instruction.errors.length) {
                    erroneousTransitions.push(instruction);
                    return;
                }
                // even though the element may not be apart of the DOM, it may
                // still be added at a later point (due to the mechanics of content
                // projection and/or dynamic component insertion) therefore it's
                // important we still style the element.
                if (nodeIsOrphaned) {
                    player.onStart(function () { return eraseStyles(element, instruction.fromStyles); });
                    player.onDestroy(function () { return setStyles(element, instruction.toStyles); });
                    skippedPlayers.push(player);
                    return;
                }
                // if a unmatched transition is queued to go then it SHOULD NOT render
                // an animation and cancel the previously running animations.
                if (entry.isFallbackTransition) {
                    player.onStart(function () { return eraseStyles(element, instruction.fromStyles); });
                    player.onDestroy(function () { return setStyles(element, instruction.toStyles); });
                    skippedPlayers.push(player);
                    return;
                }
                // this means that if a parent animation uses this animation as a sub trigger
                // then it will instruct the timeline builder to not add a player delay, but
                // instead stretch the first keyframe gap up until the animation starts. The
                // reason this is important is to prevent extra initialization styles from being
                // required by the user in the animation.
                instruction.timelines.forEach(function (tl) { return tl.stretchStartingKeyframe = true; });
                subTimelines.append(element, instruction.timelines);
                var tuple = { instruction: instruction, player: player, element: element };
                queuedInstructions.push(tuple);
                instruction.queriedElements.forEach(function (element) { return getOrSetAsInMap(queriedElements, element, []).push(player); });
                instruction.preStyleProps.forEach(function (stringMap, element) {
                    var props = Object.keys(stringMap);
                    if (props.length) {
                        var setVal_1 = allPreStyleElements.get(element);
                        if (!setVal_1) {
                            allPreStyleElements.set(element, setVal_1 = new Set());
                        }
                        props.forEach(function (prop) { return setVal_1.add(prop); });
                    }
                });
                instruction.postStyleProps.forEach(function (stringMap, element) {
                    var props = Object.keys(stringMap);
                    var setVal = allPostStyleElements.get(element);
                    if (!setVal) {
                        allPostStyleElements.set(element, setVal = new Set());
                    }
                    props.forEach(function (prop) { return setVal.add(prop); });
                });
            });
        }
        if (erroneousTransitions.length) {
            var errors_1 = [];
            erroneousTransitions.forEach(function (instruction) {
                errors_1.push("@" + instruction.triggerName + " has failed due to:\n");
                instruction.errors.forEach(function (error) { return errors_1.push("- " + error + "\n"); });
            });
            allPlayers.forEach(function (player) { return player.destroy(); });
            this.reportError(errors_1);
        }
        var allPreviousPlayersMap = new Map();
        // this map works to tell which element in the DOM tree is contained by
        // which animation. Further down below this map will get populated once
        // the players are built and in doing so it can efficiently figure out
        // if a sub player is skipped due to a parent player having priority.
        var animationElementMap = new Map();
        queuedInstructions.forEach(function (entry) {
            var element = entry.element;
            if (subTimelines.has(element)) {
                animationElementMap.set(element, element);
                _this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
            }
        });
        skippedPlayers.forEach(function (player) {
            var element = player.element;
            var previousPlayers = _this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
            previousPlayers.forEach(function (prevPlayer) {
                getOrSetAsInMap(allPreviousPlayersMap, element, []).push(prevPlayer);
                prevPlayer.destroy();
            });
        });
        // this is a special case for nodes that will be removed (either by)
        // having their own leave animations or by being queried in a container
        // that will be removed once a parent animation is complete. The idea
        // here is that * styles must be identical to ! styles because of
        // backwards compatibility (* is also filled in by default in many places).
        // Otherwise * styles will return an empty value or auto since the element
        // that is being getComputedStyle'd will not be visible (since * = destination)
        var replaceNodes = allLeaveNodes.filter(function (node) {
            return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
        });
        // POST STAGE: fill the * styles
        var postStylesMap = new Map();
        var allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
        allLeaveQueriedNodes.forEach(function (node) {
            if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
                replaceNodes.push(node);
            }
        });
        // PRE STAGE: fill the ! styles
        var preStylesMap = new Map();
        enterNodeMap.forEach(function (nodes, root) {
            cloakAndComputeStyles(preStylesMap, _this.driver, new Set(nodes), allPreStyleElements, PRE_STYLE);
        });
        replaceNodes.forEach(function (node) {
            var post = postStylesMap.get(node);
            var pre = preStylesMap.get(node);
            postStylesMap.set(node, __assign(__assign({}, post), pre));
        });
        var rootPlayers = [];
        var subPlayers = [];
        var NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
        queuedInstructions.forEach(function (entry) {
            var element = entry.element, player = entry.player, instruction = entry.instruction;
            // this means that it was never consumed by a parent animation which
            // means that it is independent and therefore should be set for animation
            if (subTimelines.has(element)) {
                if (disabledElementsSet.has(element)) {
                    player.onDestroy(function () { return setStyles(element, instruction.toStyles); });
                    player.disabled = true;
                    player.overrideTotalTime(instruction.totalTime);
                    skippedPlayers.push(player);
                    return;
                }
                // this will flow up the DOM and query the map to figure out
                // if a parent animation has priority over it. In the situation
                // that a parent is detected then it will cancel the loop. If
                // nothing is detected, or it takes a few hops to find a parent,
                // then it will fill in the missing nodes and signal them as having
                // a detected parent (or a NO_PARENT value via a special constant).
                var parentWithAnimation_1 = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
                if (animationElementMap.size > 1) {
                    var elm = element;
                    var parentsToAdd = [];
                    while (elm = elm.parentNode) {
                        var detectedParent = animationElementMap.get(elm);
                        if (detectedParent) {
                            parentWithAnimation_1 = detectedParent;
                            break;
                        }
                        parentsToAdd.push(elm);
                    }
                    parentsToAdd.forEach(function (parent) { return animationElementMap.set(parent, parentWithAnimation_1); });
                }
                var innerPlayer = _this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
                player.setRealPlayer(innerPlayer);
                if (parentWithAnimation_1 === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
                    rootPlayers.push(player);
                }
                else {
                    var parentPlayers = _this.playersByElement.get(parentWithAnimation_1);
                    if (parentPlayers && parentPlayers.length) {
                        player.parentPlayer = optimizeGroupPlayer(parentPlayers);
                    }
                    skippedPlayers.push(player);
                }
            }
            else {
                eraseStyles(element, instruction.fromStyles);
                player.onDestroy(function () { return setStyles(element, instruction.toStyles); });
                // there still might be a ancestor player animating this
                // element therefore we will still add it as a sub player
                // even if its animation may be disabled
                subPlayers.push(player);
                if (disabledElementsSet.has(element)) {
                    skippedPlayers.push(player);
                }
            }
        });
        // find all of the sub players' corresponding inner animation player
        subPlayers.forEach(function (player) {
            // even if any players are not found for a sub animation then it
            // will still complete itself after the next tick since it's Noop
            var playersForElement = skippedPlayersMap.get(player.element);
            if (playersForElement && playersForElement.length) {
                var innerPlayer = optimizeGroupPlayer(playersForElement);
                player.setRealPlayer(innerPlayer);
            }
        });
        // the reason why we don't actually play the animation is
        // because all that a skipped player is designed to do is to
        // fire the start/done transition callback events
        skippedPlayers.forEach(function (player) {
            if (player.parentPlayer) {
                player.syncPlayerEvents(player.parentPlayer);
            }
            else {
                player.destroy();
            }
        });
        // run through all of the queued removals and see if they
        // were picked up by a query. If not then perform the removal
        // operation right away unless a parent animation is ongoing.
        for (var i_4 = 0; i_4 < allLeaveNodes.length; i_4++) {
            var element = allLeaveNodes[i_4];
            var details = element[REMOVAL_FLAG];
            removeClass(element, LEAVE_CLASSNAME);
            // this means the element has a removal animation that is being
            // taken care of and therefore the inner elements will hang around
            // until that animation is over (or the parent queried animation)
            if (details && details.hasAnimation)
                continue;
            var players = [];
            // if this element is queried or if it contains queried children
            // then we want for the element not to be removed from the page
            // until the queried animations have finished
            if (queriedElements.size) {
                var queriedPlayerResults = queriedElements.get(element);
                if (queriedPlayerResults && queriedPlayerResults.length) {
                    players.push.apply(players, __spread(queriedPlayerResults));
                }
                var queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
                for (var j = 0; j < queriedInnerElements.length; j++) {
                    var queriedPlayers = queriedElements.get(queriedInnerElements[j]);
                    if (queriedPlayers && queriedPlayers.length) {
                        players.push.apply(players, __spread(queriedPlayers));
                    }
                }
            }
            var activePlayers = players.filter(function (p) { return !p.destroyed; });
            if (activePlayers.length) {
                removeNodesAfterAnimationDone(this, element, activePlayers);
            }
            else {
                this.processLeaveNode(element);
            }
        }
        // this is required so the cleanup method doesn't remove them
        allLeaveNodes.length = 0;
        rootPlayers.forEach(function (player) {
            _this.players.push(player);
            player.onDone(function () {
                player.destroy();
                var index = _this.players.indexOf(player);
                _this.players.splice(index, 1);
            });
            player.play();
        });
        return rootPlayers;
    };
    TransitionAnimationEngine.prototype.elementContainsData = function (namespaceId, element) {
        var containsData = false;
        var details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval)
            containsData = true;
        if (this.playersByElement.has(element))
            containsData = true;
        if (this.playersByQueriedElement.has(element))
            containsData = true;
        if (this.statesByElement.has(element))
            containsData = true;
        return this._fetchNamespace(namespaceId).elementContainsData(element) || containsData;
    };
    TransitionAnimationEngine.prototype.afterFlush = function (callback) {
        this._flushFns.push(callback);
    };
    TransitionAnimationEngine.prototype.afterFlushAnimationsDone = function (callback) {
        this._whenQuietFns.push(callback);
    };
    TransitionAnimationEngine.prototype._getPreviousPlayers = function (element, isQueriedElement, namespaceId, triggerName, toStateValue) {
        var players = [];
        if (isQueriedElement) {
            var queriedElementPlayers = this.playersByQueriedElement.get(element);
            if (queriedElementPlayers) {
                players = queriedElementPlayers;
            }
        }
        else {
            var elementPlayers = this.playersByElement.get(element);
            if (elementPlayers) {
                var isRemovalAnimation_1 = !toStateValue || toStateValue == VOID_VALUE;
                elementPlayers.forEach(function (player) {
                    if (player.queued)
                        return;
                    if (!isRemovalAnimation_1 && player.triggerName != triggerName)
                        return;
                    players.push(player);
                });
            }
        }
        if (namespaceId || triggerName) {
            players = players.filter(function (player) {
                if (namespaceId && namespaceId != player.namespaceId)
                    return false;
                if (triggerName && triggerName != player.triggerName)
                    return false;
                return true;
            });
        }
        return players;
    };
    TransitionAnimationEngine.prototype._beforeAnimationBuild = function (namespaceId, instruction, allPreviousPlayersMap) {
        var e_1, _a;
        var triggerName = instruction.triggerName;
        var rootElement = instruction.element;
        // when a removal animation occurs, ALL previous players are collected
        // and destroyed (even if they are outside of the current namespace)
        var targetNameSpaceId = instruction.isRemovalTransition ? undefined : namespaceId;
        var targetTriggerName = instruction.isRemovalTransition ? undefined : triggerName;
        var _loop_1 = function (timelineInstruction) {
            var element = timelineInstruction.element;
            var isQueriedElement = element !== rootElement;
            var players = getOrSetAsInMap(allPreviousPlayersMap, element, []);
            var previousPlayers = this_1._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
            previousPlayers.forEach(function (player) {
                var realPlayer = player.getRealPlayer();
                if (realPlayer.beforeDestroy) {
                    realPlayer.beforeDestroy();
                }
                player.destroy();
                players.push(player);
            });
        };
        var this_1 = this;
        try {
            for (var _b = __values(instruction.timelines), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timelineInstruction = _c.value;
                _loop_1(timelineInstruction);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // this needs to be done so that the PRE/POST styles can be
        // computed properly without interfering with the previous animation
        eraseStyles(rootElement, instruction.fromStyles);
    };
    TransitionAnimationEngine.prototype._buildAnimation = function (namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
        var _this = this;
        var triggerName = instruction.triggerName;
        var rootElement = instruction.element;
        // we first run this so that the previous animation player
        // data can be passed into the successive animation players
        var allQueriedPlayers = [];
        var allConsumedElements = new Set();
        var allSubElements = new Set();
        var allNewPlayers = instruction.timelines.map(function (timelineInstruction) {
            var element = timelineInstruction.element;
            allConsumedElements.add(element);
            // FIXME (matsko): make sure to-be-removed animations are removed properly
            var details = element[REMOVAL_FLAG];
            if (details && details.removedBeforeQueried)
                return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
            var isQueriedElement = element !== rootElement;
            var previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY)
                .map(function (p) { return p.getRealPlayer(); }))
                .filter(function (p) {
                // the `element` is not apart of the AnimationPlayer definition, but
                // Mock/WebAnimations
                // use the element within their implementation. This will be added in Angular5 to
                // AnimationPlayer
                var pp = p;
                return pp.element ? pp.element === element : false;
            });
            var preStyles = preStylesMap.get(element);
            var postStyles = postStylesMap.get(element);
            var keyframes = normalizeKeyframes(_this.driver, _this._normalizer, element, timelineInstruction.keyframes, preStyles, postStyles);
            var player = _this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
            // this means that this particular player belongs to a sub trigger. It is
            // important that we match this player up with the corresponding (@trigger.listener)
            if (timelineInstruction.subTimeline && skippedPlayersMap) {
                allSubElements.add(element);
            }
            if (isQueriedElement) {
                var wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
                wrappedPlayer.setRealPlayer(player);
                allQueriedPlayers.push(wrappedPlayer);
            }
            return player;
        });
        allQueriedPlayers.forEach(function (player) {
            getOrSetAsInMap(_this.playersByQueriedElement, player.element, []).push(player);
            player.onDone(function () { return deleteOrUnsetInMap(_this.playersByQueriedElement, player.element, player); });
        });
        allConsumedElements.forEach(function (element) { return addClass(element, NG_ANIMATING_CLASSNAME); });
        var player = optimizeGroupPlayer(allNewPlayers);
        player.onDestroy(function () {
            allConsumedElements.forEach(function (element) { return removeClass(element, NG_ANIMATING_CLASSNAME); });
            setStyles(rootElement, instruction.toStyles);
        });
        // this basically makes all of the callbacks for sub element animations
        // be dependent on the upper players for when they finish
        allSubElements.forEach(function (element) {
            getOrSetAsInMap(skippedPlayersMap, element, []).push(player);
        });
        return player;
    };
    TransitionAnimationEngine.prototype._buildPlayer = function (instruction, keyframes, previousPlayers) {
        if (keyframes.length > 0) {
            return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
        }
        // special case for when an empty transition|definition is provided
        // ... there is no point in rendering an empty animation
        return new NoopAnimationPlayer(instruction.duration, instruction.delay);
    };
    return TransitionAnimationEngine;
}());
export { TransitionAnimationEngine };
var TransitionAnimationPlayer = /** @class */ (function () {
    function TransitionAnimationPlayer(namespaceId, triggerName, element) {
        this.namespaceId = namespaceId;
        this.triggerName = triggerName;
        this.element = element;
        this._player = new NoopAnimationPlayer();
        this._containsRealPlayer = false;
        this._queuedCallbacks = {};
        this.destroyed = false;
        this.markedForDestroy = false;
        this.disabled = false;
        this.queued = true;
        this.totalTime = 0;
    }
    TransitionAnimationPlayer.prototype.setRealPlayer = function (player) {
        var _this = this;
        if (this._containsRealPlayer)
            return;
        this._player = player;
        Object.keys(this._queuedCallbacks).forEach(function (phase) {
            _this._queuedCallbacks[phase].forEach(function (callback) { return listenOnPlayer(player, phase, undefined, callback); });
        });
        this._queuedCallbacks = {};
        this._containsRealPlayer = true;
        this.overrideTotalTime(player.totalTime);
        this.queued = false;
    };
    TransitionAnimationPlayer.prototype.getRealPlayer = function () {
        return this._player;
    };
    TransitionAnimationPlayer.prototype.overrideTotalTime = function (totalTime) {
        this.totalTime = totalTime;
    };
    TransitionAnimationPlayer.prototype.syncPlayerEvents = function (player) {
        var _this = this;
        var p = this._player;
        if (p.triggerCallback) {
            player.onStart(function () { return p.triggerCallback('start'); });
        }
        player.onDone(function () { return _this.finish(); });
        player.onDestroy(function () { return _this.destroy(); });
    };
    TransitionAnimationPlayer.prototype._queueEvent = function (name, callback) {
        getOrSetAsInMap(this._queuedCallbacks, name, []).push(callback);
    };
    TransitionAnimationPlayer.prototype.onDone = function (fn) {
        if (this.queued) {
            this._queueEvent('done', fn);
        }
        this._player.onDone(fn);
    };
    TransitionAnimationPlayer.prototype.onStart = function (fn) {
        if (this.queued) {
            this._queueEvent('start', fn);
        }
        this._player.onStart(fn);
    };
    TransitionAnimationPlayer.prototype.onDestroy = function (fn) {
        if (this.queued) {
            this._queueEvent('destroy', fn);
        }
        this._player.onDestroy(fn);
    };
    TransitionAnimationPlayer.prototype.init = function () {
        this._player.init();
    };
    TransitionAnimationPlayer.prototype.hasStarted = function () {
        return this.queued ? false : this._player.hasStarted();
    };
    TransitionAnimationPlayer.prototype.play = function () {
        !this.queued && this._player.play();
    };
    TransitionAnimationPlayer.prototype.pause = function () {
        !this.queued && this._player.pause();
    };
    TransitionAnimationPlayer.prototype.restart = function () {
        !this.queued && this._player.restart();
    };
    TransitionAnimationPlayer.prototype.finish = function () {
        this._player.finish();
    };
    TransitionAnimationPlayer.prototype.destroy = function () {
        this.destroyed = true;
        this._player.destroy();
    };
    TransitionAnimationPlayer.prototype.reset = function () {
        !this.queued && this._player.reset();
    };
    TransitionAnimationPlayer.prototype.setPosition = function (p) {
        if (!this.queued) {
            this._player.setPosition(p);
        }
    };
    TransitionAnimationPlayer.prototype.getPosition = function () {
        return this.queued ? 0 : this._player.getPosition();
    };
    /** @internal */
    TransitionAnimationPlayer.prototype.triggerCallback = function (phaseName) {
        var p = this._player;
        if (p.triggerCallback) {
            p.triggerCallback(phaseName);
        }
    };
    return TransitionAnimationPlayer;
}());
export { TransitionAnimationPlayer };
function deleteOrUnsetInMap(map, key, value) {
    var currentValues;
    if (map instanceof Map) {
        currentValues = map.get(key);
        if (currentValues) {
            if (currentValues.length) {
                var index = currentValues.indexOf(value);
                currentValues.splice(index, 1);
            }
            if (currentValues.length == 0) {
                map.delete(key);
            }
        }
    }
    else {
        currentValues = map[key];
        if (currentValues) {
            if (currentValues.length) {
                var index = currentValues.indexOf(value);
                currentValues.splice(index, 1);
            }
            if (currentValues.length == 0) {
                delete map[key];
            }
        }
    }
    return currentValues;
}
function normalizeTriggerValue(value) {
    // we use `!= null` here because it's the most simple
    // way to test against a "falsy" value without mixing
    // in empty strings or a zero value. DO NOT OPTIMIZE.
    return value != null ? value : null;
}
function isElementNode(node) {
    return node && node['nodeType'] === 1;
}
function isTriggerEventValid(eventName) {
    return eventName == 'start' || eventName == 'done';
}
function cloakElement(element, value) {
    var oldValue = element.style.display;
    element.style.display = value != null ? value : 'none';
    return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
    var cloakVals = [];
    elements.forEach(function (element) { return cloakVals.push(cloakElement(element)); });
    var failedElements = [];
    elementPropsMap.forEach(function (props, element) {
        var styles = {};
        props.forEach(function (prop) {
            var value = styles[prop] = driver.computeStyle(element, prop, defaultStyle);
            // there is no easy way to detect this because a sub element could be removed
            // by a parent animation element being detached.
            if (!value || value.length == 0) {
                element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
                failedElements.push(element);
            }
        });
        valuesMap.set(element, styles);
    });
    // we use a index variable here since Set.forEach(a, i) does not return
    // an index value for the closure (but instead just the value)
    var i = 0;
    elements.forEach(function (element) { return cloakElement(element, cloakVals[i++]); });
    return failedElements;
}
/*
Since the Angular renderer code will return a collection of inserted
nodes in all areas of a DOM tree, it's up to this algorithm to figure
out which nodes are roots for each animation @trigger.

By placing each inserted node into a Set and traversing upwards, it
is possible to find the @trigger elements and well any direct *star
insertion nodes, if a @trigger root is found then the enter element
is placed into the Map[@trigger] spot.
 */
function buildRootMap(roots, nodes) {
    var rootMap = new Map();
    roots.forEach(function (root) { return rootMap.set(root, []); });
    if (nodes.length == 0)
        return rootMap;
    var NULL_NODE = 1;
    var nodeSet = new Set(nodes);
    var localRootMap = new Map();
    function getRoot(node) {
        if (!node)
            return NULL_NODE;
        var root = localRootMap.get(node);
        if (root)
            return root;
        var parent = node.parentNode;
        if (rootMap.has(parent)) { // ngIf inside @trigger
            root = parent;
        }
        else if (nodeSet.has(parent)) { // ngIf inside ngIf
            root = NULL_NODE;
        }
        else { // recurse upwards
            root = getRoot(parent);
        }
        localRootMap.set(node, root);
        return root;
    }
    nodes.forEach(function (node) {
        var root = getRoot(node);
        if (root !== NULL_NODE) {
            rootMap.get(root).push(node);
        }
    });
    return rootMap;
}
var CLASSES_CACHE_KEY = '$$classes';
function containsClass(element, className) {
    if (element.classList) {
        return element.classList.contains(className);
    }
    else {
        var classes = element[CLASSES_CACHE_KEY];
        return classes && classes[className];
    }
}
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        var classes = element[CLASSES_CACHE_KEY];
        if (!classes) {
            classes = element[CLASSES_CACHE_KEY] = {};
        }
        classes[className] = true;
    }
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        var classes = element[CLASSES_CACHE_KEY];
        if (classes) {
            delete classes[className];
        }
    }
}
function removeNodesAfterAnimationDone(engine, element, players) {
    optimizeGroupPlayer(players).onDone(function () { return engine.processLeaveNode(element); });
}
function flattenGroupPlayers(players) {
    var finalPlayers = [];
    _flattenGroupPlayersRecur(players, finalPlayers);
    return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        if (player instanceof AnimationGroupPlayer) {
            _flattenGroupPlayersRecur(player.players, finalPlayers);
        }
        else {
            finalPlayers.push(player);
        }
    }
}
function objEquals(a, b) {
    var k1 = Object.keys(a);
    var k2 = Object.keys(b);
    if (k1.length != k2.length)
        return false;
    for (var i = 0; i < k1.length; i++) {
        var prop = k1[i];
        if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
            return false;
    }
    return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
    var postEntry = allPostStyleElements.get(element);
    if (!postEntry)
        return false;
    var preEntry = allPreStyleElements.get(element);
    if (preEntry) {
        postEntry.forEach(function (data) { return preEntry.add(data); });
    }
    else {
        allPreStyleElements.set(element, postEntry);
    }
    allPostStyleElements.delete(element);
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbl9hbmltYXRpb25fZW5naW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvdHJhbnNpdGlvbl9hbmltYXRpb25fZW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQW9DLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsSUFBSSxvQkFBb0IsRUFBRSxVQUFVLElBQUksU0FBUyxFQUFhLE1BQU0scUJBQXFCLENBQUM7QUFNM0wsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFtQixlQUFlLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBR3JNLE9BQU8sRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRXRILElBQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUM7QUFDN0MsSUFBTSxlQUFlLEdBQUcsb0JBQW9CLENBQUM7QUFDN0MsSUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQztBQUNqRCxJQUFNLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDO0FBQ2pELElBQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBQzFDLElBQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDO0FBRTFDLElBQU0sa0JBQWtCLEdBQWdDLEVBQUUsQ0FBQztBQUMzRCxJQUFNLGtCQUFrQixHQUEwQjtJQUNoRCxXQUFXLEVBQUUsRUFBRTtJQUNmLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLFVB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QUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO0tBQ2xFO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxzQkFBc0IsQ0FDM0IsT0FBWSxFQUFFLG1CQUEwQyxFQUN4RCxvQkFBMkM7SUFDN0MsSUFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxTQUFTO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFN0IsSUFBSSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELElBQUksUUFBUSxFQUFFO1FBQ1osU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFFBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztLQUNoRDtTQUFNO1FBQ0wsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM3QztJQUVELG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvbk9wdGlvbnMsIEFuaW1hdGlvblBsYXllciwgQVVUT19TVFlMRSwgTm9vcEFuaW1hdGlvblBsYXllciwgybVBbmltYXRpb25Hcm91cFBsYXllciBhcyBBbmltYXRpb25Hcm91cFBsYXllciwgybVQUkVfU1RZTEUgYXMgUFJFX1NUWUxFLCDJtVN0eWxlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7QW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbn0gZnJvbSAnLi4vZHNsL2FuaW1hdGlvbl90aW1lbGluZV9pbnN0cnVjdGlvbic7XG5pbXBvcnQge0FuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5fSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX3RyYW5zaXRpb25fZmFjdG9yeSc7XG5pbXBvcnQge0FuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvbn0gZnJvbSAnLi4vZHNsL2FuaW1hdGlvbl90cmFuc2l0aW9uX2luc3RydWN0aW9uJztcbmltcG9ydCB7QW5pbWF0aW9uVHJpZ2dlcn0gZnJvbSAnLi4vZHNsL2FuaW1hdGlvbl90cmlnZ2VyJztcbmltcG9ydCB7RWxlbWVudEluc3RydWN0aW9uTWFwfSBmcm9tICcuLi9kc2wvZWxlbWVudF9pbnN0cnVjdGlvbl9tYXAnO1xuaW1wb3J0IHtBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJy4uL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyJztcbmltcG9ydCB7Y29weU9iaiwgRU5URVJfQ0xBU1NOQU1FLCBlcmFzZVN0eWxlcywgaXRlcmF0b3JUb0FycmF5LCBMRUFWRV9DTEFTU05BTUUsIE5HX0FOSU1BVElOR19DTEFTU05BTUUsIE5HX0FOSU1BVElOR19TRUxFQ1RPUiwgTkdfVFJJR0dFUl9DTEFTU05BTUUsIE5HX1RSSUdHRVJfU0VMRUNUT1IsIHNldFN0eWxlc30gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyfSBmcm9tICcuL2FuaW1hdGlvbl9kcml2ZXInO1xuaW1wb3J0IHtnZXRPclNldEFzSW5NYXAsIGxpc3Rlbk9uUGxheWVyLCBtYWtlQW5pbWF0aW9uRXZlbnQsIG5vcm1hbGl6ZUtleWZyYW1lcywgb3B0aW1pemVHcm91cFBsYXllcn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5jb25zdCBRVUVVRURfQ0xBU1NOQU1FID0gJ25nLWFuaW1hdGUtcXVldWVkJztcbmNvbnN0IFFVRVVFRF9TRUxFQ1RPUiA9ICcubmctYW5pbWF0ZS1xdWV1ZWQnO1xuY29uc3QgRElTQUJMRURfQ0xBU1NOQU1FID0gJ25nLWFuaW1hdGUtZGlzYWJsZWQnO1xuY29uc3QgRElTQUJMRURfU0VMRUNUT1IgPSAnLm5nLWFuaW1hdGUtZGlzYWJsZWQnO1xuY29uc3QgU1RBUl9DTEFTU05BTUUgPSAnbmctc3Rhci1pbnNlcnRlZCc7XG5jb25zdCBTVEFSX1NFTEVDVE9SID0gJy5uZy1zdGFyLWluc2VydGVkJztcblxuY29uc3QgRU1QVFlfUExBWUVSX0FSUkFZOiBUcmFuc2l0aW9uQW5pbWF0aW9uUGxheWVyW10gPSBbXTtcbmNvbnN0IE5VTExfUkVNT1ZBTF9TVEFURTogRWxlbWVudEFuaW1hdGlvblN0YXRlID0ge1xuICBuYW1lc3BhY2VJZDogJycsXG4gIHNldEZvclJlbW92YWw6IGZhbHNlLFxuICBzZXRGb3JNb3ZlOiBmYWxzZSxcbiAgaGFzQW5pbWF0aW9uOiBmYWxzZSxcbiAgcmVtb3ZlZEJlZm9yZVF1ZXJpZWQ6IGZhbHNlXG59O1xuY29uc3QgTlVMTF9SRU1PVkVEX1FVRVJJRURfU1RBVEU6IEVsZW1lbnRBbmltYXRpb25TdGF0ZSA9IHtcbiAgbmFtZXNwYWNlSWQ6ICcnLFxuICBzZXRGb3JNb3ZlOiBmYWxzZSxcbiAgc2V0Rm9yUmVtb3ZhbDogZmFsc2UsXG4gIGhhc0FuaW1hdGlvbjogZmFsc2UsXG4gIHJlbW92ZWRCZWZvcmVRdWVyaWVkOiB0cnVlXG59O1xuXG5pbnRlcmZhY2UgVHJpZ2dlckxpc3RlbmVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwaGFzZTogc3RyaW5nO1xuICBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWV1ZUluc3RydWN0aW9uIHtcbiAgZWxlbWVudDogYW55O1xuICB0cmlnZ2VyTmFtZTogc3RyaW5nO1xuICBmcm9tU3RhdGU6IFN0YXRlVmFsdWU7XG4gIHRvU3RhdGU6IFN0YXRlVmFsdWU7XG4gIHRyYW5zaXRpb246IEFuaW1hdGlvblRyYW5zaXRpb25GYWN0b3J5O1xuICBwbGF5ZXI6IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXI7XG4gIGlzRmFsbGJhY2tUcmFuc2l0aW9uOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUkVNT1ZBTF9GTEFHID0gJ19fbmdfcmVtb3ZlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudEFuaW1hdGlvblN0YXRlIHtcbiAgc2V0Rm9yUmVtb3ZhbDogYm9vbGVhbjtcbiAgc2V0Rm9yTW92ZTogYm9vbGVhbjtcbiAgaGFzQW5pbWF0aW9uOiBib29sZWFuO1xuICBuYW1lc3BhY2VJZDogc3RyaW5nO1xuICByZW1vdmVkQmVmb3JlUXVlcmllZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRlVmFsdWUge1xuICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgcHVibGljIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnM7XG5cbiAgZ2V0IHBhcmFtcygpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wYXJhbXMgYXMge1trZXk6IHN0cmluZ106IGFueX07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpbnB1dDogYW55LCBwdWJsaWMgbmFtZXNwYWNlSWQ6IHN0cmluZyA9ICcnKSB7XG4gICAgY29uc3QgaXNPYmogPSBpbnB1dCAmJiBpbnB1dC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKTtcbiAgICBjb25zdCB2YWx1ZSA9IGlzT2JqID8gaW5wdXRbJ3ZhbHVlJ10gOiBpbnB1dDtcbiAgICB0aGlzLnZhbHVlID0gbm9ybWFsaXplVHJpZ2dlclZhbHVlKHZhbHVlKTtcbiAgICBpZiAoaXNPYmopIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb3B5T2JqKGlucHV0IGFzIGFueSk7XG4gICAgICBkZWxldGUgb3B0aW9uc1sndmFsdWUnXTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgYXMgQW5pbWF0aW9uT3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLnBhcmFtcykge1xuICAgICAgdGhpcy5vcHRpb25zLnBhcmFtcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIGFic29yYk9wdGlvbnMob3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucykge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IG9wdGlvbnMucGFyYW1zO1xuICAgIGlmIChuZXdQYXJhbXMpIHtcbiAgICAgIGNvbnN0IG9sZFBhcmFtcyA9IHRoaXMub3B0aW9ucy5wYXJhbXMhO1xuICAgICAgT2JqZWN0LmtleXMobmV3UGFyYW1zKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBpZiAob2xkUGFyYW1zW3Byb3BdID09IG51bGwpIHtcbiAgICAgICAgICBvbGRQYXJhbXNbcHJvcF0gPSBuZXdQYXJhbXNbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgVk9JRF9WQUxVRSA9ICd2b2lkJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NUQVRFX1ZBTFVFID0gbmV3IFN0YXRlVmFsdWUoVk9JRF9WQUxVRSk7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25UcmFuc2l0aW9uTmFtZXNwYWNlIHtcbiAgcHVibGljIHBsYXllcnM6IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgX3RyaWdnZXJzOiB7W3RyaWdnZXJOYW1lOiBzdHJpbmddOiBBbmltYXRpb25UcmlnZ2VyfSA9IHt9O1xuICBwcml2YXRlIF9xdWV1ZTogUXVldWVJbnN0cnVjdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfZWxlbWVudExpc3RlbmVycyA9IG5ldyBNYXA8YW55LCBUcmlnZ2VyTGlzdGVuZXJbXT4oKTtcblxuICBwcml2YXRlIF9ob3N0Q2xhc3NOYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIGhvc3RFbGVtZW50OiBhbnksIHByaXZhdGUgX2VuZ2luZTogVHJhbnNpdGlvbkFuaW1hdGlvbkVuZ2luZSkge1xuICAgIHRoaXMuX2hvc3RDbGFzc05hbWUgPSAnbmctdG5zLScgKyBpZDtcbiAgICBhZGRDbGFzcyhob3N0RWxlbWVudCwgdGhpcy5faG9zdENsYXNzTmFtZSk7XG4gIH1cblxuICBsaXN0ZW4oZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHBoYXNlOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gYm9vbGVhbik6ICgpID0+IGFueSB7XG4gICAgaWYgKCF0aGlzLl90cmlnZ2Vycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbGlzdGVuIG9uIHRoZSBhbmltYXRpb24gdHJpZ2dlciBldmVudCBcIiR7XG4gICAgICAgICAgcGhhc2V9XCIgYmVjYXVzZSB0aGUgYW5pbWF0aW9uIHRyaWdnZXIgXCIke25hbWV9XCIgZG9lc25cXCd0IGV4aXN0IWApO1xuICAgIH1cblxuICAgIGlmIChwaGFzZSA9PSBudWxsIHx8IHBoYXNlLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBsaXN0ZW4gb24gdGhlIGFuaW1hdGlvbiB0cmlnZ2VyIFwiJHtcbiAgICAgICAgICBuYW1lfVwiIGJlY2F1c2UgdGhlIHByb3ZpZGVkIGV2ZW50IGlzIHVuZGVmaW5lZCFgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJpZ2dlckV2ZW50VmFsaWQocGhhc2UpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBhbmltYXRpb24gdHJpZ2dlciBldmVudCBcIiR7cGhhc2V9XCIgZm9yIHRoZSBhbmltYXRpb24gdHJpZ2dlciBcIiR7XG4gICAgICAgICAgbmFtZX1cIiBpcyBub3Qgc3VwcG9ydGVkIWApO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldE9yU2V0QXNJbk1hcCh0aGlzLl9lbGVtZW50TGlzdGVuZXJzLCBlbGVtZW50LCBbXSk7XG4gICAgY29uc3QgZGF0YSA9IHtuYW1lLCBwaGFzZSwgY2FsbGJhY2t9O1xuICAgIGxpc3RlbmVycy5wdXNoKGRhdGEpO1xuXG4gICAgY29uc3QgdHJpZ2dlcnNXaXRoU3RhdGVzID0gZ2V0T3JTZXRBc0luTWFwKHRoaXMuX2VuZ2luZS5zdGF0ZXNCeUVsZW1lbnQsIGVsZW1lbnQsIHt9KTtcbiAgICBpZiAoIXRyaWdnZXJzV2l0aFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgTkdfVFJJR0dFUl9DTEFTU05BTUUpO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgTkdfVFJJR0dFUl9DTEFTU05BTUUgKyAnLScgKyBuYW1lKTtcbiAgICAgIHRyaWdnZXJzV2l0aFN0YXRlc1tuYW1lXSA9IERFRkFVTFRfU1RBVEVfVkFMVUU7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIHRoZSBldmVudCBsaXN0ZW5lciBpcyByZW1vdmVkIEFGVEVSIHRoZSBmbHVzaCBoYXMgb2NjdXJyZWQgc3VjaFxuICAgICAgLy8gdGhhdCBsZWF2ZSBhbmltYXRpb25zIGNhbGxiYWNrcyBjYW4gZmlyZSAob3RoZXJ3aXNlIGlmIHRoZSBub2RlXG4gICAgICAvLyBpcyByZW1vdmVkIGluIGJldHdlZW4gdGhlbiB0aGUgbGlzdGVuZXJzIHdvdWxkIGJlIGRlcmVnaXN0ZXJlZClcbiAgICAgIHRoaXMuX2VuZ2luZS5hZnRlckZsdXNoKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihkYXRhKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fdHJpZ2dlcnNbbmFtZV0pIHtcbiAgICAgICAgICBkZWxldGUgdHJpZ2dlcnNXaXRoU3RhdGVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBhc3Q6IEFuaW1hdGlvblRyaWdnZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlcnNbbmFtZV0pIHtcbiAgICAgIC8vIHRocm93XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJzW25hbWVdID0gYXN0O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHJpZ2dlcihuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlcnNbbmFtZV07XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBhbmltYXRpb24gdHJpZ2dlciBcIiR7bmFtZX1cIiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCFgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyaWdnZXI7XG4gIH1cblxuICB0cmlnZ2VyKGVsZW1lbnQ6IGFueSwgdHJpZ2dlck5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZGVmYXVsdFRvRmFsbGJhY2s6IGJvb2xlYW4gPSB0cnVlKTpcbiAgICAgIFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJ8dW5kZWZpbmVkIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fZ2V0VHJpZ2dlcih0cmlnZ2VyTmFtZSk7XG4gICAgY29uc3QgcGxheWVyID0gbmV3IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXIodGhpcy5pZCwgdHJpZ2dlck5hbWUsIGVsZW1lbnQpO1xuXG4gICAgbGV0IHRyaWdnZXJzV2l0aFN0YXRlcyA9IHRoaXMuX2VuZ2luZS5zdGF0ZXNCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgIGlmICghdHJpZ2dlcnNXaXRoU3RhdGVzKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBOR19UUklHR0VSX0NMQVNTTkFNRSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBOR19UUklHR0VSX0NMQVNTTkFNRSArICctJyArIHRyaWdnZXJOYW1lKTtcbiAgICAgIHRoaXMuX2VuZ2luZS5zdGF0ZXNCeUVsZW1lbnQuc2V0KGVsZW1lbnQsIHRyaWdnZXJzV2l0aFN0YXRlcyA9IHt9KTtcbiAgICB9XG5cbiAgICBsZXQgZnJvbVN0YXRlID0gdHJpZ2dlcnNXaXRoU3RhdGVzW3RyaWdnZXJOYW1lXTtcbiAgICBjb25zdCB0b1N0YXRlID0gbmV3IFN0YXRlVmFsdWUodmFsdWUsIHRoaXMuaWQpO1xuXG4gICAgY29uc3QgaXNPYmogPSB2YWx1ZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKTtcbiAgICBpZiAoIWlzT2JqICYmIGZyb21TdGF0ZSkge1xuICAgICAgdG9TdGF0ZS5hYnNvcmJPcHRpb25zKGZyb21TdGF0ZS5vcHRpb25zKTtcbiAgICB9XG5cbiAgICB0cmlnZ2Vyc1dpdGhTdGF0ZXNbdHJpZ2dlck5hbWVdID0gdG9TdGF0ZTtcblxuICAgIGlmICghZnJvbVN0YXRlKSB7XG4gICAgICBmcm9tU3RhdGUgPSBERUZBVUxUX1NUQVRFX1ZBTFVFO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUmVtb3ZhbCA9IHRvU3RhdGUudmFsdWUgPT09IFZPSURfVkFMVUU7XG5cbiAgICAvLyBub3JtYWxseSB0aGlzIGlzbid0IHJlYWNoZWQgYnkgaGVyZSwgaG93ZXZlciwgaWYgYW4gb2JqZWN0IGV4cHJlc3Npb25cbiAgICAvLyBpcyBwYXNzZWQgaW4gdGhlbiBpdCBtYXkgYmUgYSBuZXcgb2JqZWN0IGVhY2ggdGltZS4gQ29tcGFyaW5nIHRoZSB2YWx1ZVxuICAgIC8vIGlzIGltcG9ydGFudCBzaW5jZSB0aGF0IHdpbGwgc3RheSB0aGUgc2FtZSBkZXNwaXRlIHRoZXJlIGJlaW5nIGEgbmV3IG9iamVjdC5cbiAgICAvLyBUaGUgcmVtb3ZhbCBhcmMgaGVyZSBpcyBzcGVjaWFsIGNhc2VkIGJlY2F1c2UgdGhlIHNhbWUgZWxlbWVudCBpcyB0cmlnZ2VyZWRcbiAgICAvLyB0d2ljZSBpbiB0aGUgZXZlbnQgdGhhdCBpdCBjb250YWlucyBhbmltYXRpb25zIG9uIHRoZSBvdXRlci9pbm5lciBwb3J0aW9uc1xuICAgIC8vIG9mIHRoZSBob3N0IGNvbnRhaW5lclxuICAgIGlmICghaXNSZW1vdmFsICYmIGZyb21TdGF0ZS52YWx1ZSA9PT0gdG9TdGF0ZS52YWx1ZSkge1xuICAgICAgLy8gdGhpcyBtZWFucyB0aGF0IGRlc3BpdGUgdGhlIHZhbHVlIG5vdCBjaGFuZ2luZywgc29tZSBpbm5lciBwYXJhbXNcbiAgICAgIC8vIGhhdmUgY2hhbmdlZCB3aGljaCBtZWFucyB0aGF0IHRoZSBhbmltYXRpb24gZmluYWwgc3R5bGVzIG5lZWQgdG8gYmUgYXBwbGllZFxuICAgICAgaWYgKCFvYmpFcXVhbHMoZnJvbVN0YXRlLnBhcmFtcywgdG9TdGF0ZS5wYXJhbXMpKSB7XG4gICAgICAgIGNvbnN0IGVycm9yczogYW55W10gPSBbXTtcbiAgICAgICAgY29uc3QgZnJvbVN0eWxlcyA9IHRyaWdnZXIubWF0Y2hTdHlsZXMoZnJvbVN0YXRlLnZhbHVlLCBmcm9tU3RhdGUucGFyYW1zLCBlcnJvcnMpO1xuICAgICAgICBjb25zdCB0b1N0eWxlcyA9IHRyaWdnZXIubWF0Y2hTdHlsZXModG9TdGF0ZS52YWx1ZSwgdG9TdGF0ZS5wYXJhbXMsIGVycm9ycyk7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fZW5naW5lLnJlcG9ydEVycm9yKGVycm9ycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZW5naW5lLmFmdGVyRmx1c2goKCkgPT4ge1xuICAgICAgICAgICAgZXJhc2VTdHlsZXMoZWxlbWVudCwgZnJvbVN0eWxlcyk7XG4gICAgICAgICAgICBzZXRTdHlsZXMoZWxlbWVudCwgdG9TdHlsZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyc09uRWxlbWVudDogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdID1cbiAgICAgICAgZ2V0T3JTZXRBc0luTWFwKHRoaXMuX2VuZ2luZS5wbGF5ZXJzQnlFbGVtZW50LCBlbGVtZW50LCBbXSk7XG4gICAgcGxheWVyc09uRWxlbWVudC5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAvLyBvbmx5IHJlbW92ZSB0aGUgcGxheWVyIGlmIGl0IGlzIHF1ZXVlZCBvbiB0aGUgRVhBQ1Qgc2FtZSB0cmlnZ2VyL25hbWVzcGFjZVxuICAgICAgLy8gd2Ugb25seSBhbHNvIGRlYWwgd2l0aCBxdWV1ZWQgcGxheWVycyBoZXJlIGJlY2F1c2UgaWYgdGhlIGFuaW1hdGlvbiBoYXNcbiAgICAgIC8vIHN0YXJ0ZWQgdGhlbiB3ZSB3YW50IHRvIGtlZXAgdGhlIHBsYXllciBhbGl2ZSB1bnRpbCB0aGUgZmx1c2ggaGFwcGVuc1xuICAgICAgLy8gKHdoaWNoIGlzIHdoZXJlIHRoZSBwcmV2aW91c1BsYXllcnMgYXJlIHBhc3NlZCBpbnRvIHRoZSBuZXcgcGFseWVyKVxuICAgICAgaWYgKHBsYXllci5uYW1lc3BhY2VJZCA9PSB0aGlzLmlkICYmIHBsYXllci50cmlnZ2VyTmFtZSA9PSB0cmlnZ2VyTmFtZSAmJiBwbGF5ZXIucXVldWVkKSB7XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgdHJhbnNpdGlvbiA9XG4gICAgICAgIHRyaWdnZXIubWF0Y2hUcmFuc2l0aW9uKGZyb21TdGF0ZS52YWx1ZSwgdG9TdGF0ZS52YWx1ZSwgZWxlbWVudCwgdG9TdGF0ZS5wYXJhbXMpO1xuICAgIGxldCBpc0ZhbGxiYWNrVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIGlmICghdHJhbnNpdGlvbikge1xuICAgICAgaWYgKCFkZWZhdWx0VG9GYWxsYmFjaykgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbiA9IHRyaWdnZXIuZmFsbGJhY2tUcmFuc2l0aW9uO1xuICAgICAgaXNGYWxsYmFja1RyYW5zaXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX2VuZ2luZS50b3RhbFF1ZXVlZFBsYXllcnMrKztcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKFxuICAgICAgICB7ZWxlbWVudCwgdHJpZ2dlck5hbWUsIHRyYW5zaXRpb24sIGZyb21TdGF0ZSwgdG9TdGF0ZSwgcGxheWVyLCBpc0ZhbGxiYWNrVHJhbnNpdGlvbn0pO1xuXG4gICAgaWYgKCFpc0ZhbGxiYWNrVHJhbnNpdGlvbikge1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgUVVFVUVEX0NMQVNTTkFNRSk7XG4gICAgICBwbGF5ZXIub25TdGFydCgoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIFFVRVVFRF9DTEFTU05BTUUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZihwbGF5ZXIpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLl9lbmdpbmUucGxheWVyc0J5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICBpZiAocGxheWVycykge1xuICAgICAgICBsZXQgaW5kZXggPSBwbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBwbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgcGxheWVyc09uRWxlbWVudC5wdXNoKHBsYXllcik7XG5cbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG5cbiAgZGVyZWdpc3RlcihuYW1lOiBzdHJpbmcpIHtcbiAgICBkZWxldGUgdGhpcy5fdHJpZ2dlcnNbbmFtZV07XG5cbiAgICB0aGlzLl9lbmdpbmUuc3RhdGVzQnlFbGVtZW50LmZvckVhY2goKHN0YXRlTWFwLCBlbGVtZW50KSA9PiB7XG4gICAgICBkZWxldGUgc3RhdGVNYXBbbmFtZV07XG4gICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVycywgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudExpc3RlbmVycy5zZXQoZWxlbWVudCwgbGlzdGVuZXJzLmZpbHRlcihlbnRyeSA9PiB7XG4gICAgICAgIHJldHVybiBlbnRyeS5uYW1lICE9IG5hbWU7XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckVsZW1lbnRDYWNoZShlbGVtZW50OiBhbnkpIHtcbiAgICB0aGlzLl9lbmdpbmUuc3RhdGVzQnlFbGVtZW50LmRlbGV0ZShlbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50TGlzdGVuZXJzLmRlbGV0ZShlbGVtZW50KTtcbiAgICBjb25zdCBlbGVtZW50UGxheWVycyA9IHRoaXMuX2VuZ2luZS5wbGF5ZXJzQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICBpZiAoZWxlbWVudFBsYXllcnMpIHtcbiAgICAgIGVsZW1lbnRQbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5kZXN0cm95KCkpO1xuICAgICAgdGhpcy5fZW5naW5lLnBsYXllcnNCeUVsZW1lbnQuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NpZ25hbFJlbW92YWxGb3JJbm5lclRyaWdnZXJzKHJvb3RFbGVtZW50OiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fZW5naW5lLmRyaXZlci5xdWVyeShyb290RWxlbWVudCwgTkdfVFJJR0dFUl9TRUxFQ1RPUiwgdHJ1ZSk7XG5cbiAgICAvLyBlbXVsYXRlIGEgbGVhdmUgYW5pbWF0aW9uIGZvciBhbGwgaW5uZXIgbm9kZXMgd2l0aGluIHRoaXMgbm9kZS5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gYW5pbWF0aW9ucyBmb3VuZCBmb3IgYW55IG9mIHRoZSBub2RlcyB0aGVuIGNsZWFyIHRoZSBjYWNoZVxuICAgIC8vIGZvciB0aGUgZWxlbWVudC5cbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsbSA9PiB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgYW4gaW5uZXIgcmVtb3ZlKCkgb3BlcmF0aW9uIGhhcyBhbHJlYWR5IGtpY2tlZCBvZmZcbiAgICAgIC8vIHRoZSBhbmltYXRpb24gb24gdGhpcyBlbGVtZW50Li4uXG4gICAgICBpZiAoZWxtW1JFTU9WQUxfRkxBR10pIHJldHVybjtcblxuICAgICAgY29uc3QgbmFtZXNwYWNlcyA9IHRoaXMuX2VuZ2luZS5mZXRjaE5hbWVzcGFjZXNCeUVsZW1lbnQoZWxtKTtcbiAgICAgIGlmIChuYW1lc3BhY2VzLnNpemUpIHtcbiAgICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKG5zID0+IG5zLnRyaWdnZXJMZWF2ZUFuaW1hdGlvbihlbG0sIGNvbnRleHQsIGZhbHNlLCB0cnVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyRWxlbWVudENhY2hlKGVsbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgY2hpbGQgZWxlbWVudHMgd2VyZSByZW1vdmVkIGFsb25nIHdpdGggdGhlIHBhcmVudCwgdGhlaXIgYW5pbWF0aW9ucyBtaWdodCBub3RcbiAgICAvLyBoYXZlIGNvbXBsZXRlZC4gQ2xlYXIgYWxsIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBjYWNoZSBzbyB3ZSBkb24ndCBlbmQgdXAgd2l0aCBhIG1lbW9yeSBsZWFrLlxuICAgIHRoaXMuX2VuZ2luZS5hZnRlckZsdXNoQW5pbWF0aW9uc0RvbmUoXG4gICAgICAgICgpID0+IGVsZW1lbnRzLmZvckVhY2goZWxtID0+IHRoaXMuY2xlYXJFbGVtZW50Q2FjaGUoZWxtKSkpO1xuICB9XG5cbiAgdHJpZ2dlckxlYXZlQW5pbWF0aW9uKFxuICAgICAgZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnksIGRlc3Ryb3lBZnRlckNvbXBsZXRlPzogYm9vbGVhbixcbiAgICAgIGRlZmF1bHRUb0ZhbGxiYWNrPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRyaWdnZXJTdGF0ZXMgPSB0aGlzLl9lbmdpbmUuc3RhdGVzQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICBpZiAodHJpZ2dlclN0YXRlcykge1xuICAgICAgY29uc3QgcGxheWVyczogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdID0gW107XG4gICAgICBPYmplY3Qua2V5cyh0cmlnZ2VyU3RhdGVzKS5mb3JFYWNoKHRyaWdnZXJOYW1lID0+IHtcbiAgICAgICAgLy8gdGhpcyBjaGVjayBpcyBoZXJlIGluIHRoZSBldmVudCB0aGF0IGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICAvLyB0d2ljZSAoYm90aCBvbiB0aGUgaG9zdCBsZXZlbCBhbmQgdGhlIGNvbXBvbmVudCBsZXZlbClcbiAgICAgICAgaWYgKHRoaXMuX3RyaWdnZXJzW3RyaWdnZXJOYW1lXSkge1xuICAgICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMudHJpZ2dlcihlbGVtZW50LCB0cmlnZ2VyTmFtZSwgVk9JRF9WQUxVRSwgZGVmYXVsdFRvRmFsbGJhY2spO1xuICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9lbmdpbmUubWFya0VsZW1lbnRBc1JlbW92ZWQodGhpcy5pZCwgZWxlbWVudCwgdHJ1ZSwgY29udGV4dCk7XG4gICAgICAgIGlmIChkZXN0cm95QWZ0ZXJDb21wbGV0ZSkge1xuICAgICAgICAgIG9wdGltaXplR3JvdXBQbGF5ZXIocGxheWVycykub25Eb25lKCgpID0+IHRoaXMuX2VuZ2luZS5wcm9jZXNzTGVhdmVOb2RlKGVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJlcGFyZUxlYXZlQW5pbWF0aW9uTGlzdGVuZXJzKGVsZW1lbnQ6IGFueSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2VsZW1lbnRMaXN0ZW5lcnMuZ2V0KGVsZW1lbnQpO1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRUcmlnZ2VycyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICBjb25zdCB0cmlnZ2VyTmFtZSA9IGxpc3RlbmVyLm5hbWU7XG4gICAgICAgIGlmICh2aXNpdGVkVHJpZ2dlcnMuaGFzKHRyaWdnZXJOYW1lKSkgcmV0dXJuO1xuICAgICAgICB2aXNpdGVkVHJpZ2dlcnMuYWRkKHRyaWdnZXJOYW1lKTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlcnNbdHJpZ2dlck5hbWVdO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gdHJpZ2dlci5mYWxsYmFja1RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdGF0ZXMgPSB0aGlzLl9lbmdpbmUuc3RhdGVzQnlFbGVtZW50LmdldChlbGVtZW50KSE7XG4gICAgICAgIGNvbnN0IGZyb21TdGF0ZSA9IGVsZW1lbnRTdGF0ZXNbdHJpZ2dlck5hbWVdIHx8IERFRkFVTFRfU1RBVEVfVkFMVUU7XG4gICAgICAgIGNvbnN0IHRvU3RhdGUgPSBuZXcgU3RhdGVWYWx1ZShWT0lEX1ZBTFVFKTtcbiAgICAgICAgY29uc3QgcGxheWVyID0gbmV3IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXIodGhpcy5pZCwgdHJpZ2dlck5hbWUsIGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuX2VuZ2luZS50b3RhbFF1ZXVlZFBsYXllcnMrKztcbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICB0cmlnZ2VyTmFtZSxcbiAgICAgICAgICB0cmFuc2l0aW9uLFxuICAgICAgICAgIGZyb21TdGF0ZSxcbiAgICAgICAgICB0b1N0YXRlLFxuICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICBpc0ZhbGxiYWNrVHJhbnNpdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU5vZGUoZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLl9lbmdpbmU7XG5cbiAgICBpZiAoZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgdGhpcy5fc2lnbmFsUmVtb3ZhbEZvcklubmVyVHJpZ2dlcnMoZWxlbWVudCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBtZWFucyB0aGF0IGEgKiA9PiBWT0lEIGFuaW1hdGlvbiB3YXMgZGV0ZWN0ZWQgYW5kIGtpY2tlZCBvZmZcbiAgICBpZiAodGhpcy50cmlnZ2VyTGVhdmVBbmltYXRpb24oZWxlbWVudCwgY29udGV4dCwgdHJ1ZSkpIHJldHVybjtcblxuICAgIC8vIGZpbmQgdGhlIHBsYXllciB0aGF0IGlzIGFuaW1hdGluZyBhbmQgbWFrZSBzdXJlIHRoYXQgdGhlXG4gICAgLy8gcmVtb3ZhbCBpcyBkZWxheWVkIHVudGlsIHRoYXQgcGxheWVyIGhhcyBjb21wbGV0ZWRcbiAgICBsZXQgY29udGFpbnNQb3RlbnRpYWxQYXJlbnRUcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgaWYgKGVuZ2luZS50b3RhbEFuaW1hdGlvbnMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJzID1cbiAgICAgICAgICBlbmdpbmUucGxheWVycy5sZW5ndGggPyBlbmdpbmUucGxheWVyc0J5UXVlcmllZEVsZW1lbnQuZ2V0KGVsZW1lbnQpIDogW107XG5cbiAgICAgIC8vIHdoZW4gdGhpcyBgaWYgc3RhdGVtZW50YCBkb2VzIG5vdCBjb250aW51ZSBmb3J3YXJkIGl0IG1lYW5zIHRoYXRcbiAgICAgIC8vIGEgcHJldmlvdXMgYW5pbWF0aW9uIHF1ZXJ5IGhhcyBzZWxlY3RlZCB0aGUgY3VycmVudCBlbGVtZW50IGFuZFxuICAgICAgLy8gaXMgYW5pbWF0aW5nIGl0LiBJbiB0aGlzIHNpdHVhdGlvbiB3YW50IHRvIGNvbnRpbnVlIGZvcndhcmRzIGFuZFxuICAgICAgLy8gYWxsb3cgdGhlIGVsZW1lbnQgdG8gYmUgcXVldWVkIHVwIGZvciBhbmltYXRpb24gbGF0ZXIuXG4gICAgICBpZiAoY3VycmVudFBsYXllcnMgJiYgY3VycmVudFBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRhaW5zUG90ZW50aWFsUGFyZW50VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBlbmdpbmUuc3RhdGVzQnlFbGVtZW50LmdldChwYXJlbnQpO1xuICAgICAgICAgIGlmICh0cmlnZ2Vycykge1xuICAgICAgICAgICAgY29udGFpbnNQb3RlbnRpYWxQYXJlbnRUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgc3RhZ2Ugd2Uga25vdyB0aGF0IHRoZSBlbGVtZW50IHdpbGwgZWl0aGVyIGdldCByZW1vdmVkXG4gICAgLy8gZHVyaW5nIGZsdXNoIG9yIHdpbGwgYmUgcGlja2VkIHVwIGJ5IGEgcGFyZW50IHF1ZXJ5LiBFaXRoZXIgd2F5XG4gICAgLy8gd2UgbmVlZCB0byBmaXJlIHRoZSBsaXN0ZW5lcnMgZm9yIHRoaXMgZWxlbWVudCB3aGVuIGl0IERPRVMgZ2V0XG4gICAgLy8gcmVtb3ZlZCAob25jZSB0aGUgcXVlcnkgcGFyZW50IGFuaW1hdGlvbiBpcyBkb25lIG9yIGFmdGVyIGZsdXNoKVxuICAgIHRoaXMucHJlcGFyZUxlYXZlQW5pbWF0aW9uTGlzdGVuZXJzKGVsZW1lbnQpO1xuXG4gICAgLy8gd2hldGhlciBvciBub3QgYSBwYXJlbnQgaGFzIGFuIGFuaW1hdGlvbiB3ZSBuZWVkIHRvIGRlbGF5IHRoZSBkZWZlcnJhbCBvZiB0aGUgbGVhdmVcbiAgICAvLyBvcGVyYXRpb24gdW50aWwgd2UgaGF2ZSBtb3JlIGluZm9ybWF0aW9uICh3aGljaCB3ZSBkbyBhZnRlciBmbHVzaCgpIGhhcyBiZWVuIGNhbGxlZClcbiAgICBpZiAoY29udGFpbnNQb3RlbnRpYWxQYXJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICBlbmdpbmUubWFya0VsZW1lbnRBc1JlbW92ZWQodGhpcy5pZCwgZWxlbWVudCwgZmFsc2UsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZW1vdmFsRmxhZyA9IGVsZW1lbnRbUkVNT1ZBTF9GTEFHXTtcbiAgICAgIGlmICghcmVtb3ZhbEZsYWcgfHwgcmVtb3ZhbEZsYWcgPT09IE5VTExfUkVNT1ZBTF9TVEFURSkge1xuICAgICAgICAvLyB3ZSBkbyB0aGlzIGFmdGVyIHRoZSBmbHVzaCBoYXMgb2NjdXJyZWQgc3VjaFxuICAgICAgICAvLyB0aGF0IHRoZSBjYWxsYmFja3MgY2FuIGJlIGZpcmVkXG4gICAgICAgIGVuZ2luZS5hZnRlckZsdXNoKCgpID0+IHRoaXMuY2xlYXJFbGVtZW50Q2FjaGUoZWxlbWVudCkpO1xuICAgICAgICBlbmdpbmUuZGVzdHJveUlubmVyQW5pbWF0aW9ucyhlbGVtZW50KTtcbiAgICAgICAgZW5naW5lLl9vblJlbW92YWxDb21wbGV0ZShlbGVtZW50LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnNlcnROb2RlKGVsZW1lbnQ6IGFueSwgcGFyZW50OiBhbnkpOiB2b2lkIHtcbiAgICBhZGRDbGFzcyhlbGVtZW50LCB0aGlzLl9ob3N0Q2xhc3NOYW1lKTtcbiAgfVxuXG4gIGRyYWluUXVldWVkVHJhbnNpdGlvbnMobWljcm90YXNrSWQ6IG51bWJlcik6IFF1ZXVlSW5zdHJ1Y3Rpb25bXSB7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zOiBRdWV1ZUluc3RydWN0aW9uW10gPSBbXTtcbiAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IHBsYXllciA9IGVudHJ5LnBsYXllcjtcbiAgICAgIGlmIChwbGF5ZXIuZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbnRyeS5lbGVtZW50O1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fZWxlbWVudExpc3RlbmVycy5nZXQoZWxlbWVudCk7XG4gICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcjogVHJpZ2dlckxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGxpc3RlbmVyLm5hbWUgPT0gZW50cnkudHJpZ2dlck5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VFdmVudCA9IG1ha2VBbmltYXRpb25FdmVudChcbiAgICAgICAgICAgICAgICBlbGVtZW50LCBlbnRyeS50cmlnZ2VyTmFtZSwgZW50cnkuZnJvbVN0YXRlLnZhbHVlLCBlbnRyeS50b1N0YXRlLnZhbHVlKTtcbiAgICAgICAgICAgIChiYXNlRXZlbnQgYXMgYW55KVsnX2RhdGEnXSA9IG1pY3JvdGFza0lkO1xuICAgICAgICAgICAgbGlzdGVuT25QbGF5ZXIoZW50cnkucGxheWVyLCBsaXN0ZW5lci5waGFzZSwgYmFzZUV2ZW50LCBsaXN0ZW5lci5jYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllci5tYXJrZWRGb3JEZXN0cm95KSB7XG4gICAgICAgIHRoaXMuX2VuZ2luZS5hZnRlckZsdXNoKCgpID0+IHtcbiAgICAgICAgICAvLyBub3cgd2UgY2FuIGRlc3Ryb3kgdGhlIGVsZW1lbnQgcHJvcGVybHkgc2luY2UgdGhlIGV2ZW50IGxpc3RlbmVycyBoYXZlXG4gICAgICAgICAgLy8gYmVlbiBib3VuZCB0byB0aGUgcGxheWVyXG4gICAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0cnVjdGlvbnMucHVzaChlbnRyeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuXG4gICAgcmV0dXJuIGluc3RydWN0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAvLyBpZiBkZXBDb3VudCA9PSAwIHRoZW0gbW92ZSB0byBmcm9udFxuICAgICAgLy8gb3RoZXJ3aXNlIGlmIGEgY29udGFpbnMgYiB0aGVuIG1vdmUgYmFja1xuICAgICAgY29uc3QgZDAgPSBhLnRyYW5zaXRpb24uYXN0LmRlcENvdW50O1xuICAgICAgY29uc3QgZDEgPSBiLnRyYW5zaXRpb24uYXN0LmRlcENvdW50O1xuICAgICAgaWYgKGQwID09IDAgfHwgZDEgPT0gMCkge1xuICAgICAgICByZXR1cm4gZDAgLSBkMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9lbmdpbmUuZHJpdmVyLmNvbnRhaW5zRWxlbWVudChhLmVsZW1lbnQsIGIuZWxlbWVudCkgPyAxIDogLTE7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHAgPT4gcC5kZXN0cm95KCkpO1xuICAgIHRoaXMuX3NpZ25hbFJlbW92YWxGb3JJbm5lclRyaWdnZXJzKHRoaXMuaG9zdEVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgZWxlbWVudENvbnRhaW5zRGF0YShlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgY29udGFpbnNEYXRhID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRMaXN0ZW5lcnMuaGFzKGVsZW1lbnQpKSBjb250YWluc0RhdGEgPSB0cnVlO1xuICAgIGNvbnRhaW5zRGF0YSA9XG4gICAgICAgICh0aGlzLl9xdWV1ZS5maW5kKGVudHJ5ID0+IGVudHJ5LmVsZW1lbnQgPT09IGVsZW1lbnQpID8gdHJ1ZSA6IGZhbHNlKSB8fCBjb250YWluc0RhdGE7XG4gICAgcmV0dXJuIGNvbnRhaW5zRGF0YTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXVlZFRyYW5zaXRpb24ge1xuICBlbGVtZW50OiBhbnk7XG4gIGluc3RydWN0aW9uOiBBbmltYXRpb25UcmFuc2l0aW9uSW5zdHJ1Y3Rpb247XG4gIHBsYXllcjogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25BbmltYXRpb25FbmdpbmUge1xuICBwdWJsaWMgcGxheWVyczogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdID0gW107XG4gIHB1YmxpYyBuZXdIb3N0RWxlbWVudHMgPSBuZXcgTWFwPGFueSwgQW5pbWF0aW9uVHJhbnNpdGlvbk5hbWVzcGFjZT4oKTtcbiAgcHVibGljIHBsYXllcnNCeUVsZW1lbnQgPSBuZXcgTWFwPGFueSwgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdPigpO1xuICBwdWJsaWMgcGxheWVyc0J5UXVlcmllZEVsZW1lbnQgPSBuZXcgTWFwPGFueSwgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdPigpO1xuICBwdWJsaWMgc3RhdGVzQnlFbGVtZW50ID0gbmV3IE1hcDxhbnksIHtbdHJpZ2dlck5hbWU6IHN0cmluZ106IFN0YXRlVmFsdWV9PigpO1xuICBwdWJsaWMgZGlzYWJsZWROb2RlcyA9IG5ldyBTZXQ8YW55PigpO1xuXG4gIHB1YmxpYyB0b3RhbEFuaW1hdGlvbnMgPSAwO1xuICBwdWJsaWMgdG90YWxRdWV1ZWRQbGF5ZXJzID0gMDtcblxuICBwcml2YXRlIF9uYW1lc3BhY2VMb29rdXA6IHtbaWQ6IHN0cmluZ106IEFuaW1hdGlvblRyYW5zaXRpb25OYW1lc3BhY2V9ID0ge307XG4gIHByaXZhdGUgX25hbWVzcGFjZUxpc3Q6IEFuaW1hdGlvblRyYW5zaXRpb25OYW1lc3BhY2VbXSA9IFtdO1xuICBwcml2YXRlIF9mbHVzaEZuczogKCgpID0+IGFueSlbXSA9IFtdO1xuICBwcml2YXRlIF93aGVuUXVpZXRGbnM6ICgoKSA9PiBhbnkpW10gPSBbXTtcblxuICBwdWJsaWMgbmFtZXNwYWNlc0J5SG9zdEVsZW1lbnQgPSBuZXcgTWFwPGFueSwgQW5pbWF0aW9uVHJhbnNpdGlvbk5hbWVzcGFjZT4oKTtcbiAgcHVibGljIGNvbGxlY3RlZEVudGVyRWxlbWVudHM6IGFueVtdID0gW107XG4gIHB1YmxpYyBjb2xsZWN0ZWRMZWF2ZUVsZW1lbnRzOiBhbnlbXSA9IFtdO1xuXG4gIC8vIHRoaXMgbWV0aG9kIGlzIGRlc2lnbmVkIHRvIGJlIG92ZXJyaWRkZW4gYnkgdGhlIGNvZGUgdGhhdCB1c2VzIHRoaXMgZW5naW5lXG4gIHB1YmxpYyBvblJlbW92YWxDb21wbGV0ZSA9IChlbGVtZW50OiBhbnksIGNvbnRleHQ6IGFueSkgPT4ge307XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfb25SZW1vdmFsQ29tcGxldGUoZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLm9uUmVtb3ZhbENvbXBsZXRlKGVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgYm9keU5vZGU6IGFueSwgcHVibGljIGRyaXZlcjogQW5pbWF0aW9uRHJpdmVyLFxuICAgICAgcHJpdmF0ZSBfbm9ybWFsaXplcjogQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyKSB7fVxuXG4gIGdldCBxdWV1ZWRQbGF5ZXJzKCk6IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJbXSB7XG4gICAgY29uc3QgcGxheWVyczogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdID0gW107XG4gICAgdGhpcy5fbmFtZXNwYWNlTGlzdC5mb3JFYWNoKG5zID0+IHtcbiAgICAgIG5zLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICBpZiAocGxheWVyLnF1ZXVlZCkge1xuICAgICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcGxheWVycztcbiAgfVxuXG4gIGNyZWF0ZU5hbWVzcGFjZShuYW1lc3BhY2VJZDogc3RyaW5nLCBob3N0RWxlbWVudDogYW55KSB7XG4gICAgY29uc3QgbnMgPSBuZXcgQW5pbWF0aW9uVHJhbnNpdGlvbk5hbWVzcGFjZShuYW1lc3BhY2VJZCwgaG9zdEVsZW1lbnQsIHRoaXMpO1xuICAgIGlmIChob3N0RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9iYWxhbmNlTmFtZXNwYWNlTGlzdChucywgaG9zdEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZlciB0aGlzIGxhdGVyIHVudGlsIGZsdXNoIGR1cmluZyB3aGVuIHRoZSBob3N0IGVsZW1lbnQgaGFzXG4gICAgICAvLyBiZWVuIGluc2VydGVkIHNvIHRoYXQgd2Uga25vdyBleGFjdGx5IHdoZXJlIHRvIHBsYWNlIGl0IGluXG4gICAgICAvLyB0aGUgbmFtZXNwYWNlIGxpc3RcbiAgICAgIHRoaXMubmV3SG9zdEVsZW1lbnRzLnNldChob3N0RWxlbWVudCwgbnMpO1xuXG4gICAgICAvLyBnaXZlbiB0aGF0IHRoaXMgaG9zdCBlbGVtZW50IGlzIGFwYXJ0IG9mIHRoZSBhbmltYXRpb24gY29kZSwgaXRcbiAgICAgIC8vIG1heSBvciBtYXkgbm90IGJlIGluc2VydGVkIGJ5IGEgcGFyZW50IG5vZGUgdGhhdCBpcyBhbiBvZiBhblxuICAgICAgLy8gYW5pbWF0aW9uIHJlbmRlcmVyIHR5cGUuIElmIHRoaXMgaGFwcGVucyB0aGVuIHdlIGNhbiBzdGlsbCBoYXZlXG4gICAgICAvLyBhY2Nlc3MgdG8gdGhpcyBpdGVtIHdoZW4gd2UgcXVlcnkgZm9yIDplbnRlciBub2Rlcy4gSWYgdGhlIHBhcmVudFxuICAgICAgLy8gaXMgYSByZW5kZXJlciB0aGVuIHRoZSBzZXQgZGF0YS1zdHJ1Y3R1cmUgd2lsbCBub3JtYWxpemUgdGhlIGVudHJ5XG4gICAgICB0aGlzLmNvbGxlY3RFbnRlckVsZW1lbnQoaG9zdEVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlTG9va3VwW25hbWVzcGFjZUlkXSA9IG5zO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmFsYW5jZU5hbWVzcGFjZUxpc3QobnM6IEFuaW1hdGlvblRyYW5zaXRpb25OYW1lc3BhY2UsIGhvc3RFbGVtZW50OiBhbnkpIHtcbiAgICBjb25zdCBsaW1pdCA9IHRoaXMuX25hbWVzcGFjZUxpc3QubGVuZ3RoIC0gMTtcbiAgICBpZiAobGltaXQgPj0gMCkge1xuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gbGltaXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG5leHROYW1lc3BhY2UgPSB0aGlzLl9uYW1lc3BhY2VMaXN0W2ldO1xuICAgICAgICBpZiAodGhpcy5kcml2ZXIuY29udGFpbnNFbGVtZW50KG5leHROYW1lc3BhY2UuaG9zdEVsZW1lbnQsIGhvc3RFbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX25hbWVzcGFjZUxpc3Quc3BsaWNlKGkgKyAxLCAwLCBucyk7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHRoaXMuX25hbWVzcGFjZUxpc3Quc3BsaWNlKDAsIDAsIG5zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmFtZXNwYWNlTGlzdC5wdXNoKG5zKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVzcGFjZXNCeUhvc3RFbGVtZW50LnNldChob3N0RWxlbWVudCwgbnMpO1xuICAgIHJldHVybiBucztcbiAgfVxuXG4gIHJlZ2lzdGVyKG5hbWVzcGFjZUlkOiBzdHJpbmcsIGhvc3RFbGVtZW50OiBhbnkpIHtcbiAgICBsZXQgbnMgPSB0aGlzLl9uYW1lc3BhY2VMb29rdXBbbmFtZXNwYWNlSWRdO1xuICAgIGlmICghbnMpIHtcbiAgICAgIG5zID0gdGhpcy5jcmVhdGVOYW1lc3BhY2UobmFtZXNwYWNlSWQsIGhvc3RFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG5zO1xuICB9XG5cbiAgcmVnaXN0ZXJUcmlnZ2VyKG5hbWVzcGFjZUlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdHJpZ2dlcjogQW5pbWF0aW9uVHJpZ2dlcikge1xuICAgIGxldCBucyA9IHRoaXMuX25hbWVzcGFjZUxvb2t1cFtuYW1lc3BhY2VJZF07XG4gICAgaWYgKG5zICYmIG5zLnJlZ2lzdGVyKG5hbWUsIHRyaWdnZXIpKSB7XG4gICAgICB0aGlzLnRvdGFsQW5pbWF0aW9ucysrO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kobmFtZXNwYWNlSWQ6IHN0cmluZywgY29udGV4dDogYW55KSB7XG4gICAgaWYgKCFuYW1lc3BhY2VJZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbnMgPSB0aGlzLl9mZXRjaE5hbWVzcGFjZShuYW1lc3BhY2VJZCk7XG5cbiAgICB0aGlzLmFmdGVyRmx1c2goKCkgPT4ge1xuICAgICAgdGhpcy5uYW1lc3BhY2VzQnlIb3N0RWxlbWVudC5kZWxldGUobnMuaG9zdEVsZW1lbnQpO1xuICAgICAgZGVsZXRlIHRoaXMuX25hbWVzcGFjZUxvb2t1cFtuYW1lc3BhY2VJZF07XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX25hbWVzcGFjZUxpc3QuaW5kZXhPZihucyk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLl9uYW1lc3BhY2VMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFmdGVyRmx1c2hBbmltYXRpb25zRG9uZSgoKSA9PiBucy5kZXN0cm95KGNvbnRleHQpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZldGNoTmFtZXNwYWNlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlTG9va3VwW2lkXTtcbiAgfVxuXG4gIGZldGNoTmFtZXNwYWNlc0J5RWxlbWVudChlbGVtZW50OiBhbnkpOiBTZXQ8QW5pbWF0aW9uVHJhbnNpdGlvbk5hbWVzcGFjZT4ge1xuICAgIC8vIG5vcm1hbGx5IHRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSBuYW1lc3BhY2UgcGVyIGVsZW1lbnQsIGhvd2V2ZXJcbiAgICAvLyBpZiBAdHJpZ2dlcnMgYXJlIHBsYWNlZCBvbiBib3RoIHRoZSBjb21wb25lbnQgZWxlbWVudCBhbmQgdGhlblxuICAgIC8vIGl0cyBob3N0IGVsZW1lbnQgKHdpdGhpbiB0aGUgY29tcG9uZW50IGNvZGUpIHRoZW4gdGhlcmUgd2lsbCBiZVxuICAgIC8vIHR3byBuYW1lc3BhY2VzIHJldHVybmVkLiBXZSB1c2UgYSBzZXQgaGVyZSB0byBzaW1wbHkgdGhlIGRlZHVwZVxuICAgIC8vIG9mIG5hbWVzcGFjZXMgaW5jYXNlIHRoZXJlIGFyZSBtdWx0aXBsZSB0cmlnZ2VycyBib3RoIHRoZSBlbG0gYW5kIGhvc3RcbiAgICBjb25zdCBuYW1lc3BhY2VzID0gbmV3IFNldDxBbmltYXRpb25UcmFuc2l0aW9uTmFtZXNwYWNlPigpO1xuICAgIGNvbnN0IGVsZW1lbnRTdGF0ZXMgPSB0aGlzLnN0YXRlc0J5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgaWYgKGVsZW1lbnRTdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50U3RhdGVzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuc0lkID0gZWxlbWVudFN0YXRlc1trZXlzW2ldXS5uYW1lc3BhY2VJZDtcbiAgICAgICAgaWYgKG5zSWQpIHtcbiAgICAgICAgICBjb25zdCBucyA9IHRoaXMuX2ZldGNoTmFtZXNwYWNlKG5zSWQpO1xuICAgICAgICAgIGlmIChucykge1xuICAgICAgICAgICAgbmFtZXNwYWNlcy5hZGQobnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmFtZXNwYWNlcztcbiAgfVxuXG4gIHRyaWdnZXIobmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoaXNFbGVtZW50Tm9kZShlbGVtZW50KSkge1xuICAgICAgY29uc3QgbnMgPSB0aGlzLl9mZXRjaE5hbWVzcGFjZShuYW1lc3BhY2VJZCk7XG4gICAgICBpZiAobnMpIHtcbiAgICAgICAgbnMudHJpZ2dlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbnNlcnROb2RlKG5hbWVzcGFjZUlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgcGFyZW50OiBhbnksIGluc2VydEJlZm9yZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghaXNFbGVtZW50Tm9kZShlbGVtZW50KSkgcmV0dXJuO1xuXG4gICAgLy8gc3BlY2lhbCBjYXNlIGZvciB3aGVuIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZCBhbmQgcmVpbnNlcnRlZCAobW92ZSBvcGVyYXRpb24pXG4gICAgLy8gd2hlbiB0aGlzIG9jY3VycyB3ZSBkbyBub3Qgd2FudCB0byB1c2UgdGhlIGVsZW1lbnQgZm9yIGRlbGV0aW9uIGxhdGVyXG4gICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnRbUkVNT1ZBTF9GTEFHXSBhcyBFbGVtZW50QW5pbWF0aW9uU3RhdGU7XG4gICAgaWYgKGRldGFpbHMgJiYgZGV0YWlscy5zZXRGb3JSZW1vdmFsKSB7XG4gICAgICBkZXRhaWxzLnNldEZvclJlbW92YWwgPSBmYWxzZTtcbiAgICAgIGRldGFpbHMuc2V0Rm9yTW92ZSA9IHRydWU7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29sbGVjdGVkTGVhdmVFbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0ZWRMZWF2ZUVsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW4gdGhlIGV2ZW50IHRoYXQgdGhlIG5hbWVzcGFjZUlkIGlzIGJsYW5rIHRoZW4gdGhlIGNhbGxlclxuICAgIC8vIGNvZGUgZG9lcyBub3QgY29udGFpbiBhbnkgYW5pbWF0aW9uIGNvZGUgaW4gaXQsIGJ1dCBpdCBpc1xuICAgIC8vIGp1c3QgYmVpbmcgY2FsbGVkIHNvIHRoYXQgdGhlIG5vZGUgaXMgbWFya2VkIGFzIGJlaW5nIGluc2VydGVkXG4gICAgaWYgKG5hbWVzcGFjZUlkKSB7XG4gICAgICBjb25zdCBucyA9IHRoaXMuX2ZldGNoTmFtZXNwYWNlKG5hbWVzcGFjZUlkKTtcbiAgICAgIC8vIFRoaXMgaWYtc3RhdGVtZW50IGlzIGEgd29ya2Fyb3VuZCBmb3Igcm91dGVyIGlzc3VlICMyMTk0Ny5cbiAgICAgIC8vIFRoZSByb3V0ZXIgc29tZXRpbWVzIGhpdHMgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSB3aGlsZSBhIHJvdXRlXG4gICAgICAvLyBpcyBiZWluZyBpbnN0YW50aWF0ZWQgYSBuZXcgbmF2aWdhdGlvbiBhcnJpdmVzLCB0cmlnZ2VyaW5nIGxlYXZlXG4gICAgICAvLyBhbmltYXRpb24gb2YgRE9NIHRoYXQgaGFzIG5vdCBiZWVuIGZ1bGx5IGluaXRpYWxpemVkLCB1bnRpbCB0aGlzXG4gICAgICAvLyBpcyByZXNvbHZlZCwgd2UgbmVlZCB0byBoYW5kbGUgdGhlIHNjZW5hcmlvIHdoZW4gRE9NIGlzIG5vdCBpbiBhXG4gICAgICAvLyBjb25zaXN0ZW50IHN0YXRlIGR1cmluZyB0aGUgYW5pbWF0aW9uLlxuICAgICAgaWYgKG5zKSB7XG4gICAgICAgIG5zLmluc2VydE5vZGUoZWxlbWVudCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbmx5ICpkaXJlY3RpdmVzIGFuZCBob3N0IGVsZW1lbnRzIGFyZSBpbnNlcnRlZCBiZWZvcmVcbiAgICBpZiAoaW5zZXJ0QmVmb3JlKSB7XG4gICAgICB0aGlzLmNvbGxlY3RFbnRlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGVjdEVudGVyRWxlbWVudChlbGVtZW50OiBhbnkpIHtcbiAgICB0aGlzLmNvbGxlY3RlZEVudGVyRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIG1hcmtFbGVtZW50QXNEaXNhYmxlZChlbGVtZW50OiBhbnksIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWROb2Rlcy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZE5vZGVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgRElTQUJMRURfQ0xBU1NOQU1FKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlzYWJsZWROb2Rlcy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWROb2Rlcy5kZWxldGUoZWxlbWVudCk7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBESVNBQkxFRF9DTEFTU05BTUUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZU5vZGUobmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBpc0hvc3RFbGVtZW50OiBib29sZWFuLCBjb250ZXh0OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoaXNFbGVtZW50Tm9kZShlbGVtZW50KSkge1xuICAgICAgY29uc3QgbnMgPSBuYW1lc3BhY2VJZCA/IHRoaXMuX2ZldGNoTmFtZXNwYWNlKG5hbWVzcGFjZUlkKSA6IG51bGw7XG4gICAgICBpZiAobnMpIHtcbiAgICAgICAgbnMucmVtb3ZlTm9kZShlbGVtZW50LCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFya0VsZW1lbnRBc1JlbW92ZWQobmFtZXNwYWNlSWQsIGVsZW1lbnQsIGZhbHNlLCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSG9zdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaG9zdE5TID0gdGhpcy5uYW1lc3BhY2VzQnlIb3N0RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChob3N0TlMgJiYgaG9zdE5TLmlkICE9PSBuYW1lc3BhY2VJZCkge1xuICAgICAgICAgIGhvc3ROUy5yZW1vdmVOb2RlKGVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUmVtb3ZhbENvbXBsZXRlKGVsZW1lbnQsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtFbGVtZW50QXNSZW1vdmVkKG5hbWVzcGFjZUlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgaGFzQW5pbWF0aW9uPzogYm9vbGVhbiwgY29udGV4dD86IGFueSkge1xuICAgIHRoaXMuY29sbGVjdGVkTGVhdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIGVsZW1lbnRbUkVNT1ZBTF9GTEFHXSA9XG4gICAgICAgIHtuYW1lc3BhY2VJZCwgc2V0Rm9yUmVtb3ZhbDogY29udGV4dCwgaGFzQW5pbWF0aW9uLCByZW1vdmVkQmVmb3JlUXVlcmllZDogZmFsc2V9O1xuICB9XG5cbiAgbGlzdGVuKFxuICAgICAgbmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHBoYXNlOiBzdHJpbmcsXG4gICAgICBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IGJvb2xlYW4pOiAoKSA9PiBhbnkge1xuICAgIGlmIChpc0VsZW1lbnROb2RlKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmV0Y2hOYW1lc3BhY2UobmFtZXNwYWNlSWQpLmxpc3RlbihlbGVtZW50LCBuYW1lLCBwaGFzZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH1cblxuICBwcml2YXRlIF9idWlsZEluc3RydWN0aW9uKFxuICAgICAgZW50cnk6IFF1ZXVlSW5zdHJ1Y3Rpb24sIHN1YlRpbWVsaW5lczogRWxlbWVudEluc3RydWN0aW9uTWFwLCBlbnRlckNsYXNzTmFtZTogc3RyaW5nLFxuICAgICAgbGVhdmVDbGFzc05hbWU6IHN0cmluZywgc2tpcEJ1aWxkQXN0PzogYm9vbGVhbikge1xuICAgIHJldHVybiBlbnRyeS50cmFuc2l0aW9uLmJ1aWxkKFxuICAgICAgICB0aGlzLmRyaXZlciwgZW50cnkuZWxlbWVudCwgZW50cnkuZnJvbVN0YXRlLnZhbHVlLCBlbnRyeS50b1N0YXRlLnZhbHVlLCBlbnRlckNsYXNzTmFtZSxcbiAgICAgICAgbGVhdmVDbGFzc05hbWUsIGVudHJ5LmZyb21TdGF0ZS5vcHRpb25zLCBlbnRyeS50b1N0YXRlLm9wdGlvbnMsIHN1YlRpbWVsaW5lcywgc2tpcEJ1aWxkQXN0KTtcbiAgfVxuXG4gIGRlc3Ryb3lJbm5lckFuaW1hdGlvbnMoY29udGFpbmVyRWxlbWVudDogYW55KSB7XG4gICAgbGV0IGVsZW1lbnRzID0gdGhpcy5kcml2ZXIucXVlcnkoY29udGFpbmVyRWxlbWVudCwgTkdfVFJJR0dFUl9TRUxFQ1RPUiwgdHJ1ZSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuZGVzdHJveUFjdGl2ZUFuaW1hdGlvbnNGb3JFbGVtZW50KGVsZW1lbnQpKTtcblxuICAgIGlmICh0aGlzLnBsYXllcnNCeVF1ZXJpZWRFbGVtZW50LnNpemUgPT0gMCkgcmV0dXJuO1xuXG4gICAgZWxlbWVudHMgPSB0aGlzLmRyaXZlci5xdWVyeShjb250YWluZXJFbGVtZW50LCBOR19BTklNQVRJTkdfU0VMRUNUT1IsIHRydWUpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmZpbmlzaEFjdGl2ZVF1ZXJpZWRBbmltYXRpb25PbkVsZW1lbnQoZWxlbWVudCkpO1xuICB9XG5cbiAgZGVzdHJveUFjdGl2ZUFuaW1hdGlvbnNGb3JFbGVtZW50KGVsZW1lbnQ6IGFueSkge1xuICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLnBsYXllcnNCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgIGlmIChwbGF5ZXJzKSB7XG4gICAgICBwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciB3aGVuIGFuIGVsZW1lbnQgaXMgc2V0IGZvciBkZXN0cnVjdGlvbiwgYnV0IGhhc24ndCBzdGFydGVkLlxuICAgICAgICAvLyBpbiB0aGlzIHNpdHVhdGlvbiB3ZSB3YW50IHRvIGRlbGF5IHRoZSBkZXN0cnVjdGlvbiB1bnRpbCB0aGUgZmx1c2ggb2NjdXJzXG4gICAgICAgIC8vIHNvIHRoYXQgYW55IGV2ZW50IGxpc3RlbmVycyBhdHRhY2hlZCB0byB0aGUgcGxheWVyIGFyZSB0cmlnZ2VyZWQuXG4gICAgICAgIGlmIChwbGF5ZXIucXVldWVkKSB7XG4gICAgICAgICAgcGxheWVyLm1hcmtlZEZvckRlc3Ryb3kgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaEFjdGl2ZVF1ZXJpZWRBbmltYXRpb25PbkVsZW1lbnQoZWxlbWVudDogYW55KSB7XG4gICAgY29uc3QgcGxheWVycyA9IHRoaXMucGxheWVyc0J5UXVlcmllZEVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuICAgIGlmIChwbGF5ZXJzKSB7XG4gICAgICBwbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5maW5pc2goKSk7XG4gICAgfVxuICB9XG5cbiAgd2hlblJlbmRlcmluZ0RvbmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gb3B0aW1pemVHcm91cFBsYXllcih0aGlzLnBsYXllcnMpLm9uRG9uZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc0xlYXZlTm9kZShlbGVtZW50OiBhbnkpIHtcbiAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudFtSRU1PVkFMX0ZMQUddIGFzIEVsZW1lbnRBbmltYXRpb25TdGF0ZTtcbiAgICBpZiAoZGV0YWlscyAmJiBkZXRhaWxzLnNldEZvclJlbW92YWwpIHtcbiAgICAgIC8vIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gcmVtb3ZpbmcgaXQgdHdpY2VcbiAgICAgIGVsZW1lbnRbUkVNT1ZBTF9GTEFHXSA9IE5VTExfUkVNT1ZBTF9TVEFURTtcbiAgICAgIGlmIChkZXRhaWxzLm5hbWVzcGFjZUlkKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveUlubmVyQW5pbWF0aW9ucyhlbGVtZW50KTtcbiAgICAgICAgY29uc3QgbnMgPSB0aGlzLl9mZXRjaE5hbWVzcGFjZShkZXRhaWxzLm5hbWVzcGFjZUlkKTtcbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgbnMuY2xlYXJFbGVtZW50Q2FjaGUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX29uUmVtb3ZhbENvbXBsZXRlKGVsZW1lbnQsIGRldGFpbHMuc2V0Rm9yUmVtb3ZhbCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJpdmVyLm1hdGNoZXNFbGVtZW50KGVsZW1lbnQsIERJU0FCTEVEX1NFTEVDVE9SKSkge1xuICAgICAgdGhpcy5tYXJrRWxlbWVudEFzRGlzYWJsZWQoZWxlbWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuZHJpdmVyLnF1ZXJ5KGVsZW1lbnQsIERJU0FCTEVEX1NFTEVDVE9SLCB0cnVlKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5tYXJrRWxlbWVudEFzRGlzYWJsZWQobm9kZSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZmx1c2gobWljcm90YXNrSWQ6IG51bWJlciA9IC0xKSB7XG4gICAgbGV0IHBsYXllcnM6IEFuaW1hdGlvblBsYXllcltdID0gW107XG4gICAgaWYgKHRoaXMubmV3SG9zdEVsZW1lbnRzLnNpemUpIHtcbiAgICAgIHRoaXMubmV3SG9zdEVsZW1lbnRzLmZvckVhY2goKG5zLCBlbGVtZW50KSA9PiB0aGlzLl9iYWxhbmNlTmFtZXNwYWNlTGlzdChucywgZWxlbWVudCkpO1xuICAgICAgdGhpcy5uZXdIb3N0RWxlbWVudHMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b3RhbEFuaW1hdGlvbnMgJiYgdGhpcy5jb2xsZWN0ZWRFbnRlckVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3RlZEVudGVyRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWxtID0gdGhpcy5jb2xsZWN0ZWRFbnRlckVsZW1lbnRzW2ldO1xuICAgICAgICBhZGRDbGFzcyhlbG0sIFNUQVJfQ0xBU1NOQU1FKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmFtZXNwYWNlTGlzdC5sZW5ndGggJiZcbiAgICAgICAgKHRoaXMudG90YWxRdWV1ZWRQbGF5ZXJzIHx8IHRoaXMuY29sbGVjdGVkTGVhdmVFbGVtZW50cy5sZW5ndGgpKSB7XG4gICAgICBjb25zdCBjbGVhbnVwRm5zOiBGdW5jdGlvbltdID0gW107XG4gICAgICB0cnkge1xuICAgICAgICBwbGF5ZXJzID0gdGhpcy5fZmx1c2hBbmltYXRpb25zKGNsZWFudXBGbnMsIG1pY3JvdGFza0lkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYW51cEZucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNsZWFudXBGbnNbaV0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGVkTGVhdmVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb2xsZWN0ZWRMZWF2ZUVsZW1lbnRzW2ldO1xuICAgICAgICB0aGlzLnByb2Nlc3NMZWF2ZU5vZGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3RhbFF1ZXVlZFBsYXllcnMgPSAwO1xuICAgIHRoaXMuY29sbGVjdGVkRW50ZXJFbGVtZW50cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuY29sbGVjdGVkTGVhdmVFbGVtZW50cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2ZsdXNoRm5zLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgdGhpcy5fZmx1c2hGbnMgPSBbXTtcblxuICAgIGlmICh0aGlzLl93aGVuUXVpZXRGbnMubGVuZ3RoKSB7XG4gICAgICAvLyB3ZSBtb3ZlIHRoZXNlIG92ZXIgdG8gYSB2YXJpYWJsZSBzbyB0aGF0XG4gICAgICAvLyBpZiBhbnkgbmV3IGNhbGxiYWNrcyBhcmUgcmVnaXN0ZXJlZCBpbiBhbm90aGVyXG4gICAgICAvLyBmbHVzaCB0aGV5IGRvIG5vdCBwb3B1bGF0ZSB0aGUgZXhpc3Rpbmcgc2V0XG4gICAgICBjb25zdCBxdWlldEZucyA9IHRoaXMuX3doZW5RdWlldEZucztcbiAgICAgIHRoaXMuX3doZW5RdWlldEZucyA9IFtdO1xuXG4gICAgICBpZiAocGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgb3B0aW1pemVHcm91cFBsYXllcihwbGF5ZXJzKS5vbkRvbmUoKCkgPT4ge1xuICAgICAgICAgIHF1aWV0Rm5zLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVpZXRGbnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXBvcnRFcnJvcihlcnJvcnM6IHN0cmluZ1tdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIHByb2Nlc3MgYW5pbWF0aW9ucyBkdWUgdG8gdGhlIGZvbGxvd2luZyBmYWlsZWQgdHJpZ2dlciB0cmFuc2l0aW9uc1xcbiAke1xuICAgICAgICAgICAgZXJyb3JzLmpvaW4oJ1xcbicpfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmx1c2hBbmltYXRpb25zKGNsZWFudXBGbnM6IEZ1bmN0aW9uW10sIG1pY3JvdGFza0lkOiBudW1iZXIpOlxuICAgICAgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdIHtcbiAgICBjb25zdCBzdWJUaW1lbGluZXMgPSBuZXcgRWxlbWVudEluc3RydWN0aW9uTWFwKCk7XG4gICAgY29uc3Qgc2tpcHBlZFBsYXllcnM6IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IHNraXBwZWRQbGF5ZXJzTWFwID0gbmV3IE1hcDxhbnksIEFuaW1hdGlvblBsYXllcltdPigpO1xuICAgIGNvbnN0IHF1ZXVlZEluc3RydWN0aW9uczogUXVldWVkVHJhbnNpdGlvbltdID0gW107XG4gICAgY29uc3QgcXVlcmllZEVsZW1lbnRzID0gbmV3IE1hcDxhbnksIFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJbXT4oKTtcbiAgICBjb25zdCBhbGxQcmVTdHlsZUVsZW1lbnRzID0gbmV3IE1hcDxhbnksIFNldDxzdHJpbmc+PigpO1xuICAgIGNvbnN0IGFsbFBvc3RTdHlsZUVsZW1lbnRzID0gbmV3IE1hcDxhbnksIFNldDxzdHJpbmc+PigpO1xuXG4gICAgY29uc3QgZGlzYWJsZWRFbGVtZW50c1NldCA9IG5ldyBTZXQ8YW55PigpO1xuICAgIHRoaXMuZGlzYWJsZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgZGlzYWJsZWRFbGVtZW50c1NldC5hZGQobm9kZSk7XG4gICAgICBjb25zdCBub2Rlc1RoYXRBcmVEaXNhYmxlZCA9IHRoaXMuZHJpdmVyLnF1ZXJ5KG5vZGUsIFFVRVVFRF9TRUxFQ1RPUiwgdHJ1ZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzVGhhdEFyZURpc2FibGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc2FibGVkRWxlbWVudHNTZXQuYWRkKG5vZGVzVGhhdEFyZURpc2FibGVkW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHlOb2RlID0gdGhpcy5ib2R5Tm9kZTtcbiAgICBjb25zdCBhbGxUcmlnZ2VyRWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuc3RhdGVzQnlFbGVtZW50LmtleXMoKSk7XG4gICAgY29uc3QgZW50ZXJOb2RlTWFwID0gYnVpbGRSb290TWFwKGFsbFRyaWdnZXJFbGVtZW50cywgdGhpcy5jb2xsZWN0ZWRFbnRlckVsZW1lbnRzKTtcblxuICAgIC8vIHRoaXMgbXVzdCBvY2N1ciBiZWZvcmUgdGhlIGluc3RydWN0aW9ucyBhcmUgYnVpbHQgYmVsb3cgc3VjaCB0aGF0XG4gICAgLy8gdGhlIDplbnRlciBxdWVyaWVzIG1hdGNoIHRoZSBlbGVtZW50cyAoc2luY2UgdGhlIHRpbWVsaW5lIHF1ZXJpZXNcbiAgICAvLyBhcmUgZmlyZWQgZHVyaW5nIGluc3RydWN0aW9uIGJ1aWxkaW5nKS5cbiAgICBjb25zdCBlbnRlck5vZGVNYXBJZHMgPSBuZXcgTWFwPGFueSwgc3RyaW5nPigpO1xuICAgIGxldCBpID0gMDtcbiAgICBlbnRlck5vZGVNYXAuZm9yRWFjaCgobm9kZXMsIHJvb3QpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEVOVEVSX0NMQVNTTkFNRSArIGkrKztcbiAgICAgIGVudGVyTm9kZU1hcElkcy5zZXQocm9vdCwgY2xhc3NOYW1lKTtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbExlYXZlTm9kZXM6IGFueVtdID0gW107XG4gICAgY29uc3QgbWVyZ2VkTGVhdmVOb2RlcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGNvbnN0IGxlYXZlTm9kZXNXaXRob3V0QW5pbWF0aW9ucyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0ZWRMZWF2ZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb2xsZWN0ZWRMZWF2ZUVsZW1lbnRzW2ldO1xuICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnRbUkVNT1ZBTF9GTEFHXSBhcyBFbGVtZW50QW5pbWF0aW9uU3RhdGU7XG4gICAgICBpZiAoZGV0YWlscyAmJiBkZXRhaWxzLnNldEZvclJlbW92YWwpIHtcbiAgICAgICAgYWxsTGVhdmVOb2Rlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICBtZXJnZWRMZWF2ZU5vZGVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgaWYgKGRldGFpbHMuaGFzQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5kcml2ZXIucXVlcnkoZWxlbWVudCwgU1RBUl9TRUxFQ1RPUiwgdHJ1ZSkuZm9yRWFjaChlbG0gPT4gbWVyZ2VkTGVhdmVOb2Rlcy5hZGQoZWxtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVhdmVOb2Rlc1dpdGhvdXRBbmltYXRpb25zLmFkZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxlYXZlTm9kZU1hcElkcyA9IG5ldyBNYXA8YW55LCBzdHJpbmc+KCk7XG4gICAgY29uc3QgbGVhdmVOb2RlTWFwID0gYnVpbGRSb290TWFwKGFsbFRyaWdnZXJFbGVtZW50cywgQXJyYXkuZnJvbShtZXJnZWRMZWF2ZU5vZGVzKSk7XG4gICAgbGVhdmVOb2RlTWFwLmZvckVhY2goKG5vZGVzLCByb290KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBMRUFWRV9DTEFTU05BTUUgKyBpKys7XG4gICAgICBsZWF2ZU5vZGVNYXBJZHMuc2V0KHJvb3QsIGNsYXNzTmFtZSk7XG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4gYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSk7XG4gICAgfSk7XG5cbiAgICBjbGVhbnVwRm5zLnB1c2goKCkgPT4ge1xuICAgICAgZW50ZXJOb2RlTWFwLmZvckVhY2goKG5vZGVzLCByb290KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGVudGVyTm9kZU1hcElkcy5nZXQocm9vdCkhO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSk7XG4gICAgICB9KTtcblxuICAgICAgbGVhdmVOb2RlTWFwLmZvckVhY2goKG5vZGVzLCByb290KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGxlYXZlTm9kZU1hcElkcy5nZXQocm9vdCkhO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSk7XG4gICAgICB9KTtcblxuICAgICAgYWxsTGVhdmVOb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NMZWF2ZU5vZGUoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbFBsYXllcnM6IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IGVycm9uZW91c1RyYW5zaXRpb25zOiBBbmltYXRpb25UcmFuc2l0aW9uSW5zdHJ1Y3Rpb25bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLl9uYW1lc3BhY2VMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBucyA9IHRoaXMuX25hbWVzcGFjZUxpc3RbaV07XG4gICAgICBucy5kcmFpblF1ZXVlZFRyYW5zaXRpb25zKG1pY3JvdGFza0lkKS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gZW50cnkucGxheWVyO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZW50cnkuZWxlbWVudDtcbiAgICAgICAgYWxsUGxheWVycy5wdXNoKHBsYXllcik7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGVkRW50ZXJFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudFtSRU1PVkFMX0ZMQUddIGFzIEVsZW1lbnRBbmltYXRpb25TdGF0ZTtcbiAgICAgICAgICAvLyBtb3ZlIGFuaW1hdGlvbnMgYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLi4uXG4gICAgICAgICAgaWYgKGRldGFpbHMgJiYgZGV0YWlscy5zZXRGb3JNb3ZlKSB7XG4gICAgICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGVJc09ycGhhbmVkID0gIWJvZHlOb2RlIHx8ICF0aGlzLmRyaXZlci5jb250YWluc0VsZW1lbnQoYm9keU5vZGUsIGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBsZWF2ZUNsYXNzTmFtZSA9IGxlYXZlTm9kZU1hcElkcy5nZXQoZWxlbWVudCkhO1xuICAgICAgICBjb25zdCBlbnRlckNsYXNzTmFtZSA9IGVudGVyTm9kZU1hcElkcy5nZXQoZWxlbWVudCkhO1xuICAgICAgICBjb25zdCBpbnN0cnVjdGlvbiA9IHRoaXMuX2J1aWxkSW5zdHJ1Y3Rpb24oXG4gICAgICAgICAgICBlbnRyeSwgc3ViVGltZWxpbmVzLCBlbnRlckNsYXNzTmFtZSwgbGVhdmVDbGFzc05hbWUsIG5vZGVJc09ycGhhbmVkKSE7XG4gICAgICAgIGlmIChpbnN0cnVjdGlvbi5lcnJvcnMgJiYgaW5zdHJ1Y3Rpb24uZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGVycm9uZW91c1RyYW5zaXRpb25zLnB1c2goaW5zdHJ1Y3Rpb24pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV2ZW4gdGhvdWdoIHRoZSBlbGVtZW50IG1heSBub3QgYmUgYXBhcnQgb2YgdGhlIERPTSwgaXQgbWF5XG4gICAgICAgIC8vIHN0aWxsIGJlIGFkZGVkIGF0IGEgbGF0ZXIgcG9pbnQgKGR1ZSB0byB0aGUgbWVjaGFuaWNzIG9mIGNvbnRlbnRcbiAgICAgICAgLy8gcHJvamVjdGlvbiBhbmQvb3IgZHluYW1pYyBjb21wb25lbnQgaW5zZXJ0aW9uKSB0aGVyZWZvcmUgaXQnc1xuICAgICAgICAvLyBpbXBvcnRhbnQgd2Ugc3RpbGwgc3R5bGUgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmIChub2RlSXNPcnBoYW5lZCkge1xuICAgICAgICAgIHBsYXllci5vblN0YXJ0KCgpID0+IGVyYXNlU3R5bGVzKGVsZW1lbnQsIGluc3RydWN0aW9uLmZyb21TdHlsZXMpKTtcbiAgICAgICAgICBwbGF5ZXIub25EZXN0cm95KCgpID0+IHNldFN0eWxlcyhlbGVtZW50LCBpbnN0cnVjdGlvbi50b1N0eWxlcykpO1xuICAgICAgICAgIHNraXBwZWRQbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhIHVubWF0Y2hlZCB0cmFuc2l0aW9uIGlzIHF1ZXVlZCB0byBnbyB0aGVuIGl0IFNIT1VMRCBOT1QgcmVuZGVyXG4gICAgICAgIC8vIGFuIGFuaW1hdGlvbiBhbmQgY2FuY2VsIHRoZSBwcmV2aW91c2x5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgaWYgKGVudHJ5LmlzRmFsbGJhY2tUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcGxheWVyLm9uU3RhcnQoKCkgPT4gZXJhc2VTdHlsZXMoZWxlbWVudCwgaW5zdHJ1Y3Rpb24uZnJvbVN0eWxlcykpO1xuICAgICAgICAgIHBsYXllci5vbkRlc3Ryb3koKCkgPT4gc2V0U3R5bGVzKGVsZW1lbnQsIGluc3RydWN0aW9uLnRvU3R5bGVzKSk7XG4gICAgICAgICAgc2tpcHBlZFBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCBpZiBhIHBhcmVudCBhbmltYXRpb24gdXNlcyB0aGlzIGFuaW1hdGlvbiBhcyBhIHN1YiB0cmlnZ2VyXG4gICAgICAgIC8vIHRoZW4gaXQgd2lsbCBpbnN0cnVjdCB0aGUgdGltZWxpbmUgYnVpbGRlciB0byBub3QgYWRkIGEgcGxheWVyIGRlbGF5LCBidXRcbiAgICAgICAgLy8gaW5zdGVhZCBzdHJldGNoIHRoZSBmaXJzdCBrZXlmcmFtZSBnYXAgdXAgdW50aWwgdGhlIGFuaW1hdGlvbiBzdGFydHMuIFRoZVxuICAgICAgICAvLyByZWFzb24gdGhpcyBpcyBpbXBvcnRhbnQgaXMgdG8gcHJldmVudCBleHRyYSBpbml0aWFsaXphdGlvbiBzdHlsZXMgZnJvbSBiZWluZ1xuICAgICAgICAvLyByZXF1aXJlZCBieSB0aGUgdXNlciBpbiB0aGUgYW5pbWF0aW9uLlxuICAgICAgICBpbnN0cnVjdGlvbi50aW1lbGluZXMuZm9yRWFjaCh0bCA9PiB0bC5zdHJldGNoU3RhcnRpbmdLZXlmcmFtZSA9IHRydWUpO1xuXG4gICAgICAgIHN1YlRpbWVsaW5lcy5hcHBlbmQoZWxlbWVudCwgaW5zdHJ1Y3Rpb24udGltZWxpbmVzKTtcblxuICAgICAgICBjb25zdCB0dXBsZSA9IHtpbnN0cnVjdGlvbiwgcGxheWVyLCBlbGVtZW50fTtcblxuICAgICAgICBxdWV1ZWRJbnN0cnVjdGlvbnMucHVzaCh0dXBsZSk7XG5cbiAgICAgICAgaW5zdHJ1Y3Rpb24ucXVlcmllZEVsZW1lbnRzLmZvckVhY2goXG4gICAgICAgICAgICBlbGVtZW50ID0+IGdldE9yU2V0QXNJbk1hcChxdWVyaWVkRWxlbWVudHMsIGVsZW1lbnQsIFtdKS5wdXNoKHBsYXllcikpO1xuXG4gICAgICAgIGluc3RydWN0aW9uLnByZVN0eWxlUHJvcHMuZm9yRWFjaCgoc3RyaW5nTWFwLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHJpbmdNYXApO1xuICAgICAgICAgIGlmIChwcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBzZXRWYWw6IFNldDxzdHJpbmc+ID0gYWxsUHJlU3R5bGVFbGVtZW50cy5nZXQoZWxlbWVudCkhO1xuICAgICAgICAgICAgaWYgKCFzZXRWYWwpIHtcbiAgICAgICAgICAgICAgYWxsUHJlU3R5bGVFbGVtZW50cy5zZXQoZWxlbWVudCwgc2V0VmFsID0gbmV3IFNldDxzdHJpbmc+KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuZm9yRWFjaChwcm9wID0+IHNldFZhbC5hZGQocHJvcCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5zdHJ1Y3Rpb24ucG9zdFN0eWxlUHJvcHMuZm9yRWFjaCgoc3RyaW5nTWFwLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHJpbmdNYXApO1xuICAgICAgICAgIGxldCBzZXRWYWw6IFNldDxzdHJpbmc+ID0gYWxsUG9zdFN0eWxlRWxlbWVudHMuZ2V0KGVsZW1lbnQpITtcbiAgICAgICAgICBpZiAoIXNldFZhbCkge1xuICAgICAgICAgICAgYWxsUG9zdFN0eWxlRWxlbWVudHMuc2V0KGVsZW1lbnQsIHNldFZhbCA9IG5ldyBTZXQ8c3RyaW5nPigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJvcHMuZm9yRWFjaChwcm9wID0+IHNldFZhbC5hZGQocHJvcCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlcnJvbmVvdXNUcmFuc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGVycm9uZW91c1RyYW5zaXRpb25zLmZvckVhY2goaW5zdHJ1Y3Rpb24gPT4ge1xuICAgICAgICBlcnJvcnMucHVzaChgQCR7aW5zdHJ1Y3Rpb24udHJpZ2dlck5hbWV9IGhhcyBmYWlsZWQgZHVlIHRvOlxcbmApO1xuICAgICAgICBpbnN0cnVjdGlvbi5lcnJvcnMhLmZvckVhY2goZXJyb3IgPT4gZXJyb3JzLnB1c2goYC0gJHtlcnJvcn1cXG5gKSk7XG4gICAgICB9KTtcblxuICAgICAgYWxsUGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBwbGF5ZXIuZGVzdHJveSgpKTtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoZXJyb3JzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGxQcmV2aW91c1BsYXllcnNNYXAgPSBuZXcgTWFwPGFueSwgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdPigpO1xuICAgIC8vIHRoaXMgbWFwIHdvcmtzIHRvIHRlbGwgd2hpY2ggZWxlbWVudCBpbiB0aGUgRE9NIHRyZWUgaXMgY29udGFpbmVkIGJ5XG4gICAgLy8gd2hpY2ggYW5pbWF0aW9uLiBGdXJ0aGVyIGRvd24gYmVsb3cgdGhpcyBtYXAgd2lsbCBnZXQgcG9wdWxhdGVkIG9uY2VcbiAgICAvLyB0aGUgcGxheWVycyBhcmUgYnVpbHQgYW5kIGluIGRvaW5nIHNvIGl0IGNhbiBlZmZpY2llbnRseSBmaWd1cmUgb3V0XG4gICAgLy8gaWYgYSBzdWIgcGxheWVyIGlzIHNraXBwZWQgZHVlIHRvIGEgcGFyZW50IHBsYXllciBoYXZpbmcgcHJpb3JpdHkuXG4gICAgY29uc3QgYW5pbWF0aW9uRWxlbWVudE1hcCA9IG5ldyBNYXA8YW55LCBhbnk+KCk7XG4gICAgcXVldWVkSW5zdHJ1Y3Rpb25zLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVudHJ5LmVsZW1lbnQ7XG4gICAgICBpZiAoc3ViVGltZWxpbmVzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICBhbmltYXRpb25FbGVtZW50TWFwLnNldChlbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgdGhpcy5fYmVmb3JlQW5pbWF0aW9uQnVpbGQoXG4gICAgICAgICAgICBlbnRyeS5wbGF5ZXIubmFtZXNwYWNlSWQsIGVudHJ5Lmluc3RydWN0aW9uLCBhbGxQcmV2aW91c1BsYXllcnNNYXApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2tpcHBlZFBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHBsYXllci5lbGVtZW50O1xuICAgICAgY29uc3QgcHJldmlvdXNQbGF5ZXJzID1cbiAgICAgICAgICB0aGlzLl9nZXRQcmV2aW91c1BsYXllcnMoZWxlbWVudCwgZmFsc2UsIHBsYXllci5uYW1lc3BhY2VJZCwgcGxheWVyLnRyaWdnZXJOYW1lLCBudWxsKTtcbiAgICAgIHByZXZpb3VzUGxheWVycy5mb3JFYWNoKHByZXZQbGF5ZXIgPT4ge1xuICAgICAgICBnZXRPclNldEFzSW5NYXAoYWxsUHJldmlvdXNQbGF5ZXJzTWFwLCBlbGVtZW50LCBbXSkucHVzaChwcmV2UGxheWVyKTtcbiAgICAgICAgcHJldlBsYXllci5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMgaXMgYSBzcGVjaWFsIGNhc2UgZm9yIG5vZGVzIHRoYXQgd2lsbCBiZSByZW1vdmVkIChlaXRoZXIgYnkpXG4gICAgLy8gaGF2aW5nIHRoZWlyIG93biBsZWF2ZSBhbmltYXRpb25zIG9yIGJ5IGJlaW5nIHF1ZXJpZWQgaW4gYSBjb250YWluZXJcbiAgICAvLyB0aGF0IHdpbGwgYmUgcmVtb3ZlZCBvbmNlIGEgcGFyZW50IGFuaW1hdGlvbiBpcyBjb21wbGV0ZS4gVGhlIGlkZWFcbiAgICAvLyBoZXJlIGlzIHRoYXQgKiBzdHlsZXMgbXVzdCBiZSBpZGVudGljYWwgdG8gISBzdHlsZXMgYmVjYXVzZSBvZlxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5ICgqIGlzIGFsc28gZmlsbGVkIGluIGJ5IGRlZmF1bHQgaW4gbWFueSBwbGFjZXMpLlxuICAgIC8vIE90aGVyd2lzZSAqIHN0eWxlcyB3aWxsIHJldHVybiBhbiBlbXB0eSB2YWx1ZSBvciBhdXRvIHNpbmNlIHRoZSBlbGVtZW50XG4gICAgLy8gdGhhdCBpcyBiZWluZyBnZXRDb21wdXRlZFN0eWxlJ2Qgd2lsbCBub3QgYmUgdmlzaWJsZSAoc2luY2UgKiA9IGRlc3RpbmF0aW9uKVxuICAgIGNvbnN0IHJlcGxhY2VOb2RlcyA9IGFsbExlYXZlTm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgcmV0dXJuIHJlcGxhY2VQb3N0U3R5bGVzQXNQcmUobm9kZSwgYWxsUHJlU3R5bGVFbGVtZW50cywgYWxsUG9zdFN0eWxlRWxlbWVudHMpO1xuICAgIH0pO1xuXG4gICAgLy8gUE9TVCBTVEFHRTogZmlsbCB0aGUgKiBzdHlsZXNcbiAgICBjb25zdCBwb3N0U3R5bGVzTWFwID0gbmV3IE1hcDxhbnksIMm1U3R5bGVEYXRhPigpO1xuICAgIGNvbnN0IGFsbExlYXZlUXVlcmllZE5vZGVzID0gY2xvYWtBbmRDb21wdXRlU3R5bGVzKFxuICAgICAgICBwb3N0U3R5bGVzTWFwLCB0aGlzLmRyaXZlciwgbGVhdmVOb2Rlc1dpdGhvdXRBbmltYXRpb25zLCBhbGxQb3N0U3R5bGVFbGVtZW50cywgQVVUT19TVFlMRSk7XG5cbiAgICBhbGxMZWF2ZVF1ZXJpZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKHJlcGxhY2VQb3N0U3R5bGVzQXNQcmUobm9kZSwgYWxsUHJlU3R5bGVFbGVtZW50cywgYWxsUG9zdFN0eWxlRWxlbWVudHMpKSB7XG4gICAgICAgIHJlcGxhY2VOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUFJFIFNUQUdFOiBmaWxsIHRoZSAhIHN0eWxlc1xuICAgIGNvbnN0IHByZVN0eWxlc01hcCA9IG5ldyBNYXA8YW55LCDJtVN0eWxlRGF0YT4oKTtcbiAgICBlbnRlck5vZGVNYXAuZm9yRWFjaCgobm9kZXMsIHJvb3QpID0+IHtcbiAgICAgIGNsb2FrQW5kQ29tcHV0ZVN0eWxlcyhcbiAgICAgICAgICBwcmVTdHlsZXNNYXAsIHRoaXMuZHJpdmVyLCBuZXcgU2V0KG5vZGVzKSwgYWxsUHJlU3R5bGVFbGVtZW50cywgUFJFX1NUWUxFKTtcbiAgICB9KTtcblxuICAgIHJlcGxhY2VOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgY29uc3QgcG9zdCA9IHBvc3RTdHlsZXNNYXAuZ2V0KG5vZGUpO1xuICAgICAgY29uc3QgcHJlID0gcHJlU3R5bGVzTWFwLmdldChub2RlKTtcbiAgICAgIHBvc3RTdHlsZXNNYXAuc2V0KG5vZGUsIHsuLi5wb3N0LCAuLi5wcmV9IGFzIGFueSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByb290UGxheWVyczogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdID0gW107XG4gICAgY29uc3Qgc3ViUGxheWVyczogVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdID0gW107XG4gICAgY29uc3QgTk9fUEFSRU5UX0FOSU1BVElPTl9FTEVNRU5UX0RFVEVDVEVEID0ge307XG4gICAgcXVldWVkSW5zdHJ1Y3Rpb25zLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgY29uc3Qge2VsZW1lbnQsIHBsYXllciwgaW5zdHJ1Y3Rpb259ID0gZW50cnk7XG4gICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgaXQgd2FzIG5ldmVyIGNvbnN1bWVkIGJ5IGEgcGFyZW50IGFuaW1hdGlvbiB3aGljaFxuICAgICAgLy8gbWVhbnMgdGhhdCBpdCBpcyBpbmRlcGVuZGVudCBhbmQgdGhlcmVmb3JlIHNob3VsZCBiZSBzZXQgZm9yIGFuaW1hdGlvblxuICAgICAgaWYgKHN1YlRpbWVsaW5lcy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgaWYgKGRpc2FibGVkRWxlbWVudHNTZXQuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgcGxheWVyLm9uRGVzdHJveSgoKSA9PiBzZXRTdHlsZXMoZWxlbWVudCwgaW5zdHJ1Y3Rpb24udG9TdHlsZXMpKTtcbiAgICAgICAgICBwbGF5ZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHBsYXllci5vdmVycmlkZVRvdGFsVGltZShpbnN0cnVjdGlvbi50b3RhbFRpbWUpO1xuICAgICAgICAgIHNraXBwZWRQbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIHdpbGwgZmxvdyB1cCB0aGUgRE9NIGFuZCBxdWVyeSB0aGUgbWFwIHRvIGZpZ3VyZSBvdXRcbiAgICAgICAgLy8gaWYgYSBwYXJlbnQgYW5pbWF0aW9uIGhhcyBwcmlvcml0eSBvdmVyIGl0LiBJbiB0aGUgc2l0dWF0aW9uXG4gICAgICAgIC8vIHRoYXQgYSBwYXJlbnQgaXMgZGV0ZWN0ZWQgdGhlbiBpdCB3aWxsIGNhbmNlbCB0aGUgbG9vcC4gSWZcbiAgICAgICAgLy8gbm90aGluZyBpcyBkZXRlY3RlZCwgb3IgaXQgdGFrZXMgYSBmZXcgaG9wcyB0byBmaW5kIGEgcGFyZW50LFxuICAgICAgICAvLyB0aGVuIGl0IHdpbGwgZmlsbCBpbiB0aGUgbWlzc2luZyBub2RlcyBhbmQgc2lnbmFsIHRoZW0gYXMgaGF2aW5nXG4gICAgICAgIC8vIGEgZGV0ZWN0ZWQgcGFyZW50IChvciBhIE5PX1BBUkVOVCB2YWx1ZSB2aWEgYSBzcGVjaWFsIGNvbnN0YW50KS5cbiAgICAgICAgbGV0IHBhcmVudFdpdGhBbmltYXRpb246IGFueSA9IE5PX1BBUkVOVF9BTklNQVRJT05fRUxFTUVOVF9ERVRFQ1RFRDtcbiAgICAgICAgaWYgKGFuaW1hdGlvbkVsZW1lbnRNYXAuc2l6ZSA+IDEpIHtcbiAgICAgICAgICBsZXQgZWxtID0gZWxlbWVudDtcbiAgICAgICAgICBjb25zdCBwYXJlbnRzVG9BZGQ6IGFueVtdID0gW107XG4gICAgICAgICAgd2hpbGUgKGVsbSA9IGVsbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZFBhcmVudCA9IGFuaW1hdGlvbkVsZW1lbnRNYXAuZ2V0KGVsbSk7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0ZWRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgcGFyZW50V2l0aEFuaW1hdGlvbiA9IGRldGVjdGVkUGFyZW50O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudHNUb0FkZC5wdXNoKGVsbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudHNUb0FkZC5mb3JFYWNoKHBhcmVudCA9PiBhbmltYXRpb25FbGVtZW50TWFwLnNldChwYXJlbnQsIHBhcmVudFdpdGhBbmltYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlubmVyUGxheWVyID0gdGhpcy5fYnVpbGRBbmltYXRpb24oXG4gICAgICAgICAgICBwbGF5ZXIubmFtZXNwYWNlSWQsIGluc3RydWN0aW9uLCBhbGxQcmV2aW91c1BsYXllcnNNYXAsIHNraXBwZWRQbGF5ZXJzTWFwLCBwcmVTdHlsZXNNYXAsXG4gICAgICAgICAgICBwb3N0U3R5bGVzTWFwKTtcblxuICAgICAgICBwbGF5ZXIuc2V0UmVhbFBsYXllcihpbm5lclBsYXllcik7XG5cbiAgICAgICAgaWYgKHBhcmVudFdpdGhBbmltYXRpb24gPT09IE5PX1BBUkVOVF9BTklNQVRJT05fRUxFTUVOVF9ERVRFQ1RFRCkge1xuICAgICAgICAgIHJvb3RQbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnRQbGF5ZXJzID0gdGhpcy5wbGF5ZXJzQnlFbGVtZW50LmdldChwYXJlbnRXaXRoQW5pbWF0aW9uKTtcbiAgICAgICAgICBpZiAocGFyZW50UGxheWVycyAmJiBwYXJlbnRQbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGxheWVyLnBhcmVudFBsYXllciA9IG9wdGltaXplR3JvdXBQbGF5ZXIocGFyZW50UGxheWVycyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNraXBwZWRQbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJhc2VTdHlsZXMoZWxlbWVudCwgaW5zdHJ1Y3Rpb24uZnJvbVN0eWxlcyk7XG4gICAgICAgIHBsYXllci5vbkRlc3Ryb3koKCkgPT4gc2V0U3R5bGVzKGVsZW1lbnQsIGluc3RydWN0aW9uLnRvU3R5bGVzKSk7XG4gICAgICAgIC8vIHRoZXJlIHN0aWxsIG1pZ2h0IGJlIGEgYW5jZXN0b3IgcGxheWVyIGFuaW1hdGluZyB0aGlzXG4gICAgICAgIC8vIGVsZW1lbnQgdGhlcmVmb3JlIHdlIHdpbGwgc3RpbGwgYWRkIGl0IGFzIGEgc3ViIHBsYXllclxuICAgICAgICAvLyBldmVuIGlmIGl0cyBhbmltYXRpb24gbWF5IGJlIGRpc2FibGVkXG4gICAgICAgIHN1YlBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICBpZiAoZGlzYWJsZWRFbGVtZW50c1NldC5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICBza2lwcGVkUGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpbmQgYWxsIG9mIHRoZSBzdWIgcGxheWVycycgY29ycmVzcG9uZGluZyBpbm5lciBhbmltYXRpb24gcGxheWVyXG4gICAgc3ViUGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAvLyBldmVuIGlmIGFueSBwbGF5ZXJzIGFyZSBub3QgZm91bmQgZm9yIGEgc3ViIGFuaW1hdGlvbiB0aGVuIGl0XG4gICAgICAvLyB3aWxsIHN0aWxsIGNvbXBsZXRlIGl0c2VsZiBhZnRlciB0aGUgbmV4dCB0aWNrIHNpbmNlIGl0J3MgTm9vcFxuICAgICAgY29uc3QgcGxheWVyc0ZvckVsZW1lbnQgPSBza2lwcGVkUGxheWVyc01hcC5nZXQocGxheWVyLmVsZW1lbnQpO1xuICAgICAgaWYgKHBsYXllcnNGb3JFbGVtZW50ICYmIHBsYXllcnNGb3JFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbm5lclBsYXllciA9IG9wdGltaXplR3JvdXBQbGF5ZXIocGxheWVyc0ZvckVsZW1lbnQpO1xuICAgICAgICBwbGF5ZXIuc2V0UmVhbFBsYXllcihpbm5lclBsYXllcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0aGUgcmVhc29uIHdoeSB3ZSBkb24ndCBhY3R1YWxseSBwbGF5IHRoZSBhbmltYXRpb24gaXNcbiAgICAvLyBiZWNhdXNlIGFsbCB0aGF0IGEgc2tpcHBlZCBwbGF5ZXIgaXMgZGVzaWduZWQgdG8gZG8gaXMgdG9cbiAgICAvLyBmaXJlIHRoZSBzdGFydC9kb25lIHRyYW5zaXRpb24gY2FsbGJhY2sgZXZlbnRzXG4gICAgc2tpcHBlZFBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgaWYgKHBsYXllci5wYXJlbnRQbGF5ZXIpIHtcbiAgICAgICAgcGxheWVyLnN5bmNQbGF5ZXJFdmVudHMocGxheWVyLnBhcmVudFBsYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gcnVuIHRocm91Z2ggYWxsIG9mIHRoZSBxdWV1ZWQgcmVtb3ZhbHMgYW5kIHNlZSBpZiB0aGV5XG4gICAgLy8gd2VyZSBwaWNrZWQgdXAgYnkgYSBxdWVyeS4gSWYgbm90IHRoZW4gcGVyZm9ybSB0aGUgcmVtb3ZhbFxuICAgIC8vIG9wZXJhdGlvbiByaWdodCBhd2F5IHVubGVzcyBhIHBhcmVudCBhbmltYXRpb24gaXMgb25nb2luZy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExlYXZlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhbGxMZWF2ZU5vZGVzW2ldO1xuICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnRbUkVNT1ZBTF9GTEFHXSBhcyBFbGVtZW50QW5pbWF0aW9uU3RhdGU7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBMRUFWRV9DTEFTU05BTUUpO1xuXG4gICAgICAvLyB0aGlzIG1lYW5zIHRoZSBlbGVtZW50IGhhcyBhIHJlbW92YWwgYW5pbWF0aW9uIHRoYXQgaXMgYmVpbmdcbiAgICAgIC8vIHRha2VuIGNhcmUgb2YgYW5kIHRoZXJlZm9yZSB0aGUgaW5uZXIgZWxlbWVudHMgd2lsbCBoYW5nIGFyb3VuZFxuICAgICAgLy8gdW50aWwgdGhhdCBhbmltYXRpb24gaXMgb3ZlciAob3IgdGhlIHBhcmVudCBxdWVyaWVkIGFuaW1hdGlvbilcbiAgICAgIGlmIChkZXRhaWxzICYmIGRldGFpbHMuaGFzQW5pbWF0aW9uKSBjb250aW51ZTtcblxuICAgICAgbGV0IHBsYXllcnM6IFRyYW5zaXRpb25BbmltYXRpb25QbGF5ZXJbXSA9IFtdO1xuXG4gICAgICAvLyBpZiB0aGlzIGVsZW1lbnQgaXMgcXVlcmllZCBvciBpZiBpdCBjb250YWlucyBxdWVyaWVkIGNoaWxkcmVuXG4gICAgICAvLyB0aGVuIHdlIHdhbnQgZm9yIHRoZSBlbGVtZW50IG5vdCB0byBiZSByZW1vdmVkIGZyb20gdGhlIHBhZ2VcbiAgICAgIC8vIHVudGlsIHRoZSBxdWVyaWVkIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZFxuICAgICAgaWYgKHF1ZXJpZWRFbGVtZW50cy5zaXplKSB7XG4gICAgICAgIGxldCBxdWVyaWVkUGxheWVyUmVzdWx0cyA9IHF1ZXJpZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmIChxdWVyaWVkUGxheWVyUmVzdWx0cyAmJiBxdWVyaWVkUGxheWVyUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICBwbGF5ZXJzLnB1c2goLi4ucXVlcmllZFBsYXllclJlc3VsdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1ZXJpZWRJbm5lckVsZW1lbnRzID0gdGhpcy5kcml2ZXIucXVlcnkoZWxlbWVudCwgTkdfQU5JTUFUSU5HX1NFTEVDVE9SLCB0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVyaWVkSW5uZXJFbGVtZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBxdWVyaWVkUGxheWVycyA9IHF1ZXJpZWRFbGVtZW50cy5nZXQocXVlcmllZElubmVyRWxlbWVudHNbal0pO1xuICAgICAgICAgIGlmIChxdWVyaWVkUGxheWVycyAmJiBxdWVyaWVkUGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBsYXllcnMucHVzaCguLi5xdWVyaWVkUGxheWVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGl2ZVBsYXllcnMgPSBwbGF5ZXJzLmZpbHRlcihwID0+ICFwLmRlc3Ryb3llZCk7XG4gICAgICBpZiAoYWN0aXZlUGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXNBZnRlckFuaW1hdGlvbkRvbmUodGhpcywgZWxlbWVudCwgYWN0aXZlUGxheWVycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb2Nlc3NMZWF2ZU5vZGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCBzbyB0aGUgY2xlYW51cCBtZXRob2QgZG9lc24ndCByZW1vdmUgdGhlbVxuICAgIGFsbExlYXZlTm9kZXMubGVuZ3RoID0gMDtcblxuICAgIHJvb3RQbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgICBwbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgcGxheWVyLmRlc3Ryb3koKTtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGxheWVycy5pbmRleE9mKHBsYXllcik7XG4gICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvb3RQbGF5ZXJzO1xuICB9XG5cbiAgZWxlbWVudENvbnRhaW5zRGF0YShuYW1lc3BhY2VJZDogc3RyaW5nLCBlbGVtZW50OiBhbnkpIHtcbiAgICBsZXQgY29udGFpbnNEYXRhID0gZmFsc2U7XG4gICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnRbUkVNT1ZBTF9GTEFHXSBhcyBFbGVtZW50QW5pbWF0aW9uU3RhdGU7XG4gICAgaWYgKGRldGFpbHMgJiYgZGV0YWlscy5zZXRGb3JSZW1vdmFsKSBjb250YWluc0RhdGEgPSB0cnVlO1xuICAgIGlmICh0aGlzLnBsYXllcnNCeUVsZW1lbnQuaGFzKGVsZW1lbnQpKSBjb250YWluc0RhdGEgPSB0cnVlO1xuICAgIGlmICh0aGlzLnBsYXllcnNCeVF1ZXJpZWRFbGVtZW50LmhhcyhlbGVtZW50KSkgY29udGFpbnNEYXRhID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5zdGF0ZXNCeUVsZW1lbnQuaGFzKGVsZW1lbnQpKSBjb250YWluc0RhdGEgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLl9mZXRjaE5hbWVzcGFjZShuYW1lc3BhY2VJZCkuZWxlbWVudENvbnRhaW5zRGF0YShlbGVtZW50KSB8fCBjb250YWluc0RhdGE7XG4gIH1cblxuICBhZnRlckZsdXNoKGNhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICB0aGlzLl9mbHVzaEZucy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFmdGVyRmx1c2hBbmltYXRpb25zRG9uZShjYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgdGhpcy5fd2hlblF1aWV0Rm5zLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJldmlvdXNQbGF5ZXJzKFxuICAgICAgZWxlbWVudDogc3RyaW5nLCBpc1F1ZXJpZWRFbGVtZW50OiBib29sZWFuLCBuYW1lc3BhY2VJZD86IHN0cmluZywgdHJpZ2dlck5hbWU/OiBzdHJpbmcsXG4gICAgICB0b1N0YXRlVmFsdWU/OiBhbnkpOiBUcmFuc2l0aW9uQW5pbWF0aW9uUGxheWVyW10ge1xuICAgIGxldCBwbGF5ZXJzOiBUcmFuc2l0aW9uQW5pbWF0aW9uUGxheWVyW10gPSBbXTtcbiAgICBpZiAoaXNRdWVyaWVkRWxlbWVudCkge1xuICAgICAgY29uc3QgcXVlcmllZEVsZW1lbnRQbGF5ZXJzID0gdGhpcy5wbGF5ZXJzQnlRdWVyaWVkRWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICBpZiAocXVlcmllZEVsZW1lbnRQbGF5ZXJzKSB7XG4gICAgICAgIHBsYXllcnMgPSBxdWVyaWVkRWxlbWVudFBsYXllcnM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRQbGF5ZXJzID0gdGhpcy5wbGF5ZXJzQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgIGlmIChlbGVtZW50UGxheWVycykge1xuICAgICAgICBjb25zdCBpc1JlbW92YWxBbmltYXRpb24gPSAhdG9TdGF0ZVZhbHVlIHx8IHRvU3RhdGVWYWx1ZSA9PSBWT0lEX1ZBTFVFO1xuICAgICAgICBlbGVtZW50UGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgaWYgKHBsYXllci5xdWV1ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoIWlzUmVtb3ZhbEFuaW1hdGlvbiAmJiBwbGF5ZXIudHJpZ2dlck5hbWUgIT0gdHJpZ2dlck5hbWUpIHJldHVybjtcbiAgICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2VJZCB8fCB0cmlnZ2VyTmFtZSkge1xuICAgICAgcGxheWVycyA9IHBsYXllcnMuZmlsdGVyKHBsYXllciA9PiB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VJZCAmJiBuYW1lc3BhY2VJZCAhPSBwbGF5ZXIubmFtZXNwYWNlSWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRyaWdnZXJOYW1lICYmIHRyaWdnZXJOYW1lICE9IHBsYXllci50cmlnZ2VyTmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGxheWVycztcbiAgfVxuXG4gIHByaXZhdGUgX2JlZm9yZUFuaW1hdGlvbkJ1aWxkKFxuICAgICAgbmFtZXNwYWNlSWQ6IHN0cmluZywgaW5zdHJ1Y3Rpb246IEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvbixcbiAgICAgIGFsbFByZXZpb3VzUGxheWVyc01hcDogTWFwPGFueSwgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdPikge1xuICAgIGNvbnN0IHRyaWdnZXJOYW1lID0gaW5zdHJ1Y3Rpb24udHJpZ2dlck5hbWU7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBpbnN0cnVjdGlvbi5lbGVtZW50O1xuXG4gICAgLy8gd2hlbiBhIHJlbW92YWwgYW5pbWF0aW9uIG9jY3VycywgQUxMIHByZXZpb3VzIHBsYXllcnMgYXJlIGNvbGxlY3RlZFxuICAgIC8vIGFuZCBkZXN0cm95ZWQgKGV2ZW4gaWYgdGhleSBhcmUgb3V0c2lkZSBvZiB0aGUgY3VycmVudCBuYW1lc3BhY2UpXG4gICAgY29uc3QgdGFyZ2V0TmFtZVNwYWNlSWQ6IHN0cmluZ3x1bmRlZmluZWQgPVxuICAgICAgICBpbnN0cnVjdGlvbi5pc1JlbW92YWxUcmFuc2l0aW9uID8gdW5kZWZpbmVkIDogbmFtZXNwYWNlSWQ7XG4gICAgY29uc3QgdGFyZ2V0VHJpZ2dlck5hbWU6IHN0cmluZ3x1bmRlZmluZWQgPVxuICAgICAgICBpbnN0cnVjdGlvbi5pc1JlbW92YWxUcmFuc2l0aW9uID8gdW5kZWZpbmVkIDogdHJpZ2dlck5hbWU7XG5cbiAgICBmb3IgKGNvbnN0IHRpbWVsaW5lSW5zdHJ1Y3Rpb24gb2YgaW5zdHJ1Y3Rpb24udGltZWxpbmVzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGltZWxpbmVJbnN0cnVjdGlvbi5lbGVtZW50O1xuICAgICAgY29uc3QgaXNRdWVyaWVkRWxlbWVudCA9IGVsZW1lbnQgIT09IHJvb3RFbGVtZW50O1xuICAgICAgY29uc3QgcGxheWVycyA9IGdldE9yU2V0QXNJbk1hcChhbGxQcmV2aW91c1BsYXllcnNNYXAsIGVsZW1lbnQsIFtdKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVycyA9IHRoaXMuX2dldFByZXZpb3VzUGxheWVycyhcbiAgICAgICAgICBlbGVtZW50LCBpc1F1ZXJpZWRFbGVtZW50LCB0YXJnZXROYW1lU3BhY2VJZCwgdGFyZ2V0VHJpZ2dlck5hbWUsIGluc3RydWN0aW9uLnRvU3RhdGUpO1xuICAgICAgcHJldmlvdXNQbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgY29uc3QgcmVhbFBsYXllciA9IChwbGF5ZXIgYXMgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcikuZ2V0UmVhbFBsYXllcigpIGFzIGFueTtcbiAgICAgICAgaWYgKHJlYWxQbGF5ZXIuYmVmb3JlRGVzdHJveSkge1xuICAgICAgICAgIHJlYWxQbGF5ZXIuYmVmb3JlRGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBuZWVkcyB0byBiZSBkb25lIHNvIHRoYXQgdGhlIFBSRS9QT1NUIHN0eWxlcyBjYW4gYmVcbiAgICAvLyBjb21wdXRlZCBwcm9wZXJseSB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIHByZXZpb3VzIGFuaW1hdGlvblxuICAgIGVyYXNlU3R5bGVzKHJvb3RFbGVtZW50LCBpbnN0cnVjdGlvbi5mcm9tU3R5bGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkQW5pbWF0aW9uKFxuICAgICAgbmFtZXNwYWNlSWQ6IHN0cmluZywgaW5zdHJ1Y3Rpb246IEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvbixcbiAgICAgIGFsbFByZXZpb3VzUGxheWVyc01hcDogTWFwPGFueSwgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllcltdPixcbiAgICAgIHNraXBwZWRQbGF5ZXJzTWFwOiBNYXA8YW55LCBBbmltYXRpb25QbGF5ZXJbXT4sIHByZVN0eWxlc01hcDogTWFwPGFueSwgybVTdHlsZURhdGE+LFxuICAgICAgcG9zdFN0eWxlc01hcDogTWFwPGFueSwgybVTdHlsZURhdGE+KTogQW5pbWF0aW9uUGxheWVyIHtcbiAgICBjb25zdCB0cmlnZ2VyTmFtZSA9IGluc3RydWN0aW9uLnRyaWdnZXJOYW1lO1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gaW5zdHJ1Y3Rpb24uZWxlbWVudDtcblxuICAgIC8vIHdlIGZpcnN0IHJ1biB0aGlzIHNvIHRoYXQgdGhlIHByZXZpb3VzIGFuaW1hdGlvbiBwbGF5ZXJcbiAgICAvLyBkYXRhIGNhbiBiZSBwYXNzZWQgaW50byB0aGUgc3VjY2Vzc2l2ZSBhbmltYXRpb24gcGxheWVyc1xuICAgIGNvbnN0IGFsbFF1ZXJpZWRQbGF5ZXJzOiBUcmFuc2l0aW9uQW5pbWF0aW9uUGxheWVyW10gPSBbXTtcbiAgICBjb25zdCBhbGxDb25zdW1lZEVsZW1lbnRzID0gbmV3IFNldDxhbnk+KCk7XG4gICAgY29uc3QgYWxsU3ViRWxlbWVudHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBjb25zdCBhbGxOZXdQbGF5ZXJzID0gaW5zdHJ1Y3Rpb24udGltZWxpbmVzLm1hcCh0aW1lbGluZUluc3RydWN0aW9uID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aW1lbGluZUluc3RydWN0aW9uLmVsZW1lbnQ7XG4gICAgICBhbGxDb25zdW1lZEVsZW1lbnRzLmFkZChlbGVtZW50KTtcblxuICAgICAgLy8gRklYTUUgKG1hdHNrbyk6IG1ha2Ugc3VyZSB0by1iZS1yZW1vdmVkIGFuaW1hdGlvbnMgYXJlIHJlbW92ZWQgcHJvcGVybHlcbiAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50W1JFTU9WQUxfRkxBR107XG4gICAgICBpZiAoZGV0YWlscyAmJiBkZXRhaWxzLnJlbW92ZWRCZWZvcmVRdWVyaWVkKVxuICAgICAgICByZXR1cm4gbmV3IE5vb3BBbmltYXRpb25QbGF5ZXIodGltZWxpbmVJbnN0cnVjdGlvbi5kdXJhdGlvbiwgdGltZWxpbmVJbnN0cnVjdGlvbi5kZWxheSk7XG5cbiAgICAgIGNvbnN0IGlzUXVlcmllZEVsZW1lbnQgPSBlbGVtZW50ICE9PSByb290RWxlbWVudDtcbiAgICAgIGNvbnN0IHByZXZpb3VzUGxheWVycyA9XG4gICAgICAgICAgZmxhdHRlbkdyb3VwUGxheWVycygoYWxsUHJldmlvdXNQbGF5ZXJzTWFwLmdldChlbGVtZW50KSB8fCBFTVBUWV9QTEFZRVJfQVJSQVkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChwID0+IHAuZ2V0UmVhbFBsYXllcigpKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihwID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgYGVsZW1lbnRgIGlzIG5vdCBhcGFydCBvZiB0aGUgQW5pbWF0aW9uUGxheWVyIGRlZmluaXRpb24sIGJ1dFxuICAgICAgICAgICAgICAgIC8vIE1vY2svV2ViQW5pbWF0aW9uc1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgZWxlbWVudCB3aXRoaW4gdGhlaXIgaW1wbGVtZW50YXRpb24uIFRoaXMgd2lsbCBiZSBhZGRlZCBpbiBBbmd1bGFyNSB0b1xuICAgICAgICAgICAgICAgIC8vIEFuaW1hdGlvblBsYXllclxuICAgICAgICAgICAgICAgIGNvbnN0IHBwID0gcCBhcyBhbnk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBwLmVsZW1lbnQgPyBwcC5lbGVtZW50ID09PSBlbGVtZW50IDogZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmVTdHlsZXMgPSBwcmVTdHlsZXNNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgY29uc3QgcG9zdFN0eWxlcyA9IHBvc3RTdHlsZXNNYXAuZ2V0KGVsZW1lbnQpO1xuICAgICAgY29uc3Qga2V5ZnJhbWVzID0gbm9ybWFsaXplS2V5ZnJhbWVzKFxuICAgICAgICAgIHRoaXMuZHJpdmVyLCB0aGlzLl9ub3JtYWxpemVyLCBlbGVtZW50LCB0aW1lbGluZUluc3RydWN0aW9uLmtleWZyYW1lcywgcHJlU3R5bGVzLFxuICAgICAgICAgIHBvc3RTdHlsZXMpO1xuICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5fYnVpbGRQbGF5ZXIodGltZWxpbmVJbnN0cnVjdGlvbiwga2V5ZnJhbWVzLCBwcmV2aW91c1BsYXllcnMpO1xuXG4gICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgdGhpcyBwYXJ0aWN1bGFyIHBsYXllciBiZWxvbmdzIHRvIGEgc3ViIHRyaWdnZXIuIEl0IGlzXG4gICAgICAvLyBpbXBvcnRhbnQgdGhhdCB3ZSBtYXRjaCB0aGlzIHBsYXllciB1cCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIChAdHJpZ2dlci5saXN0ZW5lcilcbiAgICAgIGlmICh0aW1lbGluZUluc3RydWN0aW9uLnN1YlRpbWVsaW5lICYmIHNraXBwZWRQbGF5ZXJzTWFwKSB7XG4gICAgICAgIGFsbFN1YkVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUXVlcmllZEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFBsYXllciA9IG5ldyBUcmFuc2l0aW9uQW5pbWF0aW9uUGxheWVyKG5hbWVzcGFjZUlkLCB0cmlnZ2VyTmFtZSwgZWxlbWVudCk7XG4gICAgICAgIHdyYXBwZWRQbGF5ZXIuc2V0UmVhbFBsYXllcihwbGF5ZXIpO1xuICAgICAgICBhbGxRdWVyaWVkUGxheWVycy5wdXNoKHdyYXBwZWRQbGF5ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGxheWVyO1xuICAgIH0pO1xuXG4gICAgYWxsUXVlcmllZFBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgZ2V0T3JTZXRBc0luTWFwKHRoaXMucGxheWVyc0J5UXVlcmllZEVsZW1lbnQsIHBsYXllci5lbGVtZW50LCBbXSkucHVzaChwbGF5ZXIpO1xuICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiBkZWxldGVPclVuc2V0SW5NYXAodGhpcy5wbGF5ZXJzQnlRdWVyaWVkRWxlbWVudCwgcGxheWVyLmVsZW1lbnQsIHBsYXllcikpO1xuICAgIH0pO1xuXG4gICAgYWxsQ29uc3VtZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gYWRkQ2xhc3MoZWxlbWVudCwgTkdfQU5JTUFUSU5HX0NMQVNTTkFNRSkpO1xuICAgIGNvbnN0IHBsYXllciA9IG9wdGltaXplR3JvdXBQbGF5ZXIoYWxsTmV3UGxheWVycyk7XG4gICAgcGxheWVyLm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICBhbGxDb25zdW1lZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiByZW1vdmVDbGFzcyhlbGVtZW50LCBOR19BTklNQVRJTkdfQ0xBU1NOQU1FKSk7XG4gICAgICBzZXRTdHlsZXMocm9vdEVsZW1lbnQsIGluc3RydWN0aW9uLnRvU3R5bGVzKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMgYmFzaWNhbGx5IG1ha2VzIGFsbCBvZiB0aGUgY2FsbGJhY2tzIGZvciBzdWIgZWxlbWVudCBhbmltYXRpb25zXG4gICAgLy8gYmUgZGVwZW5kZW50IG9uIHRoZSB1cHBlciBwbGF5ZXJzIGZvciB3aGVuIHRoZXkgZmluaXNoXG4gICAgYWxsU3ViRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGdldE9yU2V0QXNJbk1hcChza2lwcGVkUGxheWVyc01hcCwgZWxlbWVudCwgW10pLnB1c2gocGxheWVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwbGF5ZXI7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFBsYXllcihcbiAgICAgIGluc3RydWN0aW9uOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uLCBrZXlmcmFtZXM6IMm1U3R5bGVEYXRhW10sXG4gICAgICBwcmV2aW91c1BsYXllcnM6IEFuaW1hdGlvblBsYXllcltdKTogQW5pbWF0aW9uUGxheWVyIHtcbiAgICBpZiAoa2V5ZnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmRyaXZlci5hbmltYXRlKFxuICAgICAgICAgIGluc3RydWN0aW9uLmVsZW1lbnQsIGtleWZyYW1lcywgaW5zdHJ1Y3Rpb24uZHVyYXRpb24sIGluc3RydWN0aW9uLmRlbGF5LFxuICAgICAgICAgIGluc3RydWN0aW9uLmVhc2luZywgcHJldmlvdXNQbGF5ZXJzKTtcbiAgICB9XG5cbiAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIHdoZW4gYW4gZW1wdHkgdHJhbnNpdGlvbnxkZWZpbml0aW9uIGlzIHByb3ZpZGVkXG4gICAgLy8gLi4uIHRoZXJlIGlzIG5vIHBvaW50IGluIHJlbmRlcmluZyBhbiBlbXB0eSBhbmltYXRpb25cbiAgICByZXR1cm4gbmV3IE5vb3BBbmltYXRpb25QbGF5ZXIoaW5zdHJ1Y3Rpb24uZHVyYXRpb24sIGluc3RydWN0aW9uLmRlbGF5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbkFuaW1hdGlvblBsYXllciBpbXBsZW1lbnRzIEFuaW1hdGlvblBsYXllciB7XG4gIHByaXZhdGUgX3BsYXllcjogQW5pbWF0aW9uUGxheWVyID0gbmV3IE5vb3BBbmltYXRpb25QbGF5ZXIoKTtcbiAgcHJpdmF0ZSBfY29udGFpbnNSZWFsUGxheWVyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcXVldWVkQ2FsbGJhY2tzOiB7W25hbWU6IHN0cmluZ106ICgoKSA9PiBhbnkpW119ID0ge307XG4gIHB1YmxpYyByZWFkb25seSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHB1YmxpYyBwYXJlbnRQbGF5ZXIhOiBBbmltYXRpb25QbGF5ZXI7XG5cbiAgcHVibGljIG1hcmtlZEZvckRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgcXVldWVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHJlYWRvbmx5IHRvdGFsVGltZTogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZXNwYWNlSWQ6IHN0cmluZywgcHVibGljIHRyaWdnZXJOYW1lOiBzdHJpbmcsIHB1YmxpYyBlbGVtZW50OiBhbnkpIHt9XG5cbiAgc2V0UmVhbFBsYXllcihwbGF5ZXI6IEFuaW1hdGlvblBsYXllcikge1xuICAgIGlmICh0aGlzLl9jb250YWluc1JlYWxQbGF5ZXIpIHJldHVybjtcblxuICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9xdWV1ZWRDYWxsYmFja3MpLmZvckVhY2gocGhhc2UgPT4ge1xuICAgICAgdGhpcy5fcXVldWVkQ2FsbGJhY2tzW3BoYXNlXS5mb3JFYWNoKFxuICAgICAgICAgIGNhbGxiYWNrID0+IGxpc3Rlbk9uUGxheWVyKHBsYXllciwgcGhhc2UsIHVuZGVmaW5lZCwgY2FsbGJhY2spKTtcbiAgICB9KTtcbiAgICB0aGlzLl9xdWV1ZWRDYWxsYmFja3MgPSB7fTtcbiAgICB0aGlzLl9jb250YWluc1JlYWxQbGF5ZXIgPSB0cnVlO1xuICAgIHRoaXMub3ZlcnJpZGVUb3RhbFRpbWUocGxheWVyLnRvdGFsVGltZSk7XG4gICAgKHRoaXMgYXMge3F1ZXVlZDogYm9vbGVhbn0pLnF1ZXVlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0UmVhbFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyO1xuICB9XG5cbiAgb3ZlcnJpZGVUb3RhbFRpbWUodG90YWxUaW1lOiBudW1iZXIpIHtcbiAgICAodGhpcyBhcyBhbnkpLnRvdGFsVGltZSA9IHRvdGFsVGltZTtcbiAgfVxuXG4gIHN5bmNQbGF5ZXJFdmVudHMocGxheWVyOiBBbmltYXRpb25QbGF5ZXIpIHtcbiAgICBjb25zdCBwID0gdGhpcy5fcGxheWVyIGFzIGFueTtcbiAgICBpZiAocC50cmlnZ2VyQ2FsbGJhY2spIHtcbiAgICAgIHBsYXllci5vblN0YXJ0KCgpID0+IHAudHJpZ2dlckNhbGxiYWNrISgnc3RhcnQnKSk7XG4gICAgfVxuICAgIHBsYXllci5vbkRvbmUoKCkgPT4gdGhpcy5maW5pc2goKSk7XG4gICAgcGxheWVyLm9uRGVzdHJveSgoKSA9PiB0aGlzLmRlc3Ryb3koKSk7XG4gIH1cblxuICBwcml2YXRlIF9xdWV1ZUV2ZW50KG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgICBnZXRPclNldEFzSW5NYXAodGhpcy5fcXVldWVkQ2FsbGJhY2tzLCBuYW1lLCBbXSkucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBvbkRvbmUoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5xdWV1ZWQpIHtcbiAgICAgIHRoaXMuX3F1ZXVlRXZlbnQoJ2RvbmUnLCBmbik7XG4gICAgfVxuICAgIHRoaXMuX3BsYXllci5vbkRvbmUoZm4pO1xuICB9XG5cbiAgb25TdGFydChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnF1ZXVlZCkge1xuICAgICAgdGhpcy5fcXVldWVFdmVudCgnc3RhcnQnLCBmbik7XG4gICAgfVxuICAgIHRoaXMuX3BsYXllci5vblN0YXJ0KGZuKTtcbiAgfVxuXG4gIG9uRGVzdHJveShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnF1ZXVlZCkge1xuICAgICAgdGhpcy5fcXVldWVFdmVudCgnZGVzdHJveScsIGZuKTtcbiAgICB9XG4gICAgdGhpcy5fcGxheWVyLm9uRGVzdHJveShmbik7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3BsYXllci5pbml0KCk7XG4gIH1cblxuICBoYXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlZCA/IGZhbHNlIDogdGhpcy5fcGxheWVyLmhhc1N0YXJ0ZWQoKTtcbiAgfVxuXG4gIHBsYXkoKTogdm9pZCB7XG4gICAgIXRoaXMucXVldWVkICYmIHRoaXMuX3BsYXllci5wbGF5KCk7XG4gIH1cblxuICBwYXVzZSgpOiB2b2lkIHtcbiAgICAhdGhpcy5xdWV1ZWQgJiYgdGhpcy5fcGxheWVyLnBhdXNlKCk7XG4gIH1cblxuICByZXN0YXJ0KCk6IHZvaWQge1xuICAgICF0aGlzLnF1ZXVlZCAmJiB0aGlzLl9wbGF5ZXIucmVzdGFydCgpO1xuICB9XG5cbiAgZmluaXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX3BsYXllci5maW5pc2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgKHRoaXMgYXMge2Rlc3Ryb3llZDogYm9vbGVhbn0pLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5fcGxheWVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgICF0aGlzLnF1ZXVlZCAmJiB0aGlzLl9wbGF5ZXIucmVzZXQoKTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHA6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5xdWV1ZWQpIHtcbiAgICAgIHRoaXMuX3BsYXllci5zZXRQb3NpdGlvbihwKTtcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlZCA/IDAgOiB0aGlzLl9wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdHJpZ2dlckNhbGxiYWNrKHBoYXNlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IHRoaXMuX3BsYXllciBhcyBhbnk7XG4gICAgaWYgKHAudHJpZ2dlckNhbGxiYWNrKSB7XG4gICAgICBwLnRyaWdnZXJDYWxsYmFjayhwaGFzZU5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVPclVuc2V0SW5NYXAobWFwOiBNYXA8YW55LCBhbnlbXT58e1trZXk6IHN0cmluZ106IGFueX0sIGtleTogYW55LCB2YWx1ZTogYW55KSB7XG4gIGxldCBjdXJyZW50VmFsdWVzOiBhbnlbXXxudWxsfHVuZGVmaW5lZDtcbiAgaWYgKG1hcCBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGN1cnJlbnRWYWx1ZXMgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGN1cnJlbnRWYWx1ZXMpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGN1cnJlbnRWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50VmFsdWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFZhbHVlcyA9IG1hcFtrZXldO1xuICAgIGlmIChjdXJyZW50VmFsdWVzKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBjdXJyZW50VmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFZhbHVlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICBkZWxldGUgbWFwW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjdXJyZW50VmFsdWVzO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUcmlnZ2VyVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gIC8vIHdlIHVzZSBgIT0gbnVsbGAgaGVyZSBiZWNhdXNlIGl0J3MgdGhlIG1vc3Qgc2ltcGxlXG4gIC8vIHdheSB0byB0ZXN0IGFnYWluc3QgYSBcImZhbHN5XCIgdmFsdWUgd2l0aG91dCBtaXhpbmdcbiAgLy8gaW4gZW1wdHkgc3RyaW5ncyBvciBhIHplcm8gdmFsdWUuIERPIE5PVCBPUFRJTUlaRS5cbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyB2YWx1ZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudE5vZGUobm9kZTogYW55KSB7XG4gIHJldHVybiBub2RlICYmIG5vZGVbJ25vZGVUeXBlJ10gPT09IDE7XG59XG5cbmZ1bmN0aW9uIGlzVHJpZ2dlckV2ZW50VmFsaWQoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGV2ZW50TmFtZSA9PSAnc3RhcnQnIHx8IGV2ZW50TmFtZSA9PSAnZG9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsb2FrRWxlbWVudChlbGVtZW50OiBhbnksIHZhbHVlPzogc3RyaW5nKSB7XG4gIGNvbnN0IG9sZFZhbHVlID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAnbm9uZSc7XG4gIHJldHVybiBvbGRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xvYWtBbmRDb21wdXRlU3R5bGVzKFxuICAgIHZhbHVlc01hcDogTWFwPGFueSwgybVTdHlsZURhdGE+LCBkcml2ZXI6IEFuaW1hdGlvbkRyaXZlciwgZWxlbWVudHM6IFNldDxhbnk+LFxuICAgIGVsZW1lbnRQcm9wc01hcDogTWFwPGFueSwgU2V0PHN0cmluZz4+LCBkZWZhdWx0U3R5bGU6IHN0cmluZyk6IGFueVtdIHtcbiAgY29uc3QgY2xvYWtWYWxzOiBzdHJpbmdbXSA9IFtdO1xuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gY2xvYWtWYWxzLnB1c2goY2xvYWtFbGVtZW50KGVsZW1lbnQpKSk7XG5cbiAgY29uc3QgZmFpbGVkRWxlbWVudHM6IGFueVtdID0gW107XG5cbiAgZWxlbWVudFByb3BzTWFwLmZvckVhY2goKHByb3BzOiBTZXQ8c3RyaW5nPiwgZWxlbWVudDogYW55KSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzOiDJtVN0eWxlRGF0YSA9IHt9O1xuICAgIHByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1twcm9wXSA9IGRyaXZlci5jb21wdXRlU3R5bGUoZWxlbWVudCwgcHJvcCwgZGVmYXVsdFN0eWxlKTtcblxuICAgICAgLy8gdGhlcmUgaXMgbm8gZWFzeSB3YXkgdG8gZGV0ZWN0IHRoaXMgYmVjYXVzZSBhIHN1YiBlbGVtZW50IGNvdWxkIGJlIHJlbW92ZWRcbiAgICAgIC8vIGJ5IGEgcGFyZW50IGFuaW1hdGlvbiBlbGVtZW50IGJlaW5nIGRldGFjaGVkLlxuICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICBlbGVtZW50W1JFTU9WQUxfRkxBR10gPSBOVUxMX1JFTU9WRURfUVVFUklFRF9TVEFURTtcbiAgICAgICAgZmFpbGVkRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YWx1ZXNNYXAuc2V0KGVsZW1lbnQsIHN0eWxlcyk7XG4gIH0pO1xuXG4gIC8vIHdlIHVzZSBhIGluZGV4IHZhcmlhYmxlIGhlcmUgc2luY2UgU2V0LmZvckVhY2goYSwgaSkgZG9lcyBub3QgcmV0dXJuXG4gIC8vIGFuIGluZGV4IHZhbHVlIGZvciB0aGUgY2xvc3VyZSAoYnV0IGluc3RlYWQganVzdCB0aGUgdmFsdWUpXG4gIGxldCBpID0gMDtcbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGNsb2FrRWxlbWVudChlbGVtZW50LCBjbG9ha1ZhbHNbaSsrXSkpO1xuXG4gIHJldHVybiBmYWlsZWRFbGVtZW50cztcbn1cblxuLypcblNpbmNlIHRoZSBBbmd1bGFyIHJlbmRlcmVyIGNvZGUgd2lsbCByZXR1cm4gYSBjb2xsZWN0aW9uIG9mIGluc2VydGVkXG5ub2RlcyBpbiBhbGwgYXJlYXMgb2YgYSBET00gdHJlZSwgaXQncyB1cCB0byB0aGlzIGFsZ29yaXRobSB0byBmaWd1cmVcbm91dCB3aGljaCBub2RlcyBhcmUgcm9vdHMgZm9yIGVhY2ggYW5pbWF0aW9uIEB0cmlnZ2VyLlxuXG5CeSBwbGFjaW5nIGVhY2ggaW5zZXJ0ZWQgbm9kZSBpbnRvIGEgU2V0IGFuZCB0cmF2ZXJzaW5nIHVwd2FyZHMsIGl0XG5pcyBwb3NzaWJsZSB0byBmaW5kIHRoZSBAdHJpZ2dlciBlbGVtZW50cyBhbmQgd2VsbCBhbnkgZGlyZWN0ICpzdGFyXG5pbnNlcnRpb24gbm9kZXMsIGlmIGEgQHRyaWdnZXIgcm9vdCBpcyBmb3VuZCB0aGVuIHRoZSBlbnRlciBlbGVtZW50XG5pcyBwbGFjZWQgaW50byB0aGUgTWFwW0B0cmlnZ2VyXSBzcG90LlxuICovXG5mdW5jdGlvbiBidWlsZFJvb3RNYXAocm9vdHM6IGFueVtdLCBub2RlczogYW55W10pOiBNYXA8YW55LCBhbnlbXT4ge1xuICBjb25zdCByb290TWFwID0gbmV3IE1hcDxhbnksIGFueVtdPigpO1xuICByb290cy5mb3JFYWNoKHJvb3QgPT4gcm9vdE1hcC5zZXQocm9vdCwgW10pKTtcblxuICBpZiAobm9kZXMubGVuZ3RoID09IDApIHJldHVybiByb290TWFwO1xuXG4gIGNvbnN0IE5VTExfTk9ERSA9IDE7XG4gIGNvbnN0IG5vZGVTZXQgPSBuZXcgU2V0KG5vZGVzKTtcbiAgY29uc3QgbG9jYWxSb290TWFwID0gbmV3IE1hcDxhbnksIGFueT4oKTtcblxuICBmdW5jdGlvbiBnZXRSb290KG5vZGU6IGFueSk6IGFueSB7XG4gICAgaWYgKCFub2RlKSByZXR1cm4gTlVMTF9OT0RFO1xuXG4gICAgbGV0IHJvb3QgPSBsb2NhbFJvb3RNYXAuZ2V0KG5vZGUpO1xuICAgIGlmIChyb290KSByZXR1cm4gcm9vdDtcblxuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocm9vdE1hcC5oYXMocGFyZW50KSkgeyAgLy8gbmdJZiBpbnNpZGUgQHRyaWdnZXJcbiAgICAgIHJvb3QgPSBwYXJlbnQ7XG4gICAgfSBlbHNlIGlmIChub2RlU2V0LmhhcyhwYXJlbnQpKSB7ICAvLyBuZ0lmIGluc2lkZSBuZ0lmXG4gICAgICByb290ID0gTlVMTF9OT0RFO1xuICAgIH0gZWxzZSB7ICAvLyByZWN1cnNlIHVwd2FyZHNcbiAgICAgIHJvb3QgPSBnZXRSb290KHBhcmVudCk7XG4gICAgfVxuXG4gICAgbG9jYWxSb290TWFwLnNldChub2RlLCByb290KTtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGdldFJvb3Qobm9kZSk7XG4gICAgaWYgKHJvb3QgIT09IE5VTExfTk9ERSkge1xuICAgICAgcm9vdE1hcC5nZXQocm9vdCkhLnB1c2gobm9kZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcm9vdE1hcDtcbn1cblxuY29uc3QgQ0xBU1NFU19DQUNIRV9LRVkgPSAnJCRjbGFzc2VzJztcbmZ1bmN0aW9uIGNvbnRhaW5zQ2xhc3MoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjbGFzc2VzID0gZWxlbWVudFtDTEFTU0VTX0NBQ0hFX0tFWV07XG4gICAgcmV0dXJuIGNsYXNzZXMgJiYgY2xhc3Nlc1tjbGFzc05hbWVdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQ6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNsYXNzZXM6IHtbY2xhc3NOYW1lOiBzdHJpbmddOiBib29sZWFufSA9IGVsZW1lbnRbQ0xBU1NFU19DQUNIRV9LRVldO1xuICAgIGlmICghY2xhc3Nlcykge1xuICAgICAgY2xhc3NlcyA9IGVsZW1lbnRbQ0xBU1NFU19DQUNIRV9LRVldID0ge307XG4gICAgfVxuICAgIGNsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2xhc3Nlczoge1tjbGFzc05hbWU6IHN0cmluZ106IGJvb2xlYW59ID0gZWxlbWVudFtDTEFTU0VTX0NBQ0hFX0tFWV07XG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgIGRlbGV0ZSBjbGFzc2VzW2NsYXNzTmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGVzQWZ0ZXJBbmltYXRpb25Eb25lKFxuICAgIGVuZ2luZTogVHJhbnNpdGlvbkFuaW1hdGlvbkVuZ2luZSwgZWxlbWVudDogYW55LCBwbGF5ZXJzOiBBbmltYXRpb25QbGF5ZXJbXSkge1xuICBvcHRpbWl6ZUdyb3VwUGxheWVyKHBsYXllcnMpLm9uRG9uZSgoKSA9PiBlbmdpbmUucHJvY2Vzc0xlYXZlTm9kZShlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Hcm91cFBsYXllcnMocGxheWVyczogQW5pbWF0aW9uUGxheWVyW10pOiBBbmltYXRpb25QbGF5ZXJbXSB7XG4gIGNvbnN0IGZpbmFsUGxheWVyczogQW5pbWF0aW9uUGxheWVyW10gPSBbXTtcbiAgX2ZsYXR0ZW5Hcm91cFBsYXllcnNSZWN1cihwbGF5ZXJzLCBmaW5hbFBsYXllcnMpO1xuICByZXR1cm4gZmluYWxQbGF5ZXJzO1xufVxuXG5mdW5jdGlvbiBfZmxhdHRlbkdyb3VwUGxheWVyc1JlY3VyKHBsYXllcnM6IEFuaW1hdGlvblBsYXllcltdLCBmaW5hbFBsYXllcnM6IEFuaW1hdGlvblBsYXllcltdKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnNbaV07XG4gICAgaWYgKHBsYXllciBpbnN0YW5jZW9mIEFuaW1hdGlvbkdyb3VwUGxheWVyKSB7XG4gICAgICBfZmxhdHRlbkdyb3VwUGxheWVyc1JlY3VyKHBsYXllci5wbGF5ZXJzLCBmaW5hbFBsYXllcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5hbFBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvYmpFcXVhbHMoYToge1trZXk6IHN0cmluZ106IGFueX0sIGI6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogYm9vbGVhbiB7XG4gIGNvbnN0IGsxID0gT2JqZWN0LmtleXMoYSk7XG4gIGNvbnN0IGsyID0gT2JqZWN0LmtleXMoYik7XG4gIGlmIChrMS5sZW5ndGggIT0gazIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgazEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gazFbaV07XG4gICAgaWYgKCFiLmhhc093blByb3BlcnR5KHByb3ApIHx8IGFbcHJvcF0gIT09IGJbcHJvcF0pIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVBvc3RTdHlsZXNBc1ByZShcbiAgICBlbGVtZW50OiBhbnksIGFsbFByZVN0eWxlRWxlbWVudHM6IE1hcDxhbnksIFNldDxzdHJpbmc+PixcbiAgICBhbGxQb3N0U3R5bGVFbGVtZW50czogTWFwPGFueSwgU2V0PHN0cmluZz4+KTogYm9vbGVhbiB7XG4gIGNvbnN0IHBvc3RFbnRyeSA9IGFsbFBvc3RTdHlsZUVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgaWYgKCFwb3N0RW50cnkpIHJldHVybiBmYWxzZTtcblxuICBsZXQgcHJlRW50cnkgPSBhbGxQcmVTdHlsZUVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgaWYgKHByZUVudHJ5KSB7XG4gICAgcG9zdEVudHJ5LmZvckVhY2goZGF0YSA9PiBwcmVFbnRyeSEuYWRkKGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICBhbGxQcmVTdHlsZUVsZW1lbnRzLnNldChlbGVtZW50LCBwb3N0RW50cnkpO1xuICB9XG5cbiAgYWxsUG9zdFN0eWxlRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==