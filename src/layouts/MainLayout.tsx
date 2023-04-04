import { Fragment } from 'react';
import './MainLayout.sass'
import { useSelector } from 'react-redux';
type Props = {
    children: JSX.Element
}
export const MainLayout = ({ children } : Props) => {
    const loading = useSelector(state => state.podcasts.loading);
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