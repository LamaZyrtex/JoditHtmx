import { Jodit } from 'jodit/esm';
import { INSERT_AS_HTML,} from 'jodit/esm/core/constants';
import no from 'jodit/esm/langs/no.js';
import 'jodit/esm/plugins/all.js';

export function createJoditEditor(selector: string, value?: string): Jodit {

    // Importer språkmodul
    Jodit.lang.no = no;

    // Lag editor
    const editorInstance = Jodit.make(selector, {
        language: 'no',
        height: 200,
        toolbarSticky: false,
        askBeforePasteHTML: false,
        beautifyHTML: true,
        defaultActionOnPaste: INSERT_AS_HTML,
        processPasteFromWord: true,
        askBeforePasteFromWord: false,
        defaultActionOnPasteFromWord: 'insert_clear_html',
        buttons: [
            'source', '|',
            'bold',
            'strikethrough',
            'underline',
            'italic', '|',
            'ul',
            'ol', '|',
            'font',
            'fontsize',
            'paragraph', '|',
            'table',
            'align', 'undo', 'redo', '|',
            'fullsize',
            'eraser'
        ],
        cleanHTML: {
            denyTags:   ['style','script','meta','link'],
            removeEmptyTags:       true,
            removeEmptyAttributes: true
          },
    } as any);

    editorInstance.value = value ?? '<p>Write something ..<p>';

    return editorInstance;
}