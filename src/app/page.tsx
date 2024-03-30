import Introduction from "@/components/Introduction";
import Myprojects from "@/components/Myprojects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      
      <Introduction />
      <Myprojects/>
      <Skills/>
    </main>
  );
}
