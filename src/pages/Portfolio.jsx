import PageLayout from '../components/layout/PageLayout';
import ProjectList from '../components/features/ProjectList';
import DocumentHead from '../components/common/DocumentHead';

export default function Portfolio() {
    return (
        <>
            <DocumentHead
                title="My Portfolio | Rasmus Wenngren"
                description="View my portfolio of programming projects"
            />

            <PageLayout
                heroProps={{
                    title: "My Portfolio",
                    subtitle: "Feel free to browse!"
                }}
                pageTitle="Welcome to the Portfolio!"
            >
                <p>Below you will find some of my projects pulled directly from GitHub.</p>

                <section>
                    <div className="grid" aria-label="Project gallery">
                        <ProjectList />
                    </div>
                </section>
            </PageLayout>
        </>
    );
}
