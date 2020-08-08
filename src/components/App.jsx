import React, { useState, useEffect } from "react"
import Header from "./Header"
import Home from "./Home"
import Countries from "./Countries"
import Maps from "./Maps"
import { About } from "./About"
import CountryDetails from "./CountryDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./Footer"

function App() {
    const [colorTheme, setColorTheme] = useState("")

    useEffect(() => {
        const currentThemeColor = localStorage.getItem("theme-color")

        if (currentThemeColor) {
            setColorTheme(currentThemeColor)
        }
    }, [])

    function handleTheme(theme) {
        setColorTheme(prevValue => {
            if (prevValue === "dark-theme") {
                return ""
            } else {
                return "dark-theme"
            }
        })
        localStorage.setItem("theme-color", theme)
    }

    return (
        <Router>
            <div className={`App ${colorTheme}`}>
                <Header
                    addTheme={handleTheme}
                    mode={colorTheme}
                />
                <div className="app-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/countries" exact component={Countries} className="countries" />
                        <Route path="/maps" exact component={Maps} className="maps" />
                        <Route path="/about" exact component={About} className="about" />
                        <Route path="/details/:name" component={CountryDetails} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App