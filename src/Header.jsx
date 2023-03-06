import './Header.scss'
import TopMenu from './TopMenu'

export default function Header() {

    const fooValue = '123';

    return (
        <header className="header">
            <div className="header__sitename">
                Black Books
            </div>

            <TopMenu
                currentItem={ 'about' }
            />
        </header>
    )

}