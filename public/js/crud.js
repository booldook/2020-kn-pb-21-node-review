function onSubmit(f) {
	if(f.name.value.trim() == "") {
		alert("이름은 필수사항 입니다.");
		f.name.focus();
		return false;
	}
	return true;
}

/*
document.querySelector("#btSave").addEventListener("click", onClick);
function onClick() {
	var f = document.wrForm;
	if(f.name.value.trim() == "") {
		alert("이름은 필수사항 입니다.");
		f.name.focus();
		return false;
	}
	f.submit();
}
*/
$("#btSave").click(onSave);
function onSave() {
	var $f = $("form[name='wrForm']");
	var $name = $f.find("input[name='name']");
	if($name.val().trim() == "") {
		alert("이름은 필수사항 입니다.");
		$name.focus();
		return false;
	}
	$f[0].submit();
}