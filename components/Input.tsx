export default function Input({ children }: { children: React.ReactNode }) {
  return (
    <input
      className=" w-72 shadow appearance-none border rounded py-2 px-3 text-sm text-gray-700 leading-tight focus:shadow-outline"
      id="username"
      type="number"
      placeholder={children as string}
    />
  );
}
