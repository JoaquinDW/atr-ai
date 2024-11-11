"use client"
import logo from "@/icons/Recurso 16.svg"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import heroImage from "@/images/Imagen principal-10.png"
export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 flex flex-col items-center w-2/3">
          <h1 className="text-6xl font-bold text-blue-600 font-display">
            <Image src={logo} alt="Logo" width={350} height={350} />
          </h1>
          <p className="text-2xl leading-relaxed text-[#0054C8]">
            &quot;Una campaña pensada{" "}
            <span className="text-blue-600 font-semibold">
              para tu bienestar emocional
            </span>
            , ayudándote a enfrentar el estrés académico y a{" "}
            <span className="text-blue-600">avanzar a tu propio ritmo</span>,
            sin comparaciones.
          </p>
          <p className="text-2xl text-[#0054C8]">
            Descubrí herramientas y apoyo para que te sientas cómodo con tu
            proceso de aprendizaje y disfrutes del camino a tu manera.&quot;
          </p>
          <Button
            size="lg"
            className="bg-[#FFF02D] hover:bg-[#bab433] font-bold text-xl text-gray-900 rounded-full px-8"
          >
            Quiero ir a mi ritmo
          </Button>
        </div>
        <div className="relative">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 rounded-[2rem]" /> */}
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-visible">
            <Image
              src={heroImage}
              alt="Estudiantes"
              width={900}
              height={800}
              className="object-cover overflow-visible scale-125 absolute top-0 w-full h-full"
            />
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl" />
          <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-yellow-200/50 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
