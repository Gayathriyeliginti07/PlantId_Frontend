import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Leaf, TreePine, ArrowLeft } from "lucide-react";

export function GlassmorphismUpload({ onNavigate, onBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 px-4">
      <div className="w-full max-w-3xl text-center">
        <Button
          variant="ghost"
          className="mb-4 text-gray-600 hover:text-green-700"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold text-green-700 mb-8">
          Upload Plant Parts for Identification
        </h1>

        {/* Cards vertically stacked */}
        <div className="flex flex-col items-center gap-6">
          {/* Leaf Upload Card */}
          <Card className="backdrop-blur-md bg-white/50 shadow-md border border-green-100 rounded-2xl p-4 w-full max-w-md">
            <CardContent className="flex flex-col items-center text-center space-y-3">
              <div className="bg-green-500 text-white p-3 rounded-full shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-semibold text-green-700">Leaf Upload</h2>
              <p className="text-gray-600 text-sm">
                Upload clear, focused leaf images for best results.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 mt-1"
                onClick={() => onNavigate("leaf")}
              >
                Go to Leaf Upload
              </Button>
            </CardContent>
          </Card>

          {/* Bark Upload Card */}
          <Card className="backdrop-blur-md bg-white/50 shadow-md border border-green-100 rounded-2xl p-4 w-full max-w-md">
            <CardContent className="flex flex-col items-center text-center space-y-3">
              <div className="bg-green-500 text-white p-3 rounded-full shadow-md">
                <TreePine className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-semibold text-green-700">Bark Upload</h2>
              <p className="text-gray-600 text-sm">
                Upload clear, focused bark images for best results.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 mt-1"
                onClick={() => onNavigate("bark")}
              >
                Go to Bark Upload
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
