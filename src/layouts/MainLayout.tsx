import { Fragment } from 'react';
import './MainLayout.sass'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoaderState } from '../stores/podcast.slice';

type Props = {
    children: JSX.Element
}
export const MainLayout = ({ children } : Props) => {
    const loading = useSelector((state: LoaderState) => state.loader.value);
    return (
        <Fragment>
            <nav className="navigation-bar">
                <h1><Link to="/">Podcaster</Link></h1>
                {loading && <div className="loader"></div>}
            </nav>
            <main>
                { children }
            </main>
        </Fragment>
    )
}