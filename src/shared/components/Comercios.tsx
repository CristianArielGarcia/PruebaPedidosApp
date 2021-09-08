import { AppBar, Grid, Tabs } from '@material-ui/core'
import React from 'react'
import { JsxTagNameExpression } from 'typescript'
import { Header } from '../navbar/Header'
import { NavBar } from '../navbar/NavBar'
import { Tarjeta } from './card/Tarjeta'
import { TabsComponent } from './tabs/TabsComponent'


export const Comercio = (): JSX.Element => {
    return (
        <div>
            <div className="w-screen sm:w-full lg:w-full" >
                <NavBar />
                <Header/>
                <TabsComponent />
            </div>

        </div>
    )
}
