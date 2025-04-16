import './jodit.css.js';
import { initEditor1 } from './defaultEditor.js';


document.addEventListener('DOMContentLoaded', () => {
  const selector = '#editor1';
  const htmlValue =  "<html><body>Hei</body></html>";
  initEditor1(selector, htmlValue);
});
