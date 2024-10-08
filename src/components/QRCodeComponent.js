import { QRCodeSVG } from 'qrcode.react';
const QRCodeComponent = ({ value }) => {
 
  return (
    <div className="qr-code">
      <h2>Scan to Join the Game</h2>
      <QRCodeSVG value={value} size={256} />
    </div>
  );
};

export default QRCodeComponent;
