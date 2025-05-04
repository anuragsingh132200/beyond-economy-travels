"use client"

import { useState } from "react"
import Image from "next/image"

interface FallbackImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  fallbackSrc?: string
}

export default function FallbackImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  fallbackSrc = "https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
}: FallbackImageProps) {
  const [error, setError] = useState(false)

  return (
    <>
      {error ? (
        fill ? (
          <div className={`relative w-full h-full flex items-center justify-center bg-gray-100 ${className}`}>
            <Image
              src={fallbackSrc || "/placeholder.svg"}
              alt={alt}
              fill
              className="object-cover"
              unoptimized
              onError={() => {
                // If even the fallback fails, show a placeholder
                setError(true)
              }}
            />
          </div>
        ) : (
          <Image
            src={fallbackSrc || "/placeholder.svg"}
            alt={alt}
            width={width || 300}
            height={height || 200}
            className={className}
            unoptimized
            onError={() => {
              // If even the fallback fails, show a placeholder
              setError(true)
            }}
          />
        )
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={className}
          unoptimized={src.startsWith("http")}
          onError={() => {
            setError(true)
          }}
        />
      )}
    </>
  )
}
