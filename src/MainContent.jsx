import './MainContent.scss';

export default function MainContent({ page }) {

    let content = '';

    if (page === '') {
        content = (
            <h2>Welcome into our Bookshop</h2>
        )
    } else if (page === 'about') {
        content = (
            <h2>About Us</h2>
        )
    } else if (page === 'contact') {
        content = (
            <h2>Contact Us!</h2>
        )
    } else if (page === 'books') {
        content = (
            <h2>Books index</h2>
        )
    } else if (page === 'authors') {
        content = (
            <h2>Authors index</h2>
        )
    } else {
        content = (
            <h2>404: Page not found</h2>
        )
    }

    return (
        <main className="main">
            <h1 className="app__headline">Black Books</h1>

            { content }
        </main>
    )

}