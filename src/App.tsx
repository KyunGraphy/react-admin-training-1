import React from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import { dataProvider } from "./dataProvider";
import { Room } from "./components/Room";
import { MyLayout } from "./components/MyLayout";

function App() {
    return (
        <React.Fragment>
            <Admin dataProvider={dataProvider} layout={MyLayout}>
                <Resource name="Room" list={Room} />
            </Admin>
        </React.Fragment>
    );
}

export default App;
