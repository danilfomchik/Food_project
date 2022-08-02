function deactivateActiveItem(nodeList, className) {
    let arrFromNodeList = Array.from(nodeList);

    arrFromNodeList.forEach(item => {
        item.classList.remove(className)
    });
}

module.exports = deactivateActiveItem;