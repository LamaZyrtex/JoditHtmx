import './jodit.css.js';
import { createJoditEditor } from './defaultEditor.js';
import { Jodit } from 'jodit';

type HTMLString = string;

interface IEditor {
	createEditorInSelector(selector: string, htmlValue: string): Jodit;
}

declare global {
	interface Window {
		emlEditor: IEditor;
	}
}

window.emlEditor = { 
  createEditorInSelector:(selector: string, htmlValue: HTMLString) : Jodit => {
    return createJoditEditor(selector, htmlValue);
	},
}

