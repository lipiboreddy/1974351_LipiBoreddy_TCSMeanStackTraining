var itemList = []
function addItem(buttonId):void{
    let addbtn = document.getElementById(buttonId);
    let parent = addbtn.parentElement;
    let name = parent.getElementsByTagName("h1").item(0).innerHTML;
    let price = parseInt(parent.getElementsByTagName("p").item(0).innerHTML);
    // let price = parent.getElementsByTagName("p").item(0).innerHTML;
    console.log(price)
    let item = {
        itemname: name,
        itemprice: price
    };
    itemList.push(item)
}

function storeInSession():void{
    sessionStorage.setItem("Items",JSON.stringify(itemList));
    console.log(JSON.stringify(itemList))
}