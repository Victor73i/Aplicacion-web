$(document).on('ready', funcMain);


function funcMain()
{
	$("#add_row").on('click',newRowTable);

	
}
















function newRowTable()
{
	var carnet=document.getElementById("carnet").value;
	var name=document.getElementById("name").value;
	var apellido=document.getElementById("apellido").value;
	var correo=document.getElementById("correo").value;
	var telefono=document.getElementById("telefono").value;
	var direccion=document.getElementById("direccion").value;
	

	var nombre_table=document.getElementById("tablaregistro");

    var row = nombre_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
 var cell7 = row.insertCell(6);
   

    cell1.innerHTML = '<p name="carnet_f[]" class="non-margin">'+carnet+'</p>';
    cell2.innerHTML = '<p name="name_f[]" class="non-margin">'+name+'</p>';
    cell3.innerHTML = '<p name="apellido_p[]" class="non-margin">'+apellido+'</p>';
    cell4.innerHTML = '<p name="correo_p[]" class="non-margin">'+correo+'</p>';
    cell5.innerHTML = '<p name="telefono_p[]" class="non-margin">'+telefono+'</p>';
cell6.innerHTML = '<p name="direccion_p[]" class="non-margin">'+direccion+'</p>';
    
    cell7.innerHTML = '<span class="icon fa-edit"></span><span class="icon fa-eraser"></span>';

    
}








