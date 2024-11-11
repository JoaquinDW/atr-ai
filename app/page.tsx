import Hero from "@/components/Hero"
import Campaign from "@/components/Campaign"
import Testimonials from "@/components/Testimonials"
import Experts from "@/components/Experts"
import Schedule from "@/components/Schedule"
import Tools from "@/components/Tools"
import Form from "@/components/Form"
import Offer from "@/components/Offer"
import { AcademicStressSection } from "@/components/AcademicStress"
import Final from "@/components/Final"
import firmas from "@/images/firmas-logos.png"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Campaign />
      <AcademicStressSection />
      <Testimonials />
      <Experts />
      <Offer />
      <Schedule />
      <Tools />
      <Form />
      <Final />
      <div className="p-10 flex items-end justify-end">
        <Image src={firmas} alt="Final" width={500} height={500} className="" />
      </div>
    </main>
  )
}
