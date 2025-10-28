import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function UploadPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eefbf5] flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
        Choose Upload Type
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <Card className="p-8 w-72 text-center shadow-md">
          <CardContent className="space-y-4">
            <img src="/leaf-icon.png" alt="Leaf" className="w-12 h-12 mx-auto" />
            <h2 className="text-xl font-bold text-green-700">Leaf Upload</h2>
            <Button className="w-full mt-4" onClick={() => navigate("/upload/leaf")}>
              Go to Leaf Upload
            </Button>
          </CardContent>
        </Card>

        <Card className="p-8 w-72 text-center shadow-md">
          <CardContent className="space-y-4">
            <img src="/bark-icon.png" alt="Bark" className="w-12 h-12 mx-auto" />
            <h2 className="text-xl font-bold text-amber-700">Bark Upload</h2>
            <Button className="w-full mt-4" onClick={() => navigate("/upload/bark")}>
              Go to Bark Upload
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
