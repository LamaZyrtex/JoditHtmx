import {Jodit} from 'jodit';
import no from 'jodit/esm/langs/no.js';  


export function createJoditEditor(selector: string, value?: string): Jodit {
 
    // Importer språkmodul
    Jodit.lang.no = no;

    // Lag editor
    const jodit = Jodit.make(selector, {
        language : 'no',
        height: 500,
        buttons: ['bold', 'italic', 'ul', 'ol', 'table', 'image', '|', 'source'],
        toolbarSticky: false,
        iframe: false,
        askBeforePasteHTML: false,
        askBeforePasteFromWord: false,
        });

        jodit.value = value ?? '<p>Skriv her ..<p>';

        return jodit;

}




