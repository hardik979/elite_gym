import QRCode from "react-qr-code";

const QRCodePage = () => {
  const baseURL = window.location.origin; // Detects your deployed URL
  const routes = [
    { path: "/", label: "Double Muscle - Chest" },
    { path: "/workout2", label: "Double Muscle - Back" },
    { path: "/workout3", label: "Single Muscle - Back" },
    { path: "/workout4", label: "Single Muscle - Chest" },
  ];

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">QR Codes for Routes</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {routes.map((route, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{route.label}</h2>
            <QRCode value={`${baseURL}${route.path}`} size={200} />
            <p className="text-sm text-gray-600 mt-2"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodePage;
