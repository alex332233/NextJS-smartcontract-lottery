import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-blog text-3xl">Decentralized Lottery : 去中心化樂透</h1>
            <div className="my-auto ml-auto">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
