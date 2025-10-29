// import { useState } from "react";
// import axios from "axios";
// import { Button } from "./ui/button";
// import { ArrowLeft, Upload } from "lucide-react";

// export function LeafUpload({ onBack }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const handleFile = (f) => {
//     setFile(f);
//     setPreview(URL.createObjectURL(f));
//     setResult(null);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
//     else if (e.type === "dragleave") setDragActive(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     try {
//       const res = await axios.post("http://127.0.0.1:5000/predict_leaf", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch {
//       setResult({ error: "Prediction failed" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
//       <Button variant="ghost" className="mb-4 text-gray-600" onClick={onBack}>
//         <ArrowLeft className="w-4 h-4 mr-2" /> Back
//       </Button>
//       <div
//         onDragEnter={handleDrag}
//         className={`w-[28rem] p-8 rounded-xl bg-white shadow text-center transition border-2 relative ${
//           dragActive ? "border-green-500" : "border-dashed border-gray-300"
//         }`}
//       >
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           id="leaf-upload"
//           onChange={(e) => handleFile(e.target.files[0])}
//         />
//         <label htmlFor="leaf-upload" className="block cursor-pointer py-10 text-lg">
//           <Upload className="mx-auto mb-3" />
//           {file ? file.name : "+ Drag & Drop or Click to Upload Leaf Image"}
//         </label>
//         {dragActive && (
//           <div
//             className="absolute inset-0"
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//           />
//         )}
//         {preview && <img src={preview} className="w-48 mx-auto mt-4 rounded-lg" />}
//         <Button className="mt-4 bg-green-600" onClick={handleUpload} disabled={loading}>
//           {loading ? "Predicting..." : "Predict"}
//         </Button>
//       </div>

//       {result && (
//         <div className="mt-6 w-[28rem] bg-white shadow p-6 rounded-xl text-left">
//           {result.error ? (
//             <p className="text-red-600">{result.error}</p>
//           ) : (
//             <>
//               <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
//               <p><strong>Scientific Name:</strong> {result.scientific_name || "-"}</p>
//               <p><strong>Common Name:</strong> {result.common_name || "-"}</p>
//               <p><strong>Uses:</strong> {result.uses || "-"}</p>
//               <p><strong>Origin:</strong> {result.origin || "-"}</p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import axios from "axios";
// import { Button } from "./ui/button";
// import { ArrowLeft, Upload } from "lucide-react";

// export function LeafUpload({ onBack }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   // const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";
//   const baseURL = import.meta.env.VITE_BACKEND_URL;

//   const handleFile = (f) => {
//     setFile(f);
//     setPreview(URL.createObjectURL(f));
//     setResult(null);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
//     else if (e.type === "dragleave") setDragActive(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);
//     try {
//       const res = await axios.post(`${baseURL}/predict_leaf`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch {
//       setResult({ error: "Prediction failed" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
//       <Button variant="ghost" className="mb-4 text-gray-600" onClick={onBack}>
//         <ArrowLeft className="w-4 h-4 mr-2" /> Back
//       </Button>
//       <div
//         onDragEnter={handleDrag}
//         className={`w-[28rem] p-8 rounded-xl bg-white shadow text-center transition border-2 relative ${
//           dragActive ? "border-green-500" : "border-dashed border-gray-300"
//         }`}
//       >
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           id="leaf-upload"
//           onChange={(e) => handleFile(e.target.files[0])}
//         />
//         <label htmlFor="leaf-upload" className="block cursor-pointer py-10 text-lg">
//           <Upload className="mx-auto mb-3" />
//           {file ? file.name : "+ Drag & Drop or Click to Upload Leaf Image"}
//         </label>
//         {dragActive && (
//           <div
//             className="absolute inset-0"
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//           />
//         )}
//         {preview && <img src={preview} className="w-48 mx-auto mt-4 rounded-lg" />}
//         <Button className="mt-4 bg-green-600" onClick={handleUpload} disabled={loading}>
//           {loading ? "Predicting..." : "Predict"}
//         </Button>
//       </div>

