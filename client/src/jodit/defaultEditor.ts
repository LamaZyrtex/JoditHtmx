import {Jodit} from 'jodit';
import no from 'jodit/esm/langs/no.js';  


export function createJoditEditor(selector: string, value: string): void {
    // Importer språkmodul
    Jodit.lang.no = no;
    // Lag editor
    const jodit = Jodit.make(selector,{
        language : 'no'
     })
     // Sett verdi/innhold
    jodit.value = value;

}