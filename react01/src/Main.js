const Main = ({ lee, work }) => {
    return (
        <main>
            {lee}는 {work}를 즐겨합니다.
        </main>
    )

    /* const Main = (props) => {
        return (
            <main>
                {props.lee}
            </main>
        )
    
     const Main = (props) => {
        const { lee } = props;
        return (
            <main>
                {lee}
            </main>
        ) */


}

// 전달받은 값이 없을 때, 기본으로 전해주는 값
Main.defaultProps = {
    work: '놀고 먹기'
}
export default Main;

/* 태그 안에 있는 건 문자로 받는다. 그래서 중괄호 해줘야한다. {console.log(props)}
리턴된 곳 안에는 문자로 받아들이기 때문에 중괄호를 써준다  = 자바스크립트로 받아들임 */

// if문 for문 안 쓴다

// props는 객체다

// {console.log(props.lee)} 객체에 있는 value값을 받을 때는 . 써줌