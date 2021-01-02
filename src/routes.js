import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Repositorios from './pages/repositorios'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/repositorio/:repositorio" component={Repositorios}/>
            </Switch>
        </BrowserRouter>
    )
}