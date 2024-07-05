import Hd from './component/Hd'
import Slide from './component/Slide';

function Srh(){
    return(
        // jsx html태그 아님 xml 임
        // 1. 최상위부모태그는 하나
        // 2. 노드이름 마음대로
        // 3. 반드시 앞뒤 짝 있어야함
        <>
          <Hd></Hd>
          <Slide></Slide>
        </>
    )
}
export default Srh;