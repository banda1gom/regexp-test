// const str = `
// 010-1234-5678.
// thesun@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The cat was jump over the tree.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `
// 생성자 방식
// const regexp = new RegExp('the', 'gi') 

// 리터럴 방식
// const regexp = /the/gi

// console.log(str.match(regexp));

// const regexp = /fox/gi
// console.log(regexp.test(str))

// const regexp = /cat/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)


// console.log(str.match(/\.$/gim))

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// const h = `  the hello world    !

// `

// console.log(
//   h.replace(/\s/g, '')
// )


const str = `
010-1234-5678
thesun@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The cat was jump over the tree.
abbcccdddd
`

console.log(
  str.match(/.{1,}(?=@)/g),
  str.match(/(?<=@).{1,}/g)
)