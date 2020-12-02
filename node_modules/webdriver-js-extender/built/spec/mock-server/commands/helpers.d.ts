/**
 * Helpers for defining commands more quickly.
 *
 * In this file we define some helpers for quickly defining commands with either do nothing,
 * set/get a value on the session, or return a constant value.
 */
import { Command } from 'selenium-mock';
import { Session } from '../interfaces';
export declare function noopFactory(path: string, method?: 'GET' | 'POST' | 'DELETE' | 'PUT'): Command<Session>;
export declare function getterFactory(path: string, name?: string, method?: 'GET' | 'POST' | 'DELETE' | 'PUT'): Command<Session>;
export declare function setterFactory(path: string, name?: string, paramName?: string): Command<Session>;
export declare function constFactory(method: 'GET' | 'POST' | 'DELETE' | 'PUT', path: string, val: any): Command<Session>;
