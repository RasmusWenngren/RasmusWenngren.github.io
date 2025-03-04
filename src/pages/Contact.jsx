import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

const cardData = [
  {
    icon: faEnvelope,
    link: "mailto:rasmuswenngren@gmail.com?subject=Don't forget to add a subject!&body=Feel free to start a conversation about whatever you like!",
  },
  {
    icon: faGithub,
    link: "https://github.com/RasmusWenngren92",
  },
  {
    icon: faTwitter,
    link: "https://x.com/rasemouse",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/rasmus-wenngren-a80834269",
  },
  {
    icon: faPaperPlane,
    link: "https://wa.me/+46709248696",
  },
];

export default function Contact() {
  return (
    <PageLayout
      heroTitle="Don't be afraid to reach out to me!"
      heroSubtitle="I'm always open for new ideas, or just having a chat."
      heroButtonText="Email me!"
      heroButtonAction={() =>
        (window.location.href = "mailto:rasmuswenngren@gmail.com")
      }
      pageTitle="How to Contact Me!"
    >
      <p>
        You can contact me in a few different ways. Pick and choose witch one
        you prefere.
      </p>

      <section className="contact-grid">
        <div className="contact-info">
          {cardData.map((card, index) => (
            <Card 
            id="background"
              key={index}
              {...card}
              icon={<FontAwesomeIcon icon={card.icon} size="2x" />}
              link={card.link}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
