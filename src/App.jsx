import Random from './components/Random';
import Tag from './components/Tag';
export default function App() {
  
  return( 
  <div className="h-full w-full flex flex-col items-center background">
   <h1 className="bg-white w-11/12  rounded-lg mt-10 mx-auto text-center font-bold text-4xl">RANDOM GIFS</h1>
   <div className="flex flex-col w-full items-center gap-y-10 mt-7  ">
    <Random/>
    <Tag/>
   </div>
    </div>)
}
