import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function EasterEggs() {
  const location = useLocation();

  useEffect(() => {
    const originalBgColor = document.body.style.backgroundColor;

    const firstEasterEgg = () => {
      const copyrightLink = document.querySelector("footer a:first-child");

      if (copyrightLink) {
        const changeColor = (e) => {
          e.preventDefault();
          const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;
          document.body.style.backgroundColor = randomColor;
        };

        copyrightLink.addEventListener("click", changeColor);

        return () => {
          copyrightLink.removeEventListener("click", changeColor);
        };
      }
    };

    const secondEasterEgg = () => {
      let secretCode = "";
      const targetCode = "1337";

      const modal = document.createElement("div");
      modal.classList.add("eastereggModal");

      modal.innerHTML = `
        <div class="eastereggModal-content">
          <button class="close-modal">&times;</button> 
          <h2>🎉 Congratz!</h2>
          <p>You found the easter egg! You really are 1337!</p>
        </div>
      `;

      document.body.appendChild(modal);

      const handleKeyUp = (event) => {
        secretCode += event.key;

        if (secretCode.length > 4) {
          secretCode = secretCode.slice(-4);
        }

        if (secretCode === targetCode) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          modal.classList.add("show");
          secretCode = "";
        }
      };

      document.addEventListener("keyup", handleKeyUp);

      const closeButton = modal.querySelector(".close-modal");
      closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
      });

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("show");
        }
      });

      return () => {
        document.removeEventListener("keyup", handleKeyUp);
        document.body.removeChild(modal);
      };
    };

    const cleanupFirst = firstEasterEgg();
    const cleanupSecond = secondEasterEgg();

    return () => {
      if (cleanupFirst) cleanupFirst();
      if (cleanupSecond) cleanupSecond();
      document.body.style.backgroundColor = originalBgColor;
    };
  }, [location.pathname]);

  return null;
}
