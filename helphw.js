function helpFun(){
    console.log (
    `wcat [options] [files]
    option to remove big line break (-s)
    option to add line number to non empty lines (-b)
    option to add line numbers to all lines (-n)
    `)
}

module.exports = {
    helpFn : helpFun
}