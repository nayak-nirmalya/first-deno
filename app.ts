const text = 'This text should be stored inside a file.'

const encoder = new TextEncoder()
const data = encoder.encode(text)

Deno.writeFile('text.txt', data).then(() => {
  console.log('File Wrote Successfully!')
})
