function domainName(url){
    let name = url.match(/\/[a-z]+|\.(.*)\./)
    if(name)return name[1] || name[0]
    else return ''
}
console.log(domainName("www.google.com"))

