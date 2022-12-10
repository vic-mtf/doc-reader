import { useEffect, useMemo, useRef } from "react";
import usePDFreader from "../utils/usePDFreader";
import url_pdf from "../../assets/226111-acces-securise-a-des-documents.pdf";
import PdfPages from "./PdfPages";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function Reader () {
    const { pdfDoc, /*setURL*/ } = usePDFreader(url_pdf);
    const numPages = useMemo(() => pdfDoc?._pdfInfo.numPages, [pdfDoc]);
    const rootRef = useRef();

    return (
        <Box
            sx={{
                height: '98vh',
                overflow: 'auto',
                width: '100%',
                scrollBehavior: 'smooth',
                position: "relative"
            }}
        >
            <PdfPages
                numPage={numPages}
                pdfDoc={pdfDoc}
                zoom={100}
            /> 
            <Footer
                rootRef={rootRef}
            />
        </Box>
    ) ;
}  