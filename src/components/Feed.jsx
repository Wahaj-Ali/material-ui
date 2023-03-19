import React from 'react'
// import {default as UUID} from "node-uuid";
import { Box } from '@mui/material'
import { Posts } from './Posts';

export const Feed = () => {
  const people = [{
    fullName: 'Amanuel',
    nameInitial: 'A',
    image: "https://images.pexels.com/photos/15954328/pexels-photo-15954328.jpeg",
    desc: "A black and white photo of a basket ball court in Kerkyra, Graikija.",
    pc: "Artūras Kokorevas",
    id: 0,
  },
  {
    fullName: 'Basit',
    nameInitial: 'B',
    image: "https://images.pexels.com/photos/14939897/pexels-photo-14939897.jpeg",
    desc: "Grayscale Photo of La Sagrada Familia",
    id: 1,
  },
  {
    fullName: 'Saqib',
    nameInitial: 'S',
    image: "https://images.pexels.com/photos/13828592/pexels-photo-13828592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "İstanbul, İstanbul, Türkiye",
    pc: "Nurefşan KOŞAR",
    id: 2,
  },
  {
    fullName: 'Lucas',
    nameInitial: 'L',
    image: "https://images.pexels.com/photos/9291849/pexels-photo-9291849.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pc: "Anna Romanova",
    desc: "Grayscale Photo of the Naval St. Nicholas Cathedral",
    id: 3,
  },
  {
    fullName: 'David',
    nameInitial: 'D',
    image: "https://images.pexels.com/photos/11155363/pexels-photo-11155363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pc: "Aliia Troitskaya",
    desc: "Close-up of a Modern Apartment Building",
    id: 4,
  },
  {
    fullName: 'Rizwan',
    nameInitial: 'R',
    image: "https://images.pexels.com/photos/4701571/pexels-photo-4701571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pc: "Jude Ballado",
    desc: "Drone Photography of an Apartment Building",
    id: 5,
  },];

  return (
    <Box flex={4} p={2}>
      {people.map((person) => {
        return <Posts title={person.fullName}
          nameInitial={person.nameInitial}
          image={person.image}
          description={person.desc}
          picCredit={person.pc}
          key={person.id}
        />
      })}
    </Box>
  )
}
