"use client"

import type React from "react"

import { Link } from "react-router-dom"

interface BannerSlideProps {
  title: string
  subtitle: string
  imageSrc: string
  buttonText: string
  buttonLink: string
  discount?: string
  backgroundColor?: string
  textColor?: string
}

export const BannerSlide: React.FC<BannerSlideProps> = ({
  title,
  subtitle,
  imageSrc,
  buttonText,
  buttonLink,
  discount,
  backgroundColor = "#f5f7fa",
  textColor = "#333",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor,
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Conteúdo à esquerda (texto e botão) */}
      <div
        style={{
          flex: "1",
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {discount && (
          <div
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              padding: "4px 12px",
              borderRadius: "4px",
              display: "inline-block",
              marginBottom: "16px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {discount}
          </div>
        )}

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: textColor,
          }}
        >
          {title}{" "}
          <span role="img" aria-label="fogo">
            🔥
          </span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "32px",
            maxWidth: "500px",
            color: textColor,
            opacity: 0.8,
          }}
        >
          {subtitle}
        </p>

        <Link to={buttonLink}>
          <button
            style={{
              backgroundColor: "#FF4D4D",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#E63939")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FF4D4D")}
          >
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Imagem à direita */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          style={{
            maxHeight: "90%",
            maxWidth: "90%",
            objectFit: "contain",
            transform: "rotate(-30deg)", // Rotação do tênis como na imagem de referência
            zIndex: 2,
          }}
        />

        {/* Elementos decorativos de fundo */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(255, 77, 77, 0.1)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "25%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(255, 77, 77, 0.05)",
            zIndex: 1,
          }}
        />

        {/* Padrão de pontos decorativos */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "100px",
            height: "100px",
            backgroundImage: "radial-gradient(#ddd 1px, transparent 2px)",
            backgroundSize: "10px 10px",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  )
}
