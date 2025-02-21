import Card from "../components/Card";
import PageLayout from "../components/PageLayout";

const cardData = [
  {
    title: "Baking",
    image:
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "For the last 10 years I was working as a baker. Most of that time I worked at Valhallabageriet located in Stockholm. I worked my way to the top and was their headbaker for some time and I also helped them open a new bakery located nearby.",
  },
  {
    title: "Restaurant",
    image:
      "https://www.northcote.com/wp-content/uploads/sites/3/2019/09/022-Lisas-Obsession20-72dpi24-01-20_.jpg",
    description:
      "For a few years I had the opportunity to go to the UK and work at a Michelin Star restaurant. I worked my way up to Chef the Patiserie after 2 years, I learnt a lot about responsibilities. Both my own but also for the team that I was working with. It was a harsh enviorment, but I'm glad I did it.",
  },
  {
    title: "Family",
    image:
      "https://plus.unsplash.com/premium_photo-1664367173144-7e854e199524?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      " I have a lovely wife and two beautiful daughters. I love spending time with my family, we reacently accuiered a summer house where we tend to spend as much time as possible. Family have tought me a lot about myself, who I am who I want to be. And how to priorotise. Many people seems to put work first, witch was the case for me for a long time. But after having kids I realised that there more to this life then working.",
  },
  {
    title: "Coding",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "So how did I end up behind a computer? Well, bakery is fun, but not something that's suitable when having two small kids. My goal is to become a great developer and to be able to have a more flexible work, and a better pay. So that in the end I can spend time with the people that mean the most to me.",
  },
];

export default function About() {
  return (
    <PageLayout
      heroTitle="Who Am I?"
      heroSubtitle="All you need to know about me."
      heroButtonText="Contact me!"
      heroButtonLink="/contact"
    >
      <section className="grid">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </PageLayout>
  );
}


