import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { Leaf, Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ModernNavbar({ onLogoClick, onNavigate, currentPage = 'home' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'upload', label: 'Upload' },
    { id: 'results', label: 'Browse' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const ThemeIcon = theme === 'dark' ? Sun : theme === 'light' ? Moon : Monitor;

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                🌱 PlantID
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Hybrid Identification</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate?.(item.id)}
                className={`relative ${currentPage === item.id 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                  : 'hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={cycleTheme}
              className="w-9 h-9 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20"
            >
              <ThemeIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant={currentPage === item.id ? "default" : "ghost"}
                      className={`w-full justify-start ${currentPage === item.id 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : ''
                      }`}
                      onClick={() => {
                        onNavigate?.(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating leaves animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200 dark:text-green-800 opacity-30"
            initial={{ 
              x: -20, 
              y: Math.random() * 100,
              rotate: 0 
            }}
            animate={{ 
              x: window.innerWidth + 20,
              y: Math.random() * 100 + Math.sin(Date.now() / 1000 + i) * 20,
              rotate: 360 
            }}
            transition={{ 
              duration: 15 + i * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 5
            }}
          >
            <Leaf className="w-4 h-4" />
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}