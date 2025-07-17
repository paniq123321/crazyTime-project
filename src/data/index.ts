import type { InputList } from "./model";

//roulette data
export const inputList: InputList[] = [
  {
    option: "1",
    id: "one",
    style: { backgroundColor: "rgb(40,142,244)" },
  },
  {
    option: "2",
    id: "two",
    style: { backgroundColor: "rgb(255,204,0)" },
  },
  {
    option: "5",
    id: "five",
    style: { backgroundColor: "rgb(0,153,51)" },
  },
  {
    option: "10",
    id: "ten",
    style: { backgroundColor: "rgb(204,0,0)" },
  },
  {
    option: "cash hunt",
    id: "ch",
    style: { backgroundColor: "green" },
  },
  {
    option: "coin flip",
    id: "cf",
    style: { backgroundColor: "darkblue" },
  },
  {
    option: "pachinco",
    id: "p",
    style: { backgroundColor: "pink" },
  },
  {
    option: "crazy time",
    id: "ct",
    style: { backgroundColor: "red" },
  },
];

const coin_flip = [
  inputList[5],
  inputList[0],
  inputList[3],
  inputList[0],
  inputList[2],
  inputList[0],
];
const cash_hunt = [
  inputList[4],
  inputList[0],
  inputList[1],
  inputList[3],
  inputList[0],
  inputList[1],
];
const pachinco = [
  inputList[6],
  inputList[0],
  inputList[2],
  inputList[0],
  inputList[1],
  inputList[0],
];
const crazy_time = [
  inputList[7],
  inputList[0],
  inputList[1],
  inputList[2],
  inputList[0],
  inputList[1],
];

export const rouletteData = [
  ...coin_flip,
  ...cash_hunt,
  ...coin_flip,
  ...crazy_time,
  ...pachinco,
  ...coin_flip,
  ...cash_hunt,
  ...coin_flip,
  ...pachinco,
];

//crazyTime data

export const crazyTimeList: InputList = [
  {
    option: "5",
    id: "five",
    style: { backgroundColor: "green" },
  },
  {
    option: "10",
    id: "ten",
    style: { backgroundColor: "green" },
  },
  {
    option: "15",
    id: "fifteen",
    style: { backgroundColor: "green" },
  },
  {
    option: "20",
    id: "twenty",
    style: { backgroundColor: "green" },
  },
  {
    option: "25",
    id: "twenty-five",
    style: { backgroundColor: "green" },
  },
  {
    option: "30",
    id: "thirty",
    style: { backgroundColor: "green" },
  },
  {
    option: "35",
    id: "thirty-five",
    style: { backgroundColor: "green" },
  },
  {
    option: "40",
    id: "forty",
    style: { backgroundColor: "green" },
  },
  {
    option: "45",
    id: "forty-five",
    style: { backgroundColor: "green" },
  },
  {
    option: "50",
    id: "fifty",
    style: { backgroundColor: "green" },
  },
];
