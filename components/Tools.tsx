import React from "react"
import { MapPin, Lightbulb, Radio } from "lucide-react"

const Tools = () => {
  const tools = [
    {
      id: 1,
      icon: <Radio className="w-20 h-20" />,
      text: "Podcast",
    },
    {
      id: 2,
      icon: <MapPin className="w-20 h-20" />,
      text: "Ayuda",
    },
    {
      id: 3,
      icon: <Lightbulb className="w-20 h-20" />,
      text: "Tips",
    },
  ]

  return (
    <div className="bg-blue-600 w-full py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-2">
            Herramientas extras
          </h2>
          <p className="text-white/80 italic">
            Material de apoyo para ir a tu ritmo
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group flex flex-col items-center transition-transform hover:-translate-y-2"
            >
              <div className="bg-teal-400 rounded-full  min-w-[150px] min-h-[150px]">
                <div className="flex flex-col items-center justify-center gap-1 h-full ">
                  <div className="text-blue-600">{tool.icon}</div>
                  <span className="text-white font-medium">{tool.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools
