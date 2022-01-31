import HomeButton from '../home-button';
import './styles.css';

function Intro() {
  return (
    <div className="box-content">
      <div className="paragraph">
        <div className="title">Giới thiệu</div>
        <h3>1. In-tư chung</h3>
        Tet2022 là món quà Tết nối tiếp{' '}
        <a href="https://tet2021.vercel.app/" target="_blank" rel="noreferrer">
          Tet2021
        </a>{' '}
        Tài dành tặng cho mọi người, cũng như một lời tạm biệt năm cũ 2021 - một
        năm đầy khó khăn, thách thức.
        <br />
        <br />
        <h3>2. Tet2022 có gì...</h3>
        Do thời gian có hạn nên mình làm sim-bồ nhất có thể, dù là vậy nhưng
        Tet2022 cũng được chăm chút từng chi tiết :))
        <br />
        👉
        <i>Giới thiệu:</i> Mô tả chung về Tet2022.
        <br />
        👉
        <i>Chúc tết:</i> giống như cái tên của nó là để chúc tết 😅. Tet2022 sẽ
        tạo ngẫu nhiên lời chúc và gửi đến mọi người. Hy vọng mọi người sẽ thích
        các lời chúc nhận được.
        <br />
        👉
        <i>Review 2021:</i> đây là mục tổng kết năm 2021 nho nhỏ của mình thôi
        😀.
        <br />
        <br />
        <h3>3. Kết, như thường lệ 🤣</h3>
        Cảm ơn mọi người đã truy cập Tet2022. Seri tết vẫn sẽ tiếp tục vào năm
        sau và nhiều năm sau nữa, hy vọng mọi người tiếp tục ủng hộ. Mình rất
        mong nhận được các đóng góp để mình có thể hoàn thiện hơn sau này.
      </div>
      <HomeButton />
    </div>
  );
}

export default Intro;
