import { Fragment} from "react";
import MainHeader from './main-header';

function Layout(props){
    return (
        <Fragment>
            <MainHeader/>
            <header>
                <main>
                    {props.children}
                </main>
            </header>
        </Fragment>
    );
}
export default Layout;