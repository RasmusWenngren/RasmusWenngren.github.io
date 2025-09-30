

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <a
                    href="#"
                    aria-label="Copyright easter egg"
                >
                    &copy; {currentYear}
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/rasmus-wenngren-a80834269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Rasmus Wenngren's LinkedIn profile"
                >
                    Created by Rasmus Wenngren
                </a>
            </div>
        </footer>
    );
}
