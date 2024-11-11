"use client"

import { type FC } from "react"

// import { Tag } from "./Tag"
// import { QuestionMarkCircle } from "lucide-react"

interface CircularProgressProps {
  percentage: number
  label: string
  sublabel: string
}
interface TagProps {
  children: React.ReactNode
  className?: string
}

export const Tag: FC<TagProps> = ({ children, className = "" }) => {
  return (
    <span
      className={` px-3  flex items-center justify-center rounded-full text-sm leading-none h-[25px] text-white bg-pink-500 ${className}`}
    >
      {children}
    </span>
  )
}

export const CircularProgress: FC<CircularProgressProps> = ({
  percentage,
  label,
  sublabel,
}) => {
  const circumference = 2 * Math.PI * 47 // radius = 47
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-32 h-32 ">
        <svg
          className="w-full h-full transform overflow-visible "
          viewBox="0 0 110 110"
        >
          <circle
            className="stroke-pink-100 fill-none"
            strokeWidth="14"
            r="47"
            cx="50"
            cy="50"
          />
          <circle
            className="stroke-pink-500 fill-none transition-all duration-1000 ease-out"
            strokeWidth="14"
            strokeLinecap="round"
            r="47"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
          <text
            x="50"
            y="50"
            className="fill-pink-500 text-2xl font-bold"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-lg">{label}</span>
        <span className="text-gray-600 text-sm">{sublabel}</span>
      </div>
    </div>
  )
}

export const AcademicStressSection: FC = () => {
  return (
    <section className="container mx-auto bg-gradient-to-b from-white to-blue-50/50 py-5">
      <div className=" mx-auto px-2">
        {/* Header */}
        <div className="flex gap-8 mb-12 pb-40">
          <div className="bg-pink-500 rounded-r-[120px] flex items-center justify-center  absolute left-0 h-[170px] w-[680px]">
            <h2 className="text-6xl font-black text-white  ">
              Estrés
              <br /> Académico
            </h2>
          </div>
        </div>

        {/* Statistics and Manifestations */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-gray-600 mb-6">
              Estudios de alumnos
              <br />
              en universidades del país
            </h3>

            <div className="space-y-6 w-[400px]">
              <CircularProgress
                percentage={61}
                label="Experimenta altos niveles de estrés"
                sublabel="académico"
              />
              <CircularProgress
                percentage={70}
                label="Estrés académico"
                sublabel="por comparación"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white    rounded-3xl shadow-xl p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                {/* <QuestionMarkCircle className="w-8 h-8 text-pink-500" /> */}
                <span className="text-4xl px-3 py-2 bg-pink-500 text-white font-bold rounded-full">
                  ¿?
                </span>
                <span className="px-4 py-2 text-3xl bg-pink-500 text-white rounded-full">
                  ¿Qué es estrés académico?
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                El estrés académico es un estado que se produce cuando al
                estudiante le re <br /> sultan angustiantes aquellas situaciones
                a las que se enfrenta durante su <br /> proceso formativo y{" "}
                <span className="font-semibold">
                  pierde el control para afrontarlas
                </span>
                .
              </p>
            </div>
            <div className="bg-white flex rounded-3xl shadow-xl py-4 items-center px-6">
              <p className=" mr-2 ">Se manifiesta en:</p>
              <div className="flex flex-wrap gap-2">
                <Tag>desmotivación</Tag>
                <Tag>desánimo</Tag>
                <Tag>falta de ganas para cursar</Tag>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <p className="mb-4">
                <span className="font-semibold">El estrés perdura</span> más en
                el cuerpo por{" "}
                <span className="font-semibold">diversos factores</span> entre
                ellos como:
              </p>

              <div className="grid grid-cols-2 w-full">
                <div>
                  <p className="w-2 inline h-2 bg-pink-500  rounded-full"></p>
                  <span>Querer terminar rápido la carrera</span>
                </div>
                <p>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Carga horaria de cursadas</span>
                </p>
                <p>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Pensar en los padres</span>
                </p>
                <p>
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Las exigencias académicas</span>
                </p>
              </div>
              {/*
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Querer terminar rápido la carrera</span>
                  <Tag className="ml-auto">carga horaria de cursadas</Tag>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Pensar en los padres</span>
                  <p className="ml-auto">Las exigencias académicas</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
