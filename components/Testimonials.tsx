import { Card } from "@/components/ui/card"
import Image from "next/image"
import image1 from "../images/Recurso 10.png"
import image2 from "../images/Recurso 11.png"
import image3 from "../images/Recurso 12.png"
import image4 from "../images/Recurso 13.png"
import image5 from "../images/Recurso 14.png"
import image6 from "../images/Recurso 15.png"

const testimonials = [
  {
    text: "Aprender a respetar mis propios límites ha sido fundamental.",
    image: image1,
    hasAfter: true,
    afterColor: "bg-blue-900",
    span: "col-span-1",
  },
  {
    text: "Me comparaba mucho con otros.",
    image: image2,
    hasAfter: true,
    afterColor: "bg-rose-500",
    span: "col-span-1",
  },
  {
    text: "A veces siento que no avanzo tan rápido como mis compañeros, y eso me hace dudar de si estoy en la carrera correcta",
    image: image5,
  },
  {
    text: "Ver a otros avanzar más rápido me frustraba, pero ahora sé que cada uno tiene su propio tiempo.",
    image: image3,
  },
  {
    text: "Escuchar que no soy el único.",
    image: image4,
  },
  {
    text: "La presión por obtener buenas calificaciones y terminar la carrera en tiempo me generaba mucho estrés. Me ayuda que lo importante es aprender.",
    image: image6,
  },
]

function circle({ color }: { color: string }) {
  return (
    <div
      className={`h-[70px] w-[70px] shadow-lg col-span-1 ${color} rounded-full`}
    ></div>
  )
}

