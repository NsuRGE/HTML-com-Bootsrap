$(function () {
    console.log("pronto!");
});

(function () {
    $('.price').change(function () {
        debugger;

        var x = $(this).parentsUntil("tbody", "tr");

        var qtd = x.find(".qtd");

        var total = x.find(".total");

        total.val($(this).val() * qtd.val());
    });

})();

function calcular() {
    var aux = 0
    $(".total").each(function () {
        if ($.isNumeric($(this).val())) {
            aux += Number($(this).val());
        }
    });

    $("#total").text(aux);

};

function totalLinhas() {
    alert($("#table tr").length);
};