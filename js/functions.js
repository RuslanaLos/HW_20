function getItems(items) {
    const values = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            values.push(items[i].value);
        }
    }
    return values.join(", ");
}

function getSelectedItems(items) {
    const values = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].selected) {
            values.push(items[i].value);
        }
    }
    return values.join(", ");
}