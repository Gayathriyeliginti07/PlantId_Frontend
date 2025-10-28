import { Button } from "./ui/button";
import { Leaf } from "lucide-react";

export function Header({ onLogoClick, showActions = true }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={onLogoClick}
          >
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">PlantID</h1>
              <p className="text-xs text-gray-500">
                Hybrid Identification System
              </p>
            </div>
          </div>

          {showActions && (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="ghost" size="sm">
                Help
              </Button>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}