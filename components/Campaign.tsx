"use client"

import { PlayCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import Campainicon from "@/icons/Recurso 20.svg"
import lupita from "@/icons/Recurso 21.svg"
import Image from "next/image"

export default function Campaign() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          {/* <div className="bg-blue-600 p-4 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div> */}

          <div className="bg-blue-600 rounded-r-[120px] flex items-center justify-center  absolute left-0 h-[170px] w-[680px]">
            <h2 className="text-6xl font-black text-white  ">
              Nuestra <br /> Campaña
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-[80px] items-center">
          <article className="flex gap-5 flex-col ">
            <Card className="p-8 space-y-6 border-none rounded-[60px] shadow-lg bg-white/50 backdrop-blur">
              <div className="flex justify-start gap-5">
                <div className="bg-blue-700 min-h-[30px] min-w-[30px] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                  <Image
                    src={Campainicon}
                    width={40}
                    height={40}
                    alt="Campainicon"
                  />
                </div>
                <div className="bg-blue-700 px-4 py-6 rounded-full">
                  <h3 className="text-2xl font-medium  text-white">
                    Objetivo de la Campaña:
                  </h3>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fomentar la{" "}
                <span className="font-semibold">
                  aceptación de los ritmos de aprendizaje individuales
                </span>{" "}
                en estudiantes universitarios,
                <span className="font-semibold">
                  {" "}
                  priorizando el bienestar mental
                </span>{" "}
                sobre las expectativas académicas.
              </p>
            </Card>

            <Card className="p-8 space-y-6 border-none rounded-[60px] shadow-lg bg-white/50 backdrop-blur">
              <div className="flex justify-start gap-5">
                <div className="bg-blue-700 min-h-[30px] min-w-[30px] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                  <Image
                    src={lupita}
                    width={40}
                    height={40}
                    alt="Campainicon"
                  />
                </div>
                <div className="bg-blue-700 px-4 py-6 rounded-full">
                  <h3 className="text-2xl font-medium  text-white">
                    Contexto del Problema:
                  </h3>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                La ansiedad y el estrés son{" "}
                <span className="font-semibold">cada vez más comunes</span>{" "}
                entre estudiantes universitarios. Las presiones académicas{" "}
                <span className="font-semibold">
                  afectan no solo la salud mental
                </span>{" "}
                sino también{" "}
                <span className="font-semibold">el rendimiento académico</span>
              </p>
            </Card>
          </article>

          <div className="relative col-span-2 aspect-video rounded-[60px] overflow-hidden bg-blue-600 group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white transition-transform group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
