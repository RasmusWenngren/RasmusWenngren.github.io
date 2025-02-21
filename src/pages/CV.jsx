import myData from "../assets/myData.json";
import Card from "../components/Card";
import PageLayout from "../components/PageLayout";

export default function CV() {
  return (
    <>
      <PageLayout
        heroTitle="Rasmus Wenngren"
        heroSubtitle="Discover my work, skills, and projects."
        heroButtonText="Contact me!"
        heroButtonLink="/contact"
        pageTitle="Welcome to my CV!"
      >
        <p>Here is some more specified information about previous work</p>
        <section className="grid">
          {Object.values(myData.sections).map((section, index) => (
            <Card
              key={index}
              title={section.title}
              items={section.items || []}
            />
          ))}
        </section>
      </PageLayout>
    </>
  );
}

