import QRCode from "react-qr-code";

const QRCodePage = () => {
  const routes = [
    { path: "/workout1", label: "Workout 1" },
    { path: "/workout2", label: "Workout 2" },
    { path: "/workout3", label: "Workout 3" },
  ];

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">QR Codes for Routes</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {routes.map((route, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2"></h2>
            <QRCode value={window.location.origin + route.path} size={150} />
            <p className="text-sm text-gray-600 mt-2"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodePage;
