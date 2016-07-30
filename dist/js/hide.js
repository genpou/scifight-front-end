function ShowMenu(){
	var menu = document.getElementById('main-menu');
	if  (menu.style.display=="flex")
	{
		menu.style.display="none";
		console.log('Hide Menu');
	}
	else
	{
		menu.style.display="flex";
		console.log('Show Menu')
	}

}