function buttonClick() {
    let qoraptar=document.querySelector('#qorap')
    qoraptar.style.backgroundColor="green"
    
}
function buttonClick1() {
    let batirma=document.querySelector('#qorap')
    batirma.style.width=parseInt(batirma.style.width)+10+'px'
}
function buttonClick2() {
    let batirma=document.querySelector('#qorap')
    batirma.style.height=parseInt(batirma.style.height)+10+'px'
}
let qoraps=document.querySelector('#qorap')
qoraps.addEventListener("mouseenter",function () {
    qoraps.style.hover="jrhure"
})