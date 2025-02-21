import Card from "../components/Card";
import Hero from "../components/Hero";
import { NavLink } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const cardData = [
  {
    title: "Korttitel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni esse reiciendis voluptatem, culpa quibusdam delectus maiores veniam optio perspiciatis beatae animi iure a, omnis in ab ipsam quod accusamus voluptates.",
  },
  {
    title: "Korttitel",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni esse reiciendis voluptatem, culpa quibusdam delectus maiores veniam optio perspiciatis beatae animi iure a, omnis in ab ipsam quod accusamus voluptates.",
  },
  {
    title: "Korttitel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni esse reiciendis voluptatem, culpa quibusdam delectus maiores veniam optio perspiciatis beatae animi iure a, omnis in ab ipsam quod accusamus voluptates.",
  },
];
export default function Home() {
  return (
    <>
      <PageLayout
        heroTitle="Welcome"
        heroSubtitle="Discover my work, skills and projects."
        heroButtonText="View Portfolio"
        heroButtonLink="/portfolio"
      >
        <h1>Fancy seeing you here!</h1>
        <section className="grid">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </section>
      </PageLayout>
    </>
  );
}
