import Card from "../components/common/Card";
import PageLayout from "../components/layout/PageLayout";
import DocumentHead from "../components/common/DocumentHead";
const img1 = new URL('../assets/Pictures/img1.JPG', import.meta.url).href;
const img2 = new URL('../assets/Pictures/img2.JPG', import.meta.url).href;
const img3 = new URL('../assets/Pictures/img3.JPG', import.meta.url).href;

const cardData = [
  {
    title: "Recap",
    image: img1,
    imageId: "img-recap",
    imageAlt: "Personal photo of Rasmus",
    description:
        "Former Baker/Chef with a lot of experience and now on a journey to become a .NET programmer. If you want someone to bring good stuff to the office you found just the guy! Spent time abroad in England, sometimes get asked if I'm actually English (Yay!). Recently married with two daughters."
  },
  {
    title: "What do I like?",
    image: img2,
    imageId: "img-likes",
    imageAlt: "Photo representing interests and hobbies",
    description:
        "A lot! Cooking for sure, reading, exercising. My family, love them to the moon and back. Spending time at our summerhouse. Learning new things, besides learning to become a programmer I'm still learning how to be good father and husband. Constant evolving. And since we got ourself a house I do need to learn the art of how to renovate properly and tend to the garden."
  },
  {
    title: "Personality",
    image: img3,
    imageId: "img-personality",
    imageAlt: "Photo representing personality traits",
    description:
        "Dedicated, Witty (some dare say, and there are two easter eggs hidden somewhere), Loyal, Adaptable, Communicative, Structured. Family first (family always comes first, I've learned the hard way that some companies do not see it that way)"
  },
];

export default function Home() {
  return (
      <>
        <DocumentHead
            title="Rasmus Wenngren | Personal Portfolio"
            description="Personal website of Rasmus Wenngren, developer and former baker/chef"
            ogTitle="Rasmus Wenngren Portfolio"
            ogDescription="Check out my personal website and projects"
        />

        <PageLayout
            heroProps={{
              title: "Welcome",
              subtitle: "Discover my work, skills and projects.",
              buttonText: "View Portfolio",
              buttonLink: "/portfolio"
            }}
        >
          <h1>Fancy seeing you here!</h1>
          <section
              className="grid"
              aria-label="Personal introduction cards"
          >
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    {...card}
                />
            ))}
          </section>
        </PageLayout>
      </>
  );
}
