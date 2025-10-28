export default function HistoryPage() {
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('plantHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('plantHistory');
    setHistory([]);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Past Identifications</h1>
          {history.length > 0 && (
            <button onClick={clearHistory} className="text-red-600 text-sm">Clear History</button>
          )}
        </div>
        <div className="space-y-6">
          {history.length > 0 ? history.map((item, idx) => (
            <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="text-xs text-gray-500 mb-2">{item.timestamp}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.images.map((img,i)=>(
                  <img key={i} src={img.url} alt={`${img.type} ${i+1}`} className="w-24 h-24 object-cover rounded"/>
                ))}
              </div>
              {item.result && (
                <div>
                  <h2 className="text-xl font-semibold">{item.result.commonName}</h2>
                  <p className="italic text-gray-600">{item.result.scientificName}</p>
                  <p className="text-sm text-gray-500">Confidence: {item.result.confidence}%</p>
                </div>
              )}
            </div>
          )) : (
            <p className="text-gray-600">No history yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}