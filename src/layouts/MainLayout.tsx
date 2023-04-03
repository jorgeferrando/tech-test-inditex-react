import { Fragment } from 'react';
import './MainLayout.sass'
type Props = {
    children: JSX.Element
}
export const MainLayout = ({ children } : Props) => {
    return (
        <Fragment>
            <nav className="navigation-bar">
                <h1>Podcaster</h1>
            </nav>
            <main>
                { children }
            </main>
        </Fragment>
    )
}