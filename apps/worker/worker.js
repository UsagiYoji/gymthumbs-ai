import fs from 'fs'
import { composeThumbnail } from './libs/compose.js'
async function demo() {
  const bgPath = './public/examples/sample1.png'
  if (!fs.existsSync(bgPath)) { console.log('sample missing'); return; }
  const bgBuffer = fs.readFileSync(bgPath)
  const out = await composeThumbnail(bgBuffer, 'NO EXCUSES')
  fs.writeFileSync('./public/examples/out_demo.png', out)
  console.log('demo composed')
}
demo()
