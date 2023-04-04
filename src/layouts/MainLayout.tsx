import { Fragment, useContext } from 'react';
import './MainLayout.sass'
import { LoadingContext } from '../contexts/loadingContext';
type Props = {
    children: JSX.Element
}
export const MainLayout = ({ children } : Props) => {
    const [loading, _] = useContext(LoadingContext);
    return (
        <Fragment>
            <nav className="navigation-bar">
                <h1>Podcaster</h1>
                <div>{loading && 'Loading...'}</div>
            </nav>
            <main>
                { children }
            </main>
        </Fragment>
    )
}