"use client"

import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import calendario1 from "@/images/Recurso 29@300x.png"
import calendario2 from "@/images/Recurso 30@300x.png"
import Image from "next/image"

interface Event {
  date: string
  title: string
  time: string
  description: string
  type: "activity" | "workshop"
}

const events: Event[] = [
  {
    date: "07 de Abril",
    title: "Apertura de la campaña",
    time: "10:30 a 13 h",
    description:
      "Inauguración de la campaña en el campus, donde se presentarán los objetivos y se realizarán actividades interactivas para sensibilizar sobre el estrés académico. Contará con stands informativos y un espacio para compartir experiencias.",
    type: "activity",
  },
  {
    date: "09 de Abril",
    title: "Taller de Mindfulness",
    time: "14:00 a 16:30 h",
    description:
      "Aprenderemos técnicas de meditación y atención plena para manejar el estrés académico y mejorar la concentración durante los estudios.",
    type: "workshop",
  },
  {
    date: "14 de Abril",
    title: "Gestión del Tiempo",
    time: "11:00 a 13:30 h",
    description:
      "Taller práctico sobre organización y planificación de estudios, establecimiento de objetivos realistas y creación de rutinas efectivas.",
    type: "workshop",
  },
  {
    date: "23 de Abril",
    title: "Manejo del Estrés",
    time: "15:00 a 17:30 h",
    description:
      "Sesión práctica sobre técnicas de relajación, respiración y estrategias para afrontar situaciones de alta presión académica.",
    type: "workshop",
  },
  {
    date: "28 de Abril",
    title: "Cierre de Mes",
    time: "16:00 a 18:30 h",
    description:
      "Actividad de cierre del mes con dinámicas grupales, compartiendo experiencias y estableciendo compromisos para mantener un ritmo saludable de estudio.",
    type: "activity",
  },
  {
    date: "07 de Mayo",
    title: "Hábitos Saludables",
    time: "10:00 a 12:30 h",
    description:
      "Taller sobre la importancia del autocuidado, el descanso y la alimentación en el rendimiento académico.",
    type: "workshop",
  },
  {
    date: "12 de Mayo",
    title: "Técnicas de Estudio",
    time: "14:30 a 17:00 h",
    description:
      "Aprenderemos diferentes métodos de estudio y cómo adaptarlos a tu estilo de aprendizaje personal.",
    type: "activity",
  },
  {
    date: "21 de Mayo",
    title: "Cierre de Campaña",
    time: "11:30 a 14:00 h",
    description:
      "Evento de cierre con presentación de resultados, testimonios de participantes y celebración de logros.",
    type: "activity",
  },
]

export default function Schedule() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            Planificá tu participación
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Calendario para visualizar nuestro recorrido
          </p>

          <div className="grid md:grid-cols-2 place-items-center gap-8">
            <div
              className="cursor-pointer"
              onClick={() => {
                setCurrentIndex(0)
                setIsOpen(true)
              }}
            >
              <Image
                src={calendario1}
                alt="Calendario 1"
                width={500}
                height={500}
              />
              {/* <Calendar
                mode="multiple"
                selected={[
                  new Date(2024, 3, 7),
                  new Date(2024, 3, 9),
                  new Date(2024, 3, 14),
                  new Date(2024, 3, 23),
                  new Date(2024, 3, 28),
                ]}
                className="rounded-lg border shadow bg-white"
              /> */}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setCurrentIndex(5)
                setIsOpen(true)
              }}
            >
              <Image
                src={calendario2}
                alt="Calendario 2"
                width={500}
                height={500}
              />
              {/* <Calendar
                mode="multiple"
                selected={[
                  new Date(2024, 4, 7),
                  new Date(2024, 4, 12),
                  new Date(2024, 4, 21),
                ]}
                className="rounded-lg border shadow bg-white"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
          <div className="relative">
            <div className="flex items-stretch">
              {/* Calendar Side */}
              <div className="w-1/2 bg-blue-600 p-6 text-white">
                <div className="calendar-style rounded-lg p-4 border-2 border-white/20">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-2xl">ABRIL</h3>
                    <p className="text-xl">2024</p>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                    <div>L</div>
                    <div>M</div>
                    <div>M</div>
                    <div>J</div>
                    <div>V</div>
                    <div>S</div>
                    <div>D</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                      <div
                        key={day}
                        className={`p-1 ${
                          day ===
                          parseInt(events[currentIndex].date.split(" ")[0])
                            ? "bg-white text-blue-600 rounded-full font-bold"
                            : ""
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-1/2 p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {events[currentIndex].date}
                </h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {events[currentIndex].title}
                </h4>
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      events[currentIndex].type === "activity"
                        ? "bg-rose-100 text-rose-600"
                        : "bg-teal-100 text-teal-600"
                    }`}
                  >
                    {events[currentIndex].time}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {events[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
