const Wrapper = (props) => {
    return (
        <div style={{ color: 'green' }}>
            {props.children}
        </div>
    )
}

export default Wrapper;


// Wrapper로 싸주면, 본인 밖에 안 나와서 props의 children을 사용해서 wrapper의 자식들을 나ㅇ게 한다.

/* const Wrapper = ({ children }) => {
    return (`
        <div style={{ color: 'green' }}>
            {children}
        </div>
    )
} */