let user = {
    search: "Вася",
    take: 10,
    query: function () {
        let arr = [];
        for (let key in this) {
            if (key !== "query") {
                arr.push(`${key}=${(this[key])}`)
            }
        }
        return (arr.join('&'))
    }
}

console.log(user.query())