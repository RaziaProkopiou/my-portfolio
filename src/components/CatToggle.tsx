import { useEffect, useRef } from "react"

type CatToggleProps = {
  onClick: () => void
}

export default function CatToggle({ onClick }: CatToggleProps) {
  const leftEye = useRef<HTMLDivElement>(null)
  const rightEye = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const eyes = [leftEye.current, rightEye.current]
      eyes.forEach((eye) => {
        if (!eye) return
        const rect = eye.getBoundingClientRect()
        const eyeX = rect.left + rect.width / 2
        const eyeY = rect.top + rect.height / 2
        const angleX = (e.clientX - eyeX) / 65
        const angleY = (e.clientY - eyeY) / 65
        eye.style.transform = `translate(${angleX}px, ${angleY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      onClick={onClick}
      className="relative w-45 h-40 cursor-pointer z-50"
    >
      <div className="relative w-full h-full">
        {/* Cat Base */}
        <img
          src="./images/Cat-light.png"
          alt="Cat Toggle"
          className="w-full h-full dark:hidden"
        />
        <img
          src="./images/Cat-dark.png"
          alt="Cat Toggle"
          className="w-full h-full hidden dark:block"
        />

        {/* Eyes */}
        <div
          ref={leftEye}
          className="absolute top-[30%] left-[40%] w-2 h-3 bg-gray-900 rounded-full"
        ></div>
        <div
          ref={rightEye}
          className="absolute top-[30%] right-[27%] w-2 h-3 bg-gray-900 rounded-full"
        ></div>
      </div>
    </div>
  )
}