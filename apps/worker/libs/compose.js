import sharp from 'sharp'
export async function composeThumbnail(backgroundBuffer, text){
  const svg = `<svg width="1080" height="1920"><style>.t{fill:#fff;font-size:140px;font-weight:700;font-family:Impact, Arial Black, sans-serif;text-anchor:middle}</style><text x="50%" y="80%" class="t">${escapeHtml(text)}</text></svg>`
  const out = await sharp(backgroundBuffer).composite([{ input: Buffer.from(svg), left:0, top:0 }]).png().toBuffer()
  return out
}
function escapeHtml(t){return String(t).replace(/[&<>"']/g, (m)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
