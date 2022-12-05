import { useEffect, useRef, useState } from "react";
import PDFLib from "./PDFLib";


export default function usePDFreader (url_) {

    const [pdfDoc, setPdf] = useState(null);
    const [pdfURL, setPdfURL]= useState(url_);
    const idRef = useRef(null);

    useEffect(() => {
        PDFLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        if(!pdfDoc && pdfURL)
            PDFLib.getDocument(pdfURL).promise.then(pdfDoc_ => {
                const { _pdfInfo:{ fingerprints } } = pdfDoc_;
                const [id] = fingerprints;
                if(idRef.current !== id) {
                    setPdf(pdfDoc_);
                    idRef.current = id;
                }
            });
    },[pdfDoc, setPdf, pdfURL]);

    return {
        pdfDoc,
        setURL(url) {
            setPdfURL(url)
        }
    };
}