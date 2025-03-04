import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/PageLayout";

const contactData = [
  {
    title: "Email",
    icon: faEnvelope,
    link: "mailto:rasmuswenngren@gmail.com?subject=Don't forget to add a subject!&body=Feel free to start a conversation about whatever you like!",
    description:
      "Send me an email, and I'll get back to you as soon as possible!",
  },
  {
    title: "GitHub",
    icon: faGithub,
    link: "https://github.com/RasmusWenngren92",
    description: "Check out my projects and contributions on GitHub!",
  },
  {
    title: "Twitter (X)",
    icon: faTwitter,
    link: "https://x.com/rasemouse",
    description: "Follow me on X (formerly Twitter) to stay updated!",
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/rasmus-wenngren-a80834269",
    description: "Connect with me on LinkedIn and let's network!",
  },
  {
    title: "WhatsApp",
    icon: faPaperPlane,
    link: "https://wa.me/+46709248696",
    description: "Send me a message on WhatsApp for a quick chat!",
  },
];

export default function Contact() {
  return (
    <>
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

        <section className="grid">
          {contactData.map((contact, index) => (
            <Card
              key={index}
              title={contact.title}
              description={contact.description}
              icon={<FontAwesomeIcon icon={contact.icon} size="2x" />}
              link={contact.link}
            />
          ))}
        </section>
      </PageLayout>
    </>
  );
}
