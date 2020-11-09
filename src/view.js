const { BrowserWindow } = require("electron/main")
let $ = require("jquery")
let count = 0
$("#click-counter").text(count.toString())
$('#countbtn').on('click',() => {
    count++
    $('#click-counter').text(count.toString())
})
$('#devtoolsbtn').on('click', () => {
    //BrowserWindow.getAllWindows()[0].webContents.openDevTools()
})