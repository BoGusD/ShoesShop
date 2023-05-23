const URL = "http://localhost:3000";

export interface shoesDataType {
  name: string;
  gender: string;
  price: number;
  alt: string;
}

export const shoes: shoesDataType[] = [
  {
    name: `/shoes/여성캔버스.jpg`,
    gender: "female",
    price: 20000,
    alt: "여성캔버스",
  },
  {
    name: `/shoes/아쿠아슈즈.jpg`,
    gender: "male",
    price: 30000,
    alt: "남성 아쿠아슈즈",
  },
  {
    name: `/shoes/스케이트 스니커즈.jpg`,
    gender: "male",
    price: 60000,
    alt: "스케이트 스니커즈",
  },
  {
    name: `/shoes/스니커테크.jpg`,
    gender: "male",
    price: 220000,
    alt: "스니커테크",
  },
  {
    name: `/shoes/슈올즈.jpg`,
    gender: "male",
    price: 28000,
    alt: "슈올즈",
  },
  {
    name: `/shoes/내셔널지오그래픽신발.jpg`,
    gender: "male",
    price: 120000,
    alt: "내셔널지오그래픽신발",
  },
  {
    name: `/shoes/스케쳐스.jpg`,
    gender: "male",
    price: 32000,
    alt: "스케쳐스",
  },
];
