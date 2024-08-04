import Button from './components/Button';
import Input from './components/Input';
import './index.css';

export default function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-xl w-full px-8 flex flex-col gap-5">
        <h1 className="font-extrabold text-3xl text-center">
          Tistory PS Helper
        </h1>
        <div className="flex justify-center gap-5 h-10">
          <Input>문제 번호를 입력해주세요</Input>
          <Button>추가</Button>
        </div>
      </div>
    </div>
  );
}
