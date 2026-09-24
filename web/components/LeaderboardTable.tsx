

export default function LeaderboardTable() {
    return (
        <div className="border border-white h-100 ">
            <table className="w-full text-left">
                <thead className="bg-zinc-900 text-zinc-400 border-b border-zinc-800 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3">Rank</th>
                        <th className="px-4 py-3">Model</th>
                        <th className="px-4 py-3">Organization</th>
                        <th className="px-4 py-3">Resolved (%)</th>
                        <th className="px-4 py-3">Cost ($)</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}