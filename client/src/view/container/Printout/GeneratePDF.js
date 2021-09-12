import jsPDF from "jspdf";
import * as html2canvas from "html2canvas";
import { Button, Tooltip } from "@material-ui/core";

const GeneratePDF = () => {
  const handlePdf = () => {
    const input = document.getElementById(`page`);
    html2canvas(input).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm", "a4");
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("dinnerplanner.pdf");
    });
  };

  return (
    <Tooltip title="Generate PDF of the menu" aria-label="print">
      <Button
        size="medium"
        onClick={() => handlePdf()}
        color="secondary"
        variant="contained"
      >
        Generate PDF
      </Button>
    </Tooltip>
  );
};

export default GeneratePDF;
