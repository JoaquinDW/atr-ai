"use client"
import React, { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import eventImage from "@/images/Recurso 9.png"
const Offer = () => {
  const [open, setOpen] = useState(false)
  const dates = [
    {
      day: "07",
      month: "de abril",
      image: null,
      isActive: false,
    },
    {
      day: "09",
      month: "de abril",
      image: eventImage,
      isActive: true,
      title: "Elegi tu ritmo",
      text: `A través de la realidad virtual, podrás sumergirte en una experiencia
        visual e inmersiva sobre el estrés
        académico, explorando cómo las expectativas (propias y ajenas) y la constante comparación con el ritmo de los
        demás pueden afectar tu bienestar  y
        rendimiento.`,
    },
    {
      day: "14",
      month: "de abril",
      image: null,
      isActive: false,
    },
    {
      day: "18",
      month: "de Mayo",
      image: null,
      isActive: false,
    },
  ]

  function handleOpen(index: number) {
    setOpen(!open)
  }

  return (
    <div className=" mx-auto px-48">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-blue-600">
          Lo que te ofrecemos
        </h2>
        <p className="text-blue-500 text-lg">para conocer tu ritmo</p>
      </div>

      {/* Cards Container */}
      <div className="flex justify-between w-full gap-6">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`relative  rounded-[400px] h-[800px] transition-all ease-in-out duration-500
              ${
                date.isActive && open
                  ? "w-[1800px] overflow-hidden h-[800px] rounded-[110px] bg-gradient-to-b from-45% from-slate-200  to-blue-600"
                  : "w-[400px]  rounded-[400px] h-[800px]"
              }
              ${date.isActive ? "bg-blue-600" : "bg-gray-100"}
              ${date.isActive ? "shadow-xl" : "shadow-md"}
              
                  ${!date.isActive && open ? "hidden" : "block"}
                ${
                  date.isActive &&
                  "hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer"
                }
              `}
            onClick={
              date.isActive
                ? () => handleOpen(index)
                : () => console.log("No activo")
            }
          >
            {/* Date */}
            <div
              className={`p-8 absolute gap-6 items-start justify-center font-black flex top-24  z-50 
                ${date.isActive && open && "text-blue-600 pl-[250px]"}  
                ${date.isActive && !open ? "text-white" : "text-blue-600"}
                `}
            >
              <div>
                <h3 className="text-7xl font-bold">{date.day}</h3>
                <p className="text-3xl">{date.month}</p>
              </div>

              {open && date.isActive && (
                <div className="leading-8">
                  <h3 className="text-5xl font-extrabold text-blue-600">
                    {date.title}
                  </h3>
                  <p className="text-lg">Realidad Virtual</p>
                  <p>
                    <span className="text-emerald-500 text-lg">Taller 1° </span>{" "}
                    | Turnos 10h a 12h / 17h a 19h
                  </p>
                </div>
              )}
            </div>

            {/* Image - Only for active card */}
            {date.image && (
              <div className="absolute inset-0  overflow-hidden  rounded-[200px]">
                <div className="absolute inset-0 overflow-visible" />
                <Image
                  src={date.image}
                  alt="Event preview"
                  className={`w-full h-full z-10 overflow-visible absolute ${
                    open &&
                    "w-[800px] h-[800px] ml-[480px] scale-[.6]   top-16 object-cover"
                  }  top-5 object-cover left-10`}
                  width={400}
                  height={600}
                />
              </div>
            )}

            {open && date.isActive && (
              <div
                className={`pl-[250px] pt-16 text-xl absolute top-52 bottom-24 flex flex-col gap-5 z-50`}
              >
                <p className=" text-black max-w-[400px] ">{date.text}</p>

                <p>
                  A cargo de <br />
                  <span className="font-semibold">Elias Nuñez</span>
                </p>

                <p>
                  En el <br />
                  <span className="font-semibold">Aula 5</span>
                </p>

                <button className=" px-4 py-2 text-2xl font-medium border-[3px] w-fit text-gray-800 border-black rounded-full">
                  Anotarme
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offer
