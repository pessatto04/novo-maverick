import menu from "../constants/menu";

function Menu() {
    return (
        <nav>
            <ul className="mv-nav-top">
                {menu.map((item) => (
                    <li key={item.name}>
                        <a target="_blank" rel="noopener noreferrer" href={item.url}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;