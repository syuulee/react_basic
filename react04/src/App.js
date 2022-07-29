import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  const what = '무엇?'
  const DATA = [
    { id: 1, name: '개구리' },
    { id: 2, name: '개구리1' },
    { id: 3, name: '개구리2' },
    { id: 4, name: '개구리3' },
    { id: 5, name: '개구리4' },
    { id: 6, name: '개구리5' },
    { id: 7, name: '개구리6' },
  ]
  return (
    <>
      <Header what={what} member={DATA} />
      {/* member={DATA} =를 사이에 두고 이름이 꼭 같을 필요 없다 */}
      <div>나는 컴포넌트가 아님</div>
      <Main></Main>
      <Footer />
    </>

  );
}

export default App;
