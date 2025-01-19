import './App.scss'
import Sidebar from './components/Sidebar/Sidebar.tsx'
import Header from './components/Header/Header.tsx'
import Content from './components/Content/Content.tsx'
function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}

export default App
