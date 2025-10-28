import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, TreePine, Cherry, Sparkles, Zap, Shield, ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export function EnhancedLandingPage({ onGetStarted, onHowItWorks }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/20">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200 dark:text-green-800"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              rotate: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: 360,
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <Leaf className="w-3 h-3" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium"
                  >
                    <Sparkles className="w-4 h-4" />
                   
                  </motion.div>

                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                      Identify Plants
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Instantly</span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Upload a leaf and  bark image – let our advanced hybrid model do the rest
                    with
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      {" "}
                      90% accuracy
                    </span>
                    .
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    onClick={onGetStarted}
                    size="lg"
                    className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onHowItWorks}
                    className="group border-2 border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-600 px-8 py-6 text-lg"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    How It Works
                  </Button>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-8 text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Instant Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>90% Accuracy</span>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>AI-Powered</span>
                  </div> */}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ y: y1 }}
              >
                <PlantGrowthAnimation />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="py-20 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm"
          style={{ y: y2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                How Our{" "}
                <span className="text-green-600 dark:text-green-400">Hybrid Model</span> Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hybrid model analyzes multiple plant characteristics for superior accuracy
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8 justify-items-center">
              {[
                {
                  icon: Leaf,
                  title: "Leaf Analysis",
                  description:
                    "Advanced shape, texture, and pattern recognition of leaf structures",
                  color: "green",
                  delay: 0.1,
                },
                {
                  icon: TreePine,
                  title: "Bark Identification",
                  description:
                    "Detailed analysis of bark texture, color, and surface patterns",
                  color: "amber",
                  delay: 0.2,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                          feature.color === "green"
                            ? "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50"
                            : feature.color === "amber"
                            ? "bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50"
                            : "bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.icon
                          className={`w-10 h-10 ${
                            feature.color === "green"
                              ? "text-green-600 dark:text-green-400"
                              : feature.color === "amber"
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        />
                      </motion.div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "100+", label: "Plant Species", delay: 0.1 },
                { value: "90%", label: "Accuracy Rate", delay: 0.2 },
                { value: "1K+", label: "Identifications", delay: 0.3 },
                { value: "<10s", label: "Average Time", delay: 0.4 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay }}
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-green-100 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


export function PlantGrowthAnimation() {
  return (
    <div className="w-full max-w-md mx-auto">
      <img src="https://static.vecteezy.com/system/resources/previews/023/743/674/original/plant-growing-graphic-clipart-design-free-png.png" alt="Plant Image" />
    </div>
  );
}