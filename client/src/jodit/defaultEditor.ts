import { Jodit } from 'jodit';
import no from 'jodit/esm/langs/no.js';
import 'jodit/esm/plugins/all.js';


export function createJoditEditor(selector: string, value?: string): Jodit {

    // Importer språkmodul
    Jodit.lang.no = no;

    // Lag editor
    const jodit = Jodit.make(selector, {
        language: 'no',
        height: 500,
        // buttons: [
        //     'source', '|',
        //     'bold',
        //     'strikethrough',
        //     'underline',
        //     'italic', '|',
        //     'ul',
        //     'ol', '|',
        //     'outdent', 'indent', '|',
        //     'font',
        //     'fontsize',
        //     'brush',
        //     'paragraph', '|',
        //     'image',
        //     'video',
        //     'table',
        //     'link', '|',
        //     'align', 'undo', 'redo', '|',
        //     'hr',
        //     'eraser',
        //     'copyformat', '|',
        //     'symbol',
        //     'fullsize',
        //     'print',
        //     'about'
        // ],
        toolbarSticky: false,
        iframe: false,
        askBeforePasteHTML: false,
        askBeforePasteFromWord: false,
    });

    jodit.value = value ?? '<p>Skriv her ..<p>';

    return jodit;
}




