import './jodit.css.js';
import { initEditor } from './defaultEditor.js';

const ConstructEditor = (selector: string, htmlValue: string) => {
  initEditor(selector, htmlValue);
};

export default {
  ConstructEditor
};

(window as any).EMLEditor = { ConstructEditor };
