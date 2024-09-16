import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ProblemCardWrapperServer from '@/components/PCWrapperServer';

export default function Page() {
  return (
    <main className="flex flex-col items-center h-screen bg-transparent">
      <div className="mx-auto w-full min-h-28 flex-1 max-h-[40%]"></div>
      <div className="mb-12 flex flex-col items-center gap-10 text-center w-full">
        <h1 className="text-4xl font-bold tracking-tighter">
          🖥️ Tistory PS Helper
        </h1>
        <div className="flex items-center w-full max-w-md gap-5">
          <Input
            type="number"
            placeholder="문제 번호를 입력해주세요"
            className="flex-1 rounded-l-md focus:ring-0"
          />
          <Button className="rounded-r-md bg-blue-600 text-white hover:bg-blue-500">
            입력
          </Button>
        </div>
      </div>
      <ProblemCardWrapperServer problemNumbers={[1000, 1001, 1002, 1003]} />
      <div className="mx-auto w-full min-h-12 flex-1 max-h-[40%]"></div>
    </main>
  );
}
