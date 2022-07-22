import image1 from "../images/Group 18014.png";
import image2 from "../images/Group 18015.png";
import image3 from "../images/Group 18016.png";
import client1 from "../images/client-1.png";
import client2 from "../images/client-2.png";
import client3 from "../images/client-3.png";
import BeforeImage1 from "../images/“ (2).svg";
import BeforeImage2 from "../images/“ (1).svg";
import BeforeImage3 from "../images/“.svg";

export const featureMockData = [
  {
    title: "Basic placeholder personalization",
    desc: "Advanced Personalization Engine.",
    src: image1,
    descColor: "text-orange",
  },
  {
    title: "Virtually non-existent Rep-level Permissions",
    desc: "Air-tight User Permissions Settings for fast-scaling and enterprise sales teams",
    src: image2,
    descColor: "text-highlight",
  },
  {
    title: "Executing the same tasks for all prospects",
    desc: "Automated Activity Switches based on prospect behavior",
    src: image3,
    descColor: "text-violet",
  },
];

export const carouselMockData = [
  {
    src: client3,
    name: "Gavin Tye",
    design: "Sales Director, Red Eye Ventures",
    desc: "Klenty changed our business. It allowed our outbound sales team to leverage their time and skills.",
    nameColor: "#FF9838",
    beforeImage: BeforeImage1,
  },
  {
    src: client1,
    name: "Adam",
    design: "President, Double The Donation",

    desc: "Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%.",
    nameColor: "#0DC87B",
    beforeImage: BeforeImage3,
  },
  {
    src: client2,
    name: "Laura Villeda",
    design: "Lead Project Manager - Blacktrust",
    desc: "Klenty is easy to use, with many features that help to have an approach of new clients. Sending emails to prospects is easier.",
    nameColor: "#0089FF",
    beforeImage: BeforeImage2,
  },
];
