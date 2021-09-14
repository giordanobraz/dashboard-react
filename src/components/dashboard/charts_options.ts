import { ApexOptions } from "apexcharts";
import imgEarnings from "../../assets/icons/bank.svg";
import imgPatient from "../../assets/icons/crutch.svg";
import imgMedkit from "../../assets/icons/medkit.svg";
import imgOperation from "../../assets/icons/operation.svg";

export const chart_survey_options_series = [
  {
    name: "Patients 2019",
    data: [49, 60, 70, 91, 125, 50, 40, 35, 50, 149, 103, 204],
  },
  {
    name: "Patients 2020",
    data: [149, 103, 204, 303, 128, 44, 302, 94, 115, 50, 40, 35],
  },
];

export const chart_survey_options: ApexOptions = {
  title: {
    text: "Hospital Survey",
    margin: 10,
    style: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#25282b",
    },
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    markers: {
      radius: 15,
    },
  },
  dataLabels: { enabled: false },
  colors: ["#FAC032", "#336cfb"],
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#a0a4a8",
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
    },
    colors: ["#336cfb"],
  },
  xaxis: {
    categories: [
      "2020 - 1",
      "2020 - 2",
      "2020 - 3",
      "2020 - 4",
      "2020 - 5",
      "2020 - 6",
      "2020 - 7",
      "2020 - 8",
      "2020 - 9",
      "2020 - 10",
      "2020 - 11",
      "2020 - 12",
    ],
  },
  stroke: {
    curve: "smooth",
  },
};

export const cards_data = [
  {
    key: 1,
    image: imgMedkit,
    title: "Appointments",
    value: 213,
  },
  {
    key: 2,
    image: imgPatient,
    title: "New Patients",
    value: 104,
  },
  {
    key: 3,
    image: imgOperation,
    title: "Operations",
    value: 24,
  },
  {
    key: 4,
    image: imgEarnings,
    title: "Hospital Earnings",
    value: "$ 12,174",
  },
];
