import Header from "./components/Header"
import Body from "./components/Body"
import { useState } from "react"

function App() {
    const [page, setPage] = useState(1)

    return (
        <div className="App">
            <Header />
            <Body page={page} setPage={setPage} />
        </div>
    )
}

export default App
