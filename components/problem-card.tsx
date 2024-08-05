import { Card, CardContent } from '@/components/ui/card';

export function ProblemCard() {
  return (
    <Card className="w-full max-w-lg bg-background">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">문제번호</h3>
          <p className="text-muted-foreground">문제내용</p>
        </div>
      </CardContent>
    </Card>
  );
}
