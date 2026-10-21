import { Banner } from "../../components/Banner/Banner";
import { News } from "../../components/News/News";

export function HomePage() {
    return (
        <>
            <Banner />
            <main className="container">
                <News />
            </main>
        </>
    )
}