import {Jodit} from 'jodit';

export function initEditor1(selector: string, value: string): void {
    const jodit = Jodit.make(selector)
    jodit.value = value
}