import Image from 'next/image'
import person1 from '../../public/Testimonial-assets/testimony1.png'
import person2 from '../../public/Testimonial-assets/testimony2.png'

export const testimonialData = [
   {
      id: 1,
      img: <Image src={person1}/>,
      testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      designation: "CEO"
   },
   {
      id: 2,
      img: <Image src={person2}/>,
      testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      designation: "CEO"
   },
   {
      id: 3,
      img: <Image src={person2}/>,
      testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      designation: "CEO"
   },
   {
      id: 4,
      img: <Image src={person1}/>,
      testimonial: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "Name",
      designation: "CEO"
   },
]