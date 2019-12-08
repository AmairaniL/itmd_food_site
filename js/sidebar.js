   		var modal = document.getElementById("mySidenav");
		function openNav() {
		  document.getElementById("mySidenav").style.width = "250px";
		  document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
		}

		function closeNav() {
		  document.getElementById("mySidenav").style.width = "0";
		  document.body.style.backgroundColor = "white";
		  document.onclick = function(event) {
			if (event.target == modal) {
			document.style.display = "none";
			}
		  }
		}