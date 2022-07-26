import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Wrapper from './Wrapper';


const App = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Main lee="이씨" work="쿨쿨따" />
                <Main lee="김씨" work="리" />
                <Main lee="박씨" work="쿨쿨따" />
                <Main lee="최씨" />
                <Footer />
            </Wrapper>
        </>
    )
}

export default App;  //하나를 내보낼 때

// <Header /> = <br/>, <hr/> 과 같은 하나의 태그 = 열고 닫음이 동시에
// <div></div> 대신에  <></> 써주고, 플래그먼트라고 함 = 빈 태그로 싸줌(랩핑)
// return html을 쓰면 js로 바꿔준다 = 컴포넌트
// 대문자로 시작해야한다
