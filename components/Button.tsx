export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-3 rounded">
      {children}
    </button>
  );
}
