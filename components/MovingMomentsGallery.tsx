"use client"

import Image from "next/image"
import "./moving-moments.css"

interface Moment {
  title: string
  date: string
  image: string
  description: string
  angle: string
}

const moments: Moment[] = [
  {
    title: "DevHacks S1",
    date: "March",
    image: "/images/moments/devhackss1.jpg",
    description: "First hackathon experience",
    angle: "4deg"
  },
  {
    title: "HackAZona v0.1",
    date: "March",
    image: "/images/moments/Hackazona.jpg",
    description: "Innovative solutions at HackAZona",
    angle: "-8deg"
  },
  {
    title: "TechiePalooza Conference",
    date: "August",
    image: "/images/moments/techipaloozaconf.jpg",
    description: "Tech conference and networking",
    angle: "-7deg"
  },
  {
    title: "DevHacks S2",
    date: "August",
    image: "/images/moments/devhackss2.jpeg",
    description: "1st Place victory at DevHacks S2",
    angle: "11deg"
  },
  {
    title: "Hacks for Humanity",
    date: "October",
    image: "/images/moments/HHH.JPG",
    description: "Building tech for social impact",
    angle: "13deg"
  },
  {
    title: "Data Conference",
    date: "November",
    image: "/images/moments/Dataconf.jpg",
    description: "Data professionals shared their insights on how they use data and AI in their workflows",
    angle: "-17deg"
  },
  {
    title: "Workshop Conducted",
    date: "November",
    image: "/images/moments/Workshop.jpg",
    description: "Lead a portfolio building workshop",
    angle: "20deg"
  },
  {
    title: "Claude Builder Hackathon Mentorship",
    date: "November",
    image: "/images/moments/mentorship.jpg",
    description: "Mentored teams and overlooked the polymarket track",
    angle: "-15deg"
  }
]

export default function MovingMomentsGallery() {
  const totalMoments = moments.length

  return (
    <div className="moments-cards">
      {moments.map((moment, index) => {
        const currentNum = index + 1
        const prevNum = index === 0 ? totalMoments : index
        const nextNum = index === totalMoments - 1 ? 1 : index + 2

        return (
          <div key={index}>
            <input
              type="radio"
              id={`moment-radio-${currentNum}`}
              name="moment-radio-card"
              defaultChecked={index === 0}
            />
            <article className="moment-card" style={{ '--angle': moment.angle } as React.CSSProperties}>
              <div className="moment-card-img-wrapper">
                <Image
                  className="moment-card-img"
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  quality={90}
                  priority={index < 2}
                />
              </div>
              <div className="moment-card-data">
                <span className="moment-card-num">{currentNum}/{totalMoments}</span>
                <h2 className="moment-card-title">{moment.title}</h2>
                <p className="moment-card-desc">
                  <em className="moment-card-date">{moment.date}</em>
                  <br />
                  {moment.description}
                </p>
                <footer className="moment-card-footer">
                  <label
                    htmlFor={`moment-radio-${prevNum}`}
                    aria-label="Previous"
                    className="moment-nav-btn"
                  >
                    &#10094;
                  </label>
                  <label
                    htmlFor={`moment-radio-${nextNum}`}
                    aria-label="Next"
                    className="moment-nav-btn"
                  >
                    &#10095;
                  </label>
                </footer>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  )
}
