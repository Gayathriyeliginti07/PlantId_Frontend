import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TreePine, Leaf, Cherry, ArrowRight, Brain, Database, Zap, Target } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  const modelComponents = [
    {
      id: "bark",
      title: "Bark Analysis",
      subtitle: "Hybrid",
      icon: TreePine,
      color: "amber",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      description: "Convolutional Neural Network trained on 50,000+ bark texture images",
      features: [
        "Texture analysis",
        "Pattern recognition",
        "Surface roughness detection",
        "Color variation mapping",
      ],
    },
    {
      id: "leaf",
      title: "Leaf Recognition",
      subtitle: "ResNet101 Model",
      icon: Leaf,
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      description: "ResNet101 deep learning model specialized in leaf morphology analysis",
      features: ["Shape classification", "Vein pattern analysis", "Edge detection", "Size normalization"],
    },
  ];

  const stats = [
    { label: "Training Images", value: "2.5K+", description: "High-quality plant images" },
    { label: "Plant Species", value: "100+", description: "Diverse global flora" },
    { label: "Model Accuracy", value: "90.2%", description: "Cross-validated performance" },
    { label: "Processing Time", value: "<10s", description: "Real-time identification" },
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/10 dark:to-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Behind the Hybrid Model
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our revolutionary plant identification system combines three specialized AI models
            to analyze different plant parts with unprecedented accuracy.
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-2xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardTitle className="text-2xl">🧠 Hybrid Architecture</CardTitle>
              <CardDescription className="text-green-100">
                Two specialized models working in harmony
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Model Components */}
                {modelComponents.map((model, index) => (
                  <motion.div
                    key={model.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    <Card
                      className={`bg-gradient-to-br ${model.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${model.gradient} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <model.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <CardTitle className="text-lg">{model.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {model.subtitle}
                        </Badge>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {model.description}
                        </p>
                        <ul className="text-xs text-gray-500 dark:text-gray-500 text-left space-y-1">
                           {model.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2">
                                 <span className="text-gray-400 dark:text-gray-500">•</span>
                                  <span>{feature}</span>
                              </li>))}
                          </ul>
                      </CardContent>
                    </Card>

                    {/* Arrow */}
                    {index < modelComponents.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-green-200 dark:border-green-700">
                          <ArrowRight className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Performance Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-500" />
                  Dataset & Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Training Data</div>
                    <div className="text-gray-600 dark:text-gray-400">2.5K+ images</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Species Coverage</div>
                    <div className="text-gray-600 dark:text-gray-400">100+ species</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Training Time</div>
                    <div className="text-gray-600 dark:text-gray-400">500 GPU hours</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Model Size</div>
                    <div className="text-gray-600 dark:text-gray-400">145MB total</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our models are trained on carefully curated datasets from botanical gardens,
                  research institutions, and citizen science projects worldwide, ensuring global
                  species representation and high-quality annotations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  Model Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: "Leaf Resnet101", accuracy: "92.3%", f1: "0.91" },
                    // { name: "Leaf EfficientNet", accuracy: "90%", f1: "0.97" },
                    // { name: "Fruit EfficientNet", accuracy: "97.3%", f1: "0.95" },
                    { name: "Hybrid Ensemble", accuracy: "90.2%", f1: "0.90" },
                  ].map((model, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-gray-900 dark:text-white">{model.name}</span>
                      <div className="flex gap-4">
                        <span className="text-green-600 dark:text-green-400">{model.accuracy}</span>
                        <span className="text-blue-600 dark:text-blue-400">F1: {model.f1}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Performance metrics are based on cross-validation across 50,000 test images,
                  with consistent results across different geographic regions and plant families.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Project Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-8 h-8" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Project Importance</h2>
              <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                Our hybrid plant identification system serves botanists, ecologists, educators, and nature
                enthusiasts worldwide. By democratizing plant identification, we're contributing to
                biodiversity research, conservation efforts, and environmental education on a global scale.
              </p>
              <div className="mt-8 flex flex-col items-center space-y-3">
              <div className="flex items-center gap-4">
                  <p className="text-white text-2xl font-extrabold tracking-wide">
                      Where nature meets technology, innovation blooms
                    </p><Badge className="bg-white/20 text-white px-6 py-2 text-xl font-bold shadow-lg">🌱</Badge>
                    </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}