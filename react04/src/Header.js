function Header(props) {
    return (
        <header>
            <ul>
                {props.what}
                {props.member.map(el => <li key={el.id}>{el.name}</li>)}
                {/* <li>{props.member[0].name}</li>
            <li>{props.member[1].name}</li>
            <li>{props.member[2].name}</li>
            <li>{props.member[3].name}</li> */}
            </ul>
        </header>
    )
}

export default Header;