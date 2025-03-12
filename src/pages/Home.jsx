import Card from "../components/Card";
import PageLayout from "../components/PageLayout";
import img1 from "../assets/Pictures/img1.JPG";
import img2 from "../assets/Pictures/img2.JPG";
import img3 from "../assets/Pictures/img3.JPG";

const cardData = [
  {
    title: "Recap",
    image: img1,
    imageId: "img-recap",
    description:
      "Former Baker/Chef with a lot of experience and now on a journey to become a .NET programmer. If you want someone to bring good stuff to the office you found just the guy! Spent time abroad in England, sometimes get asked if I'm actually English (Yay!). Recently married with two daughters.",
  },
  {
    title: "What do I like?",
    image: img2,
    imageId: "img-likes",
    description:" A lot! Cooking for sure, reading, exercising. My family, love them to the moon and back. Spending time at our summerhouse. Learning new things, besides learning to become a programmer I'm still learning how to be good father and husband. Constant evolvning. And since we got ourself a house I do need to learn the art of how to renovate properly and tend to the garden."
    },
  {
    title: "Personality",
    image: img3,
    imageId: "img-personality",
    description:
      "Dedicated, Witty (some dare say, and there is two eastereggs hidden somewhere), Loyal, Adaptible, Communicative, Structured. Family first (family always comes first, I've learned the hard way that some companies do not see it that way)",
  },
];
console.log(img1);
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
        <section className="grid" >
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
        </section>
      </PageLayout>
    </>
  );
}
