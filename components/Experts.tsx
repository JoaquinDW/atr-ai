"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import expert1 from "@/images/Recurso 1.png"
import expert2 from "@/images/Recurso 3.png"
import expert3 from "@/images/Recurso 5.png"
import expert4 from "@/images/Recurso 6.png"
import expert5 from "@/images/Recurso 7.png"
import expert6 from "@/images/Recurso 4.png"

interface Expert {
  image: string
  color: string
  name: string
  age: number
  profession: string
  specialization: string
  experience: string
  areas: string[]
}

const experts: Expert[] = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    color: "bg-rose-400",
    name: "Ana Martínez",
    age: 32,
    profession: "Psicóloga Clínica",
    specialization: "Especialista en Ansiedad Académica",
    experience: "8 años de experiencia en salud mental universitaria",
    areas: [
      "Manejo del Estrés Académico",
      "Técnicas de Estudio Efectivas",
      "Equilibrio Vida-Estudio",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    color: "bg-blue-500",
    name: "Luis Gómez",
    age: 35,
    profession: "Psicólogo Clínico",
    specialization: "Especialista en Salud Mental",
    experience: "Años de experiencia en salud mental y apoyo a estudiantes",
    areas: [
      "Gestión del Estrés Académico",
      "Autocuidado y Bienestar Emocional",
      "Técnicas de Mindfulness para Estudiantes",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    color: "bg-blue-500",
    name: "Carolina Silva",
    age: 29,
    profession: "Psicopedagoga",
    specialization: "Máster en Educación Superior",
    experience: "6 años trabajando con estudiantes universitarios",
    areas: [
      "Estrategias de Aprendizaje",
      "Organización del Tiempo",
      "Motivación Académica",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    color: "bg-blue-500",
    name: "Miguel Ángel Ruiz",
    age: 38,
    profession: "Psicólogo Educacional",
    specialization: "Doctor en Psicología Educativa",
    experience: "12 años en orientación universitaria",
    areas: [
      "Desarrollo Personal",
      "Adaptación Universitaria",
      "Manejo de Expectativas",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    color: "bg-blue-500",
    name: "Laura Torres",
    age: 34,
    profession: "Counselor Educativa",
    specialization: "Especialista en Bienestar Estudiantil",
    experience: "9 años en consejería universitaria",
    areas: [
      "Desarrollo de Resiliencia",
      "Manejo del Estrés",
      "Habilidades Sociales",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    color: "bg-yellow-400",
    name: "Daniel Pérez",
    age: 36,
    profession: "Psicólogo",
    specialization: "Especialista en Terapia Cognitivo-Conductual",
    experience: "10 años en salud mental universitaria",
    areas: [
      "Manejo de la Ansiedad",
      "Técnicas de Relajación",
      "Hábitos de Estudio Saludables",
    ],
  },
]

export default function Experts() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative circles */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2" />
      </div> */}

      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 gap-15 items-start relative z-10">
          {/* Left side - Expert photos */}

          <article className="flex flex-col relative">
            <div className="h-[330px] shadow-2xl w-[150px] bg-[#3CC2C5] -top-[270px] left-[140px] z-10 absolute rounded-full -rotate-12"></div>
            <div className="flex gap-14 ">
              <div
                className="h-[320px] z-0 overflow-visible shadow-2xl relative cursor-pointer  w-[150px] bg-rose-500 rounded-full -rotate-12 hover:scale-110 transition-transform duration-150"
                onClick={() => setSelectedExpert(experts[0])}
              >
                <Image
                  src={expert1}
                  alt="Ana Martínez"
                  className="absolute top-2 right-3.5 object-contain scale-150 h-full z-10  rotate-12"
                />
              </div>
              <div
                className="h-[320px] overflow-visible z-20 shadow-2xl relative cursor-pointer w-[150px] bg-[#0054C8] mt-16 rounded-full -rotate-12 hover:scale-110 transition-transform ease-in-out duration-150"
                onClick={() => setSelectedExpert(experts[3])}
              >
                <Image
                  src={expert3}
                  alt="Carolina Silva"
                  className="absolute -top-3.5  object-contain scale-150 h-full z-10  rotate-12"
                />
              </div>
              <div
                className="h-[320px] overflow-visible z-0 shadow-2xl relative cursor-pointer w-[150px] bg-[#0054C8] -ml-5 -mt-8 rounded-full -rotate-12 hover:scale-110 transition-transform ease-in-out duration-150"
                onClick={() => setSelectedExpert(experts[1])}
              >
                <Image
                  src={expert2}
                  alt="Luis Gómez"
                  className="absolute top-2.5 left-2 object-contain scale-150 h-full z-10  rotate-12"
                />
              </div>
            </div>

            <div className="flex gap-14 pl-[5rem] -mt-10">
              <div
                className="h-[320px] overflow-visible z-0 shadow-2xl relative cursor-pointer w-[150px] bg-[#0054C8] rounded-full -rotate-12 hover:scale-110 transition-transform ease-in-out duration-150"
                onClick={() => setSelectedExpert(experts[2])}
              >
                <Image
                  src={expert5}
                  alt="Daniel Pérez"
                  className="absolute top-2 right-3.5 object-contain scale-150 h-full z-10  rotate-12"
                />
              </div>
              <div
                className="h-[320px] overflow-visible z-0 shadow-2xl relative cursor-pointer w-[150px] bg-[#0054C8] mt-16 rounded-full -rotate-12 hover:scale-110 transition-transform ease-in-out duration-150"
                onClick={() => setSelectedExpert(experts[4])}
              >
                <Image
                  src={expert4}
                  alt="Miguel Ángel Ruiz"
                  className="absolute -top-3.5  object-contain scale-150 h-full z-10  rotate-12"
                />
              </div>
              <div
                className="h-[320px] overflow-visible z-0 shadow-2xl relative cursor-pointer w-[150px] bg-[#FFF02D] -ml-5 -mt-8 rounded-full -rotate-12 hover:scale-110 transition-transform ease-in-out duration-150"
                onClick={() => setSelectedExpert(experts[5])}
              >
                <Image
                  src={expert6}
                  alt="Laura Torres"
                  className="absolute top-2.5 left-2 object-contain scale-150 h-full z-10  rotate-12"
                />
              </div>
            </div>
          </article>

          {/* <div className="relative h-[600px]">
            {experts.map((expert, i) => (
              <div
                key={i}
                className={`absolute w-48 h-64 ${expert.color} rounded-[2rem] overflow-hidden transform transition-transform hover:scale-105 cursor-pointer`}
                style={{
                  left: `${(i % 2) * 45}%`,
                  top: `${Math.floor(i / 2) * 33}%`,
                }}
                onClick={() => setSelectedExpert(expert)}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div> */}

          {/* Right side - Text content */}
          <div className="space-y-8 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-7xl font-black text-blue-600">
                Equipo de expertos
              </h2>
              <p className="text-2xl text-end text-blue-600/95 mt-2">
                con conocimientos en salud mental
              </p>
            </div>

            <div className="space-y-6 pl-[200px] text-start flex flex-col items-center gap-5">
              <p className="text-2xl text-gray-700">
                Contamos con un{" "}
                <span className="font-semibold">equipo de profesionales</span>{" "}
                en salud mental, psicología y educación que liderarán los
                talleres de la campaña.
              </p>

              <p className="text-2xl text-gray-700">
                Estos expertos abordarán el{" "}
                <span className="font-semibold">estrés académico</span> que es
                causado por las expectativas y la comparación con otros
                estudiantes, brindando apoyo y herramientas prácticas para que
                puedas{" "}
                <span className="font-semibold">
                  valorar tu propio proceso de aprendizaje
                </span>
                .
              </p>

              <Button className="bg-blue-600 text-xl self-end hover:bg-blue-700 font-bold text-white rounded-full px-16 py-10">
                Conócelos mejor
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Modal */}
      <Dialog
        open={!!selectedExpert}
        onOpenChange={() => setSelectedExpert(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 ${selectedExpert?.color} rounded-full overflow-hidden`}
                >
                  {selectedExpert && (
                    <img
                      src={selectedExpert.image}
                      alt={selectedExpert.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {selectedExpert?.name}
                    <span className="text-gray-500 text-lg">
                      | {selectedExpert?.age} años
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Profesión y Especialización:
              </h3>
              <p className="text-gray-700">
                {selectedExpert?.profession} | {selectedExpert?.specialization}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Experiencia:
              </h3>
              <p className="text-gray-700">{selectedExpert?.experience}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Áreas de Enfoque:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {selectedExpert?.areas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
