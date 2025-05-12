"use client"

import type React from "react"

import { Link } from "react-router-dom"

import ornamentImage from '/Ornament 11.png';

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
        justifyContent:"space-around",
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
              // backgroundColor: "#FFD700",
              color: "#ff9800",
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
            fontSize: "64px",
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
              backgroundColor: "#e91e63",
              width:"200px",
              margin:"20px",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1em",
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
            transform: "rotate(-19.34deg)", // Rotação do tênis como na imagem de referência
            zIndex: 2,
          }}
        />

        {/* Elementos decorativos de fundo */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "25px",
            width: "160px",
            height: "150px",
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
            top: "20px",
            right: "30px",
            width: "140px",
            height: "140px",
            backgroundImage: `url(${ornamentImage})`,
            // backgroundImage: "radial-gradient(#ddd 1px, transparent 2px)",
            // backgroundSize: "10px 10px",
            backgroundSize: "cover",
            // zIndex: 1,
            opacity:0.4
          }}
        />
      </div>
    </div>
  )
}
