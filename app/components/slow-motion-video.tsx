"use client"

import { useEffect, useRef } from "react"

interface SlowMotionVideoProps {
  src: string
  className?: string
  playbackRate?: number
}

export function SlowMotionVideo({
  src,
  className = "h-full w-full object-cover",
  playbackRate = 3.0,
}: SlowMotionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  return (
    <video ref={videoRef} className={className} autoPlay muted loop playsInline>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
