import './jodit.css.js';
import { createJoditEditor } from './defaultEditor.js';

type HTMLString = string;

interface IEditor {
	createEditorInSelector(selector: string, htmlValue: string): void;
}

declare global {
	interface Window {
		emlEditor: IEditor;
	}
}

window.emlEditor = { 
  createEditorInSelector:(selector: string, htmlValue: HTMLString) : void => {
    createJoditEditor(selector, htmlValue);
	},
}
