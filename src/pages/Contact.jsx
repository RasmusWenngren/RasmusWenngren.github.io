import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/layout/PageLayout";
import Card from "../components/common/Card";
import DocumentHead from "../components/common/DocumentHead";

const contactOptions = [
  {
    title: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" aria-hidden="true" />,
    link: "mailto:rasmuswenngren@gmail.com?subject=Don't forget to add a subject!&body=Feel free to start a conversation about whatever you like!",
    ariaLabel: "Send email to Rasmus Wenngren",
  },
  {
    title: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} size="2x" aria-hidden="true" />,
    link: "https://github.com/RasmusWenngren92",
    ariaLabel: "Visit Rasmus Wenngren's GitHub profile",
  },
  {
    title: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitter} size="2x" aria-hidden="true" />,
    link: "https://x.com/rasemouse",
    ariaLabel: "Visit Rasmus Wenngren's Twitter profile",
  },
  {
    title: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} size="2x" aria-hidden="true" />,
    link: "https://www.linkedin.com/in/rasmus-wenngren-a80834269",
    ariaLabel: "Visit Rasmus Wenngren's LinkedIn profile",
  },
  {
    title: "WhatsApp",
    icon: <FontAwesomeIcon icon={faPaperPlane} size="2x" aria-hidden="true" />,
    link: "https://wa.me/+46709248696",
    ariaLabel: "Contact Rasmus Wenngren on WhatsApp",
  },
];

export default function Contact() {
  return (
      <>
        <DocumentHead
            title="Contact Me | Rasmus Wenngren"
            description="Various ways to get in touch with Rasmus Wenngren"
        />

        <PageLayout
            heroProps={{
              title: "Don't be afraid to reach out to me!",
              subtitle: "I'm always open for new ideas, or just having a chat.",
              buttonText: "Email me!",
              onButtonClick: () => window.location.href = "mailto:rasmuswenngren@gmail.com"
            }}
            pageTitle="How to Contact Me!"
        >
          <p>
            You can contact me in a few different ways. Pick and choose which one
            you prefer.
          </p>

          <section
              className="contact-grid"
              aria-label="Contact options"
          >
            <div className="contact-info">
              {contactOptions.map((option, index) => (
                  <Card
                      key={index}
                      variant="contact"
                      title={option.title}
                      icon={option.icon}
                      link={option.link}
                      className="contact-card"
                      aria-label={option.ariaLabel}
                  />
              ))}
            </div>
          </section>
        </PageLayout>
      </>
  );
}