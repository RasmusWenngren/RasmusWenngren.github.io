import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../components/PageLayout";

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

        
          <div className="contact-info">
            <a
              href="mailto:rasmuswenngren@gmail.com?subject=Don't forger to add a subject!&body=Feel free to start  conversation about whaterver you like!?"
              aria-label="Email me"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/RasmusWenngren92" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/rasemouse" aria-label="X former Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/rasmus-wenngren-a80834269/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFgQb%2B93ST0G8ycoG83SzzA%3D%3D"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/+46709248696">
              <FontAwesomeIcon
                icon={faPaperPlane}
                aria-label="Send Message on WhatsApp"
              />
            </a>
          </div>
        
      </PageLayout>
    </>
  );
}
