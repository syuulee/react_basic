import Test from "./test";
import Nav from "./Nav";

const App = () => {
  // console.log('배고픔') 2번 찍힘
  return (
    <>
      <Test />
      <h1>아이우에오</h1>
      <Nav />
      {/* <h2>나오지말 것</h2> //를 문자로 받기 때문에 주석이 다른 모양임 */}
      <Test />
      <Test />
    </>
  )

}
export default App;


// <Test /> 컴포넌트는 대문자로 써야함 Rule!