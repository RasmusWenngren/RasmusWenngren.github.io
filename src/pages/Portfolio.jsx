import PageLayout from "../components/PageLayout";
import Project from "../components/Project";



export default function Projects() {
  return (
    <>
      <PageLayout heroTitle="My portfolio" heroSubtitle="Fell free to browse!">
        <h1>Welcome to the Portfolio!</h1>
        <p>Below you will find some of my projects.</p>
        <section>
          <div className="grid">
            <Project />
          </div>
        </section>
      </PageLayout>
    </>
  );
}