//       {result && (
//         <div className="mt-6 w-[28rem] bg-white shadow p-6 rounded-xl text-left">
//           {result.error ? (
//             <p className="text-red-600">{result.error}</p>
//           ) : (
//             <>
//               <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
//               <p><strong>Scientific Name:</strong> {result.scientific_name || "-"}</p>
//               <p><strong>Common Name:</strong> {result.common_name || "-"}</p>
//               <p><strong>Uses:</strong> {result.uses || "-"}</p>
//               <p><strong>Origin:</strong> {result.origin || "-"}</p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import axios from "axios";
// import { Button } from "./ui/button";
// import { ArrowLeft, Upload } from "lucide-react";

// export function LeafUpload({ onBack }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const baseURL = import.meta.env.VITE_BACKEND_URL;

//   const handleFile = (f) => {
//     setFile(f);
//     setPreview(URL.createObjectURL(f));
//     setResult(null);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
//     else if (e.type === "dragleave") setDragActive(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post(`${baseURL}/predict_leaf`, formData);
//       setResult(res.data);
//     } catch {
//       setResult({ error: "Prediction failed" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
//       <Button variant="ghost" className="mb-4 text-gray-600" onClick={onBack}>
//         <ArrowLeft className="w-4 h-4 mr-2" /> Back
//       </Button>
//       <div
//         onDragEnter={handleDrag}
//         className={`w-[28rem] p-8 rounded-xl bg-white shadow text-center transition border-2 relative ${
//           dragActive ? "border-green-500" : "border-dashed border-gray-300"
//         }`}
//       >
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           id="leaf-upload"
//           onChange={(e) => handleFile(e.target.files[0])}
//         />
//         <label htmlFor="leaf-upload" className="block cursor-pointer py-10 text-lg">
//           <Upload className="mx-auto mb-3" />
//           {file ? file.name : "+ Drag & Drop or Click to Upload Leaf Image"}
//         </label>
//         {dragActive && (
//           <div
//             className="absolute inset-0"
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//           />
//         )}
//         {preview && <img src={preview} className="w-48 mx-auto mt-4 rounded-lg" />}
//         <Button className="mt-4 bg-green-600" onClick={handleUpload} disabled={loading}>
//           {loading ? "Predicting..." : "Predict"}
//         </Button>
//       </div>

//       {result && (
//         <div className="mt-6 w-[28rem] bg-white shadow p-6 rounded-xl text-left">
//           {result.error ? (
//             <p className="text-red-600">{result.error}</p>
//           ) : (
//             <>
//               <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
//               <p><strong>Scientific Name:</strong> {result.scientific_name || "-"}</p>
//               <p><strong>Common Name:</strong> {result.common_name || "-"}</p>
//               <p><strong>Uses:</strong> {result.uses || "-"}</p>
//               <p><strong>Origin:</strong> {result.origin || "-"}</p>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // Updated LeafUpload Component
// import { useState } from "react";
// import axios from "axios";
// import { Button } from "./ui/button";
// import { ArrowLeft, Upload } from "lucide-react";

// export function LeafUpload({ onBack }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const baseURL = import.meta.env.VITE_BACKEND_URL;

//   const handleFile = (f) => {
//     setFile(f);
//     setPreview(URL.createObjectURL(f));
//     setResult(null);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
//     else if (e.type === "dragleave") setDragActive(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post(`${baseURL}/predict_leaf`, formData);
//       setResult(res.data);
//     } catch {
//       setResult({ error: "Prediction failed" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatConfidence = (value) => value.toFixed(4);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
//       <Button variant="ghost" className="mb-4 text-gray-600" onClick={onBack}>
//         <ArrowLeft className="w-4 h-4 mr-2" /> Back
//       </Button>
//       <div
//         onDragEnter={handleDrag}
//         className={`w-[28rem] p-8 rounded-xl bg-white shadow text-center transition border-2 relative ${
//           dragActive ? "border-green-500" : "border-dashed border-gray-300"
//         }`}
//       >
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           id="leaf-upload"
//           onChange={(e) => handleFile(e.target.files[0])}
//         />
//         <label htmlFor="leaf-upload" className="block cursor-pointer py-10 text-lg">
//           <Upload className="mx-auto mb-3" />
//           {file ? file.name : "+ Drag & Drop or Click to Upload Leaf Image"}
//         </label>
//         {dragActive && (
//           <div
//             className="absolute inset-0"
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//           />
//         )}
//         {preview && <img src={preview} className="w-48 mx-auto mt-4 rounded-lg" />}
//         <Button className="mt-4 bg-green-600" onClick={handleUpload} disabled={loading}>
//           {loading ? "Predicting..." : "Predict"}
//         </Button>
//       </div>

