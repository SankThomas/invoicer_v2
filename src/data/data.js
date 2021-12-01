import React from "react"
import { FaTwitter } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"

export const navbar = [
  {
    id: uuidv4(),
    title: "Home",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "About Invoicer",
    url: "/about",
  },
  {
    id: uuidv4(),
    title: "Suggestion Box",
    url: "/suggestion-box",
  },
]

export const testimonials = [
  {
    id: uuidv4(),
    desc: "Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.",
    name: "Heléna Aparajita",
    company: "Adverb",
    image: "./assets/image-1.png",
    icon: <FaTwitter className="text-blue-500 text-2xl" />,
  },
  {
    id: uuidv4(),
    desc: "New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may.",
    name: "Hugh No'ah",
    company: "YouTube",
    image: "./assets/image-2.png",
    icon: <FaTwitter className="text-blue-500 text-2xl" />,
  },
  {
    id: uuidv4(),
    desc: "Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest.",
    name: "Demostrate Elvan",
    company: "TsbDesigns",
    image: "./assets/image-3.png",
    icon: <FaTwitter className="text-blue-500 text-2xl" />,
  },
]
