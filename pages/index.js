import SwitchBoard from "../components/SwitchBoard";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen justify-center items-center bg-gradient-to-r from-green-600 to-blue-500">
        <SwitchBoard />
      </div>
    </main>
  );
}