//       {result && !result.error && (
//         <div className="mt-6 w-[28rem] bg-white shadow p-6 rounded-xl text-left">
//           <h2 className="text-xl font-semibold mb-2">Best Prediction:</h2>
//           <p><strong>scientific_name:</strong> {result.best_prediction?.scientific_name || "-"}</p>
//           <p><strong>common_name:</strong> {result.best_prediction?.common_name || "-"}</p>
//           <p><strong>uses:</strong> {result.best_prediction?.uses || "-"}</p>
//           <p><strong>origin:</strong> {result.best_prediction?.origin || "-"}</p>

//           <h3 className="text-lg font-semibold mt-4">Top 5 Predictions:</h3>
//           <ul className="list-disc ml-5 mt-2">
//             {result.top_predictions?.map((pred, index) => (
//               <li key={index}>
//                 {index + 1}) {pred.scientific_name} — {formatConfidence(pred.confidence)}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {result && result.error && <p className="text-red-600 mt-4">{result.error}</p>}
//     </div>
//   );
// }
// LeafUpload.jsx (updated)
import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { ArrowLeft, Upload } from "lucide-react";

export function LeafUpload({ onBack }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const handleFile = (f) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${baseURL}/predict_leaf`, formData);
      setResult(res.data);
    } catch {
      setResult({ error: "Prediction failed" });
    } finally {
      setLoading(false);
    }
  };

  const formatConfidence = (value) => value.toFixed(4);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <Button variant="ghost" className="mb-4 text-gray-600" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>
      <div onDragEnter={handleDrag} className={`w-[28rem] p-8 rounded-xl bg-white shadow text-center transition border-2 relative ${dragActive ? "border-green-500" : "border-dashed border-gray-300"}`}>
        <input type="file" accept="image/*" className="hidden" id="leaf-upload" onChange={(e) => handleFile(e.target.files[0])} />
        <label htmlFor="leaf-upload" className="block cursor-pointer py-10 text-lg">
          <Upload className="mx-auto mb-3" />
          {file ? file.name : "+ Drag & Drop or Click to Upload Leaf Image"}
        </label>
        {dragActive && (
          <div className="absolute inset-0" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} />
        )}
        {preview && <img src={preview} className="w-48 mx-auto mt-4 rounded-lg" />}
        <Button className="mt-4 bg-green-600" onClick={handleUpload} disabled={loading}>
          {loading ? "Predicting..." : "Predict"}
        </Button>
      </div>

      {result && !result.error && (
        <div className="mt-6 w-[28rem] bg-white shadow p-6 rounded-xl text-left">
          <h2 className="text-xl font-semibold mb-2">Best Prediction:</h2>
          <p><strong>scientific_name:</strong> {result.best_prediction?.scientific_name || "-"}</p>
          <p><strong>common_name:</strong> {result.best_prediction?.common_name || "-"}</p>
          <p><strong>uses:</strong> {result.best_prediction?.uses || "-"}</p>
          <p><strong>origin:</strong> {result.best_prediction?.origin || "-"}</p>

          <h3 className="text-lg font-semibold mt-4">Top 5 Predictions:</h3>
          <ul className="list-disc ml-5 mt-2">
            {result.top_predictions?.map((pred, index) => (
              <li key={index}>
                {index + 1}) {pred.scientific_name} — {formatConfidence(pred.confidence)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {result && result.error && <p className="text-red-600 mt-4">{result.error}</p>}
    </div>
  );
}

