import Image from "next/image"
import React from "react"
import FinalImage from "@/images/ultimo.png"
function Final() {
  return (
    <div className="flex items-center justify-center w-full py-16">
      <Image src={FinalImage} alt="Final" width={700} height={700} />
    </div>
  )
}

export default Final
