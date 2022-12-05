import { useEffect, useRef } from "react";
import usePDFreader from "./utils/usePDFreader";
import url_pdf from "../../assets/226111-acces-securise-a-des-documents.pdf";

export default function Reader () {
    const canvasRef = useRef();
    const { pdfDoc, /*setURL*/ } = usePDFreader(url_pdf);
    
    useEffect(() => {
       if(pdfDoc) {
            (async () => {
                const page = await pdfDoc.getPage(1);
                
            })()
       } 
    }, [pdfDoc])

    return (
        <canvas className="canvas" ref={canvasRef}></canvas>
    ) ;
}  