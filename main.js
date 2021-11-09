$(document).ready(function () {
    var prvoSt;
    $('#bill').on('input', function () {
        var prvoSt = parseFloat($('#bill').val());
        if (prvoSt == 0) {
            $("#zeroena").show();
        }
        else {
            $("#zeroena").hide();
            $('#five').click(function () {
                $(this).attr('style', 'background:#1bc1a9');
                var percant = 5;
                $('#numberOfpeople').on('input', function () {
                    var drugoSt = parseInt($('#numberOfpeople').val());
                    if (drugoSt == 0) {
                        $("#zero").show();
                    }
                    else {
                        $("#zero").hide();
                        var skupn = ((prvoSt * percant) / 100).toFixed(2);
                        var posamezn = (skupn / drugoSt).toFixed(2);
                        $("#rezPru").text("$" + posamezn.toString());
                        $("#rezDrug").text("$" + skupn.toString());
                        $('#resti').click(function () {
                            $('#five').attr('style', 'background:#00484b');
                            $("#rezPru").text("$ 0.00");
                            $("#rezDrug").text("$ 0.00");
                        });
                    }
                });
            });
            $('#ten').click(function () {
                $(this).attr('style', 'background:#1bc1a9');
                var percant = 10;
                $('#numberOfpeople').on('input', function () {
                    var drugoSt = parseInt($('#numberOfpeople').val());
                    if (drugoSt == 0) {
                        $("#zero").show();
                    }
                    else {
                        $("#zero").hide();
                        var skupn = ((prvoSt * percant) / 100).toFixed(2);
                        var posamezn = (skupn / drugoSt).toFixed(2);
                        $("#rezPru").text("$" + posamezn.toString());
                        $("#rezDrug").text("$" + skupn.toString());
                        $('#resti').click(function () {
                            $('#ten').attr('style', 'background:#00484b');
                            $("#rezPru").text("$ 0.00");
                            $("#rezDrug").text("$ 0.00");
                        });
                    }
                });
            });
            $('#fiften').click(function () {
                $(this).attr('style', 'background:#1bc1a9');
                var percant = 15;
                $("#zero").hide();
                $('#numberOfpeople').on('input', function () {
                    var drugoSt = parseInt($('#numberOfpeople').val());
                    if (drugoSt == 0) {
                        $("#zero").show();
                    }
                    else {
                        $("#zero").hide();
                        var skupn = ((prvoSt * percant) / 100).toFixed(2);
                        var posamezn = (skupn / drugoSt).toFixed(2);
                        $("#rezPru").text("$" + posamezn.toString());
                        $("#rezDrug").text("$" + skupn.toString());
                        $('#resti').click(function () {
                            $('#fiften').attr('style', 'background:#00484b');
                            $("#rezPru").text("$ 0.00");
                            $("#rezDrug").text("$ 0.00");
                        });
                    }
                });
            });
            $('#twFive').click(function () {
                $(this).attr('style', 'background:#1bc1a9');
                var percant = 25;
                $('#numberOfpeople').on('input', function () {
                    var drugoSt = parseInt($('#numberOfpeople').val());
                    if (drugoSt == 0) {
                        $("#zero").show();
                    }
                    else {
                        $("#zero").hide();
                        var skupn = ((prvoSt * percant) / 100).toFixed(2);
                        var posamezn = (skupn / drugoSt).toFixed(2);
                        $("#rezPru").text("$" + posamezn.toString());
                        $("#rezDrug").text("$" + skupn.toString());
                        $('#resti').click(function () {
                            $('#twFive').attr('style', 'background:#00484b');
                            $("#rezPru").text("$ 0.00");
                            $("#rezDrug").text("$ 0.00");
                        });
                    }
                });
            });
            $('#fifty').click(function () {
                $(this).attr('style', 'background:#1bc1a9');
                var percant = 50;
                $('#numberOfpeople').on('input', function () {
                    var drugoSt = parseInt($('#numberOfpeople').val());
                    if (drugoSt == 0) {
                        $("#zero").show();
                    }
                    else {
                        $("#zero").hide();
                        var skupn = ((prvoSt * percant) / 100).toFixed(2);
                        var posamezn = (skupn / drugoSt).toFixed(2);
                        $("#rezPru").text("$" + posamezn.toString());
                        $("#rezDrug").text("$" + skupn.toString());
                        $('#resti').click(function () {
                            $('#fifty').attr('style', 'background:#00484b');
                            $("#rezPru").text("$ 0.00");
                            $("#rezDrug").text("$ 0.00");
                        });
                    }
                });
            });
            $('#custom').on('input', function () {
                var percant = parseFloat($('#custom').val())
                $('#numberOfpeople').on('input', function () {
                    var drugoSt = parseInt($('#numberOfpeople').val());
                    if (drugoSt == 0) {
                        $("#zero").show();
                    }
                    else {
                        $("#zero").hide();
                        var skupn = ((prvoSt * percant) / 100).toFixed(2);
                        var posamezn = (skupn / drugoSt).toFixed(2);
                        $("#rezPru").text("$" + posamezn.toString());
                        $("#rezDrug").text("$" + skupn.toString());
                        $('#resti').click(function () {
                            $("#rezPru").text("$ 0.00");
                            $("#rezDrug").text("$ 0.00");
                        });
                    }
                });
            });
        }
    });
});
/*




*/
