

function strip(a) {
    const forbidden = ["<br>", ";", "<div>", "</div>", "amp", "gt"];

    console.log(a)

    let aRef = a;
    forbidden.forEach(function(substr) {
        aRef = aRef.replaceAll(substr, '');
    })
    return aRef;
}

export default strip;