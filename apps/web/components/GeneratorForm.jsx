export default function GeneratorForm({onGenerate}){ return (<form onSubmit={(e)=>{e.preventDefault(); onGenerate()}}><button>Generate</button></form>) }
