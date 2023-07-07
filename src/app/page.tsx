import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-2xl ">Control</p>
      <p className="text-2xl font-ed-mentasta">Ed Mentasta</p>
      <p className="text-2xl font-zmg">Zen Maru Gothic</p>
      <p className="text-2xl font-zmg font-bold">Zen Maru Gothic, Bold</p>
      <p className="text-2xl font-zmg italic">Zen Maru Gothic, Italic</p>
      <p className="text-2xl font-zmg font-bold italic">
        Zen Maru Gothic, Bold Italic
      </p>
      <p className="text-2xl font-junicode">Junicode</p>
      <p className="text-2xl font-junicode font-bold">Junicode, Bold</p>
      <p className="text-2xl font-junicode italic">Junicode, Italic</p>
      <p className="text-2xl font-junicode font-bold italic">
        Junicode, Bold Italic
      </p>

      <p className="text-2xl font-junicode-condensed">Junicode Condensed</p>
      <p className="text-2xl font-junicode-condensed font-bold">
        Junicode Condensed, Bold
      </p>
      <p className="text-2xl font-junicode-condensed italic">
        Junicode Condensed, Italic
      </p>
      <p className="text-2xl font-junicode-condensed font-bold italic">
        Junicode Condensed, Bold Italic
      </p>
    </main>
  );
}
