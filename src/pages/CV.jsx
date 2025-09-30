import myData from "../assets/myData.json";
import Card from "../components/common/Card";
import PageLayout from "../components/layout/PageLayout";
import DocumentHead from "../components/common/DocumentHead";

export default function CV() {
    return (
        <>
            <DocumentHead
                title="CV | Rasmus Wenngren"
                description="Professional experience, education and skills of Rasmus Wenngren"
            />

            <PageLayout
                heroProps={{
                    title: "Rasmus Wenngren",
                    subtitle: "Discover my work, skills, and projects.",
                    buttonText: "Contact me!",
                    buttonLink: "/contact"
                }}
                pageTitle="Welcome to my CV!"
            >
                <p>Here is some more specified information about my previous work experience and qualifications.</p>

                <section
                    className="grid"
                    aria-label="CV sections"
                >
                    {Object.values(myData.sections).map((section, index) => (
                        <Card
                            key={index}
                            variant="experience"
                            title={section.title}
                            items={section.items || []}
                        />
                    ))}
                </section>

                <div className="print-section">
                    <button
                        onClick={() => window.print()}
                        className="btn print-button"
                        aria-label="Print CV"
                    >
                        Print CV
                    </button>
                </div>
            </PageLayout>
        </>
    );
}
