var mydata = [

    {
        "id": 1,
        "name": "abacaxis",
        "price": "100€",
    },

    {
        "id": 2,
        "name": "bananas",
        "price": "120€",
    },

    {
        "id": 3,
        "name": "maçãs",
        "price": "70€",
    },

    {
        "id": 4,
        "name": "laranjas",
        "price": "20€",
    },

    {
        "id": 5,
        "name": "pêra",
        "price": "10€",
    },

    {
        "id": 6,
        "name": "terra",
        "price": "0€",
    },

    $(function () {
        $('#table').bootstrapTable({
            data: mydata
        });
        console.log(mydata);
    });
]