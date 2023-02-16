import React from 'react';
import CanvasJSReact from 'canvasjs-react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  animationEnabled: true,
  theme: "light2",
  title: {
    text: "Front-End Web Development Skills"
  },
  axisY: {
    title: "Expertise Level",
    suffix: "/10",
    minimum: 0,
    maximum: 10,
    interval: 2
  },
  data: [{
    type: "bar",
    dataPoints: [
      { label: "HTML", y: 9 },
      { label: "CSS", y: 9 },
      { label: "JavaScript", y: 8 },
      { label: "React", y: 7 },
      { label: "Vue", y: 6 },
      { label: "Angular", y: 6 },
      { label: "Bootstrap", y: 8 },
      { label: "jQuery", y: 7 }
    ]
  }]
};

export default function SkillBarChart() {
  return (
    <CanvasJSChart options={options} />
  );
}
