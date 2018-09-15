$("#btn_berhasil").click(function(){
	var angka1 = parseInt($("#angka1").val());
	var angka2 = parseInt($("#angka2").val());
	var operator = $("#operator").val();

	// var hasil = angka1 + angka2;

	if(operator=="+") {
		var hasil = angka1 + angka2;
	}

	if(operator=="-") {
		var hasil = angka1 - angka2;
	}

	if(operator=="*") {
		var hasil = angka1 * angka2;
	}

	if(operator=="/") {
		var hasil = angka1 / angka2;
	}

	$("#hasil").val(hasil);

});