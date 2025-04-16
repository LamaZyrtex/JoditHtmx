import {Jodit} from 'jodit';

export function initEditor1(selector: string): void {
    const jodit = Jodit.make('#editor1')
    console.log(jodit);
    console.log(selector);
}