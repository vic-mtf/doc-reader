import { useEffect, useMemo, useState } from "react";
import PDFLib from "./PDFLib";


export default function usePDFreader (url_) {
    const [pdfValues, setPdfValues] = useState({
        doc: null,
        url: url_,
    });
    const docId = useMemo(() => pdfValues.doc?._pdfInfo.fingerprints || null, [pdfValues]);
    useEffect(() => {
        const { url } = pdfValues;
        PDFLib.getDocument(url).promise.then(doc => {
            if(docId === null)
                setPdfValues({...pdfValues, doc});
        });
    },[pdfValues, docId]);

    return {
        pdfDoc: pdfValues.doc,
        setURL(url_) {
            const {url} = pdfValues;
            if(url !== url_) {
                setPdfValues({url: url_, doc: null});
            }
        }
    };
}