import '//mozilla.github.io/pdf.js/build/pdf.js';
//import '//mozilla.github.io/pdf.js/web/viewer.css';
const PDFLib = window['pdfjs-dist/build/pdf'];
PDFLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
export const drawerWidth = 300;
export default PDFLib;