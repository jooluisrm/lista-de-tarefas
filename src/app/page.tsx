import { Header } from "@/components/header";
import { Main } from "@/components/main";

const Page = () => {
    return (
        <div className="min-h-screen bg-[#17181F]">
            <div className="container mx-auto">
                <Header />
                <Main />
            </div>
        </div>

    );
}

export default Page;