function decoratorElement({
  color,
  margin = "",
  width,
}: {
  color: string
  margin?: string
  width?: string
}) {
  return (
    <div
      className={`h-[70px] shadow-xl col-span-1 ${color} rounded-full ${margin} ${
        width || "w-[320px]"
      }`}
    ></div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-5 bg-blue-600">
      <div className="mx-auto  px-4">
        <h2 className="text-6xl font-black text-white  text-center">
          Testimonios
        </h2>
        <p className="text-2xl text-blue-50 mb-5 text-center">
          observa que no estás solo
        </p>

        <div className="flex flex-col gap-4">
          <article className="flex gap-4">
            {decoratorElement({ color: "bg-blue-900", margin: "-ml-[130px]" })}

            <Card className="pl-1 pr-4 h-[70px] bg-blue-50 flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none">
              <div className="w-[60px] h-[60px] bg-[#FFF02D] rounded-full flex items-center justify-center">
                <Image
                  src={image1}
                  alt="Testimonio"
                  width={80}
                  height={80}
                  className="rounded-full min-w-[60px] min-h-[60px]"
                />
              </div>
              <p className="text-base leading-tight">
                Aprender a respetar mis propios límites ha sido fundamental.
              </p>
            </Card>
            {/* <div className="h-[80px] w-[80px] col-span-1 bg-blue-900 rounded-full"></div> */}
            {circle({ color: "bg-blue-900" })}

            <Card className="pl-1 pr-4 h-[70px]  bg-blue-50 flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none">
              <div className="w-[60px] h-[60px] bg-[#0054C8] rounded-full flex items-center justify-center">
                <Image
                  src={image2}
                  alt="Testimonio"
                  width={80}
                  height={80}
                  className="rounded-full min-w-[60px] min-h-[60px]"
                />
              </div>
              <p className="text-base leading-tight">
                Me comparaba mucho con otros.
              </p>
            </Card>
            {/* <div className="h-[80px] w-[80px] col-span-1 bg-rose-500 rounded-full"></div> */}
            {circle({ color: "bg-rose-500" })}
            <Card className="pl-1 pr-4 h-[70px]  bg-blue-50 flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none">
              <div className="w-[60px] h-[60px] bg-[#F1446D] rounded-full flex items-center justify-center">
                <Image
                  src={image3}
                  alt="Testimonio"
                  width={80}
                  height={80}
                  className="rounded-full min-w-[60px] min-h-[60px]"
                />
              </div>
              <p className="text-base leading-tight">
                A veces siento que no avanzo tan rápido como mis compañeros,{" "}
                <br /> y eso me hace dudar de si estoy en la carrera correcta
              </p>
            </Card>
          </article>

          <article className="flex gap-4">
            {decoratorElement({
              color: "bg-cyan-400",
              margin: "-ml-[100px]",
              width: "w-[480px]",
            })}
            {circle({ color: "bg-blue-900" })}
            {decoratorElement({
              color: "bg-blue-900",
              width: "w-[200px]",
            })}
            <Card className="pl-1 pr-4 h-[70px]  bg-blue-50 flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none">
              <div className="w-[60px] h-[60px] bg-[#FFF02D] rounded-full flex items-center justify-center">
                <Image
                  src={image4}
                  alt="Testimonio"
                  width={80}
                  height={80}
                  className="rounded-full min-w-[60px] min-h-[60px]"
                />
              </div>
              <p className="text-base leading-tight">
                Ver a otros avanzar más rápido me frustraba, pero ahora <br />{" "}
                sé que cada uno tiene su propio tiempo.
              </p>
            </Card>
            {circle({ color: "bg-cyan-400" })}
            {decoratorElement({
              color: "bg-blue-900",
              width: "w-[500px]",
            })}
          </article>

          <article className="flex gap-4">
            {decoratorElement({
              color: "bg-blue-900",
              margin: "-ml-[100px]",
              width: "w-[480px]",
            })}
            {circle({ color: "bg-blue-900" })}

            <Card className="pl-1 pr-4 h-[70px] bg-blue-50 flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none">
              <div className="w-[60px] h-[60px] bg-[#F1446D] rounded-full flex items-center justify-center">
                <Image
                  src={image2}
                  alt="Testimonio"
                  width={60}
                  height={60}
                  className="rounded-full min-w-[60px] min-h-[60px] max-h-[40px] max-w-[60px]"
                />
              </div>
              <p className="text-base leading-tight">
                Escuchar que no soy el único.
              </p>
            </Card>
            {decoratorElement({
              color: "bg-yellow-300",
              width: "w-[300px]",
            })}
            <Card className="pl-1 pr-4 h-[70px] bg-blue-50 flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none">
              <div className="w-[60px] h-[60px] bg-[#0054C8] rounded-full flex items-center justify-center">
                <Image
                  src={image6}
                  alt="Testimonio"
                  width={60}
                  height={60}
                  className="rounded-full min-w-[60px] min-h-[60px] max-h-[40px] max-w-[60px]"
                />
              </div>
              <p className="text-base leading-tight">
                La presión por obtener buenas calificaciones y terminar la
                carrera en tiempo <br /> me generaba mucho estrés. Me ayuda que
                lo importante es aprender.
              </p>
            </Card>
          </article>

          {/* {testimonials.map((el, i) => (
            <>
              <Card
                key={i}
                className={`pl-1 pr-4 h-[70px]  bg-blue-50 ${el.span} flex gap-2 items-center justify-start w-fit backdrop-blur rounded-full border-none  `}
              >
                <div
                  // depend on the index will have bg color, yellow, blue or rose
                  className={`w-[60px] h-[60px]
                  ${
                    i % 3 === 0
                      ? "bg-[#FFF02D]"
                      : i % 3 === 1
                      ? "bg-[#0054C8]"
                      : "bg-[#F1446D]"
                  }
                  rounded-full flex items-center justify-center`}
                >
                  <Image
                    src={el.image}
                    alt="Testimonio"
                    width={80}
                    height={80}
                    className="rounded-full min-w-[60px] min-h-[60px]"
                  />
                </div>
                <p className=" text-base leading-tight">{el.text}</p>
              </Card>

              {el.hasAfter && (
                <div
                  className={`h-[80px] w-[80px] col-span-1 ${el.afterColor} rounded-full`}
                ></div>
              )}
            </>
          ))} */}
        </div>
      </div>
    </section>
  )
}
