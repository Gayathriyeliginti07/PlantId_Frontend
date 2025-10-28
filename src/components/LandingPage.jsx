import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, TreePine, Cherry, Camera, Zap, Shield } from "lucide-react";

export function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Hybrid Plant Identification System
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Hybrid model plant identification using multiple plant parts including bark and leaves for accurate species recognition.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={onGetStarted} size="lg" className="bg-green-600 hover:bg-green-700">
                  <Camera className="w-5 h-5 mr-2" />
                  Start Identification
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>90% Accuracy</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670502375817-7d404f7ade5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGxlYXZlcyUyMG5hdHVyZSUyMGdyZWVufGVufDF8fHx8MTc1Njc4OTU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Plant identification"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our hybrid model analyzes multiple plant characteristics for superior accuracy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Leaf Analysis</CardTitle>
              <CardDescription>
                Advanced shape, texture, and pattern recognition of leaf structures
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle>Bark Identification</CardTitle>
              <CardDescription>
                Detailed analysis of bark texture, color, and surface patterns
              </CardDescription>
            </CardHeader>
          </Card>

          {/* <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cherry className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle>Fruit Recognition</CardTitle>
              <CardDescription>
                Comprehensive fruit shape, size, and color analysis
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">10,000+</div>
              <div className="text-gray-600">Plant Species</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">90%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">1K+</div>
              <div className="text-gray-600">Identifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">&lt;10s</div>
              <div className="text-gray-600">Average Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}