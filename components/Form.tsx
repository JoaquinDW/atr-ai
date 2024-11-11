import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

function Form() {
  return (
    <section className="py-20 container mx-auto">
      <div className="bg-teal-400 h-[400px] gap-8 flex flex-col items-center justify-center shadow-2xl rounded-full px-40">
        <div className=" flex flex-col items-center gap-2 justify-center text-white">
          <h3 className="font-bold text-5xl">¡No te pierdas de nada!</h3>
          <p className="text-xl">
            Dejá tus datos para recordarte las propuestas <br /> que tenemos
            para vos todas las semanas.
          </p>
        </div>

        <form action="" className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nombre"
            className="h-[60px] rounded-full w-[550px] "
          />
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Email"
              className="h-[60px] rounded-full w-[390px] "
            />
            <Button
              variant={"outline"}
              className="h-[60px] outline outline-blue-600 bg-transparent hover:outline-white hover:bg-transparent duration-200 ease-in-out hover:text-white transition-all border-none rounded-full font-extrabold text-md w-[150px] text-blue-600"
            >
              Enviar datos
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
