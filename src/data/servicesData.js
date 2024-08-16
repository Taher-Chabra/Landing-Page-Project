import uiuxImage from "../../public/Services-assets/service-uiux.png"
import webImage from "../../public/Services-assets/service-web.png"
import appImage from "../../public/Services-assets/service-app.png"
import graphicsImage from "../../public/Services-assets/service-graphic.png"
import Image from "next/image"

export const servicesData = [
   {
      id: 1,
      icon: <Image src={uiuxImage} alt="UI/UX Image" width={35} height={35}/>,
      skill: "UX",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
   },
   {
      id: 2,
      icon: <Image src={webImage} alt="UI/UX Image" width={35} height={40}/>,
      skill: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
   },
   {
      id: 3,
      icon: <Image src={appImage} alt="UI/UX Image" width={30} height={40}/>,
      skill: "App Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
   },
   {
      id: 4,
      icon: <Image src={graphicsImage} alt="UI/UX Image" width={40} height={35}/>,
      skill: "Graphic Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
   }
]