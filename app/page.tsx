
import Header from "@/components/Header"
import LeaderboardTable from "@/components/LeaderboardTable"
export default function Home() {
    return (
        <>
        
        <div className="p-0">
           <Header/>
        </div>
        <div className="mx-3 my-8 w-100 p-2 text-4xl font-extrabold">
            A challenging, contamination-free LLM benchmark.
        </div>
        <LeaderboardTable/>
        </>
    )
}
