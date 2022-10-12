function permutation(string) {
  let str='aabb'
  let str1= str.replace(str[0],str[2])
  return str1
}
console.log(permutation("aabb"))
