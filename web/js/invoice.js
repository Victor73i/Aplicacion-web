$(document).on('ready', funcMain);


function funcMain()
{
	$("#add_row").on('click',newRowTable);

	$("loans_table").on('click','.fa-eraser',deleteProduct);
	$("loans_table").on('click','.fa-edit',editProduct);

	$("body").on('click',".fa-eraser",deleteProduct);
	$("body").on('click',".fa-edit",editProduct);
}


function funcEliminarProductosso(){
	//Obteniendo la fila que se esta eliminando
	var a=this.parentNode.parentNode;
	//Obteniendo el array de todos loe elementos columna en esa fila
	//var b=a.getElementsByTagName("td");
	var direccion=a.getElementsByTagName("td")
	console.log(a);

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function deleteProduct(){
	
	var _this = this;
	
	var array_fila=getRowSelected(_this);

	
	

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function editProduct(){
	var _this = this;;
	var array_fila=getRowSelected(_this);
	console.log(array_fila[0]+" - "+array_fila[1]+" - "+array_fila[2]+" - "+array_fila[3]+" - "+array_fila[4]+" - "+array_fila[5]);
	
}



function getRowSelected(objectPressed){
	
	var a=objectPressed.parentNode.parentNode;
	
	var carnet=a.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
	var nombre=a.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
	var apellido=a.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
	var correo=a.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
	var telefono=a.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;
	var direccion=a.getElementsByTagName("td")[5].getElementsByTagName("p")[0].innerHTML;
	

	var array_fila = [carnet, nombre, apellido, correo, telefono, direccion];

	return array_fila;
	
}



function newRowTable()
{
	var carnet=document.getElementById("carnet").value;
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var correo=document.getElementById("correo").value;
	var telefono=document.getElementById("telefono").value;
        var direccion=document.getElementById("direccion").value;
	

	var name_table=document.getElementById("tablaregistro");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = '<p name="carnet_f[]" class="non-margin">'+carnet+'</p>';
    cell2.innerHTML = '<p name="nombre_p[]" class="non-margin">'+nombre+'</p>';
    cell3.innerHTML = '<p name="apellido_p[]" class="non-margin">'+apellido+'</p>';
    cell4.innerHTML = '<p name="correo_p[]" class="non-margin">'+correo+'</p>';
    cell5.innerHTML = '<p name="telefono_p[]" class="non-margin">'+telefono+'</p>';
    cell6.innerHTML = '<p name="direccion_p[]" class="non-margin">'+direccion+'</p>';
   
    cell9.innerHTML = '<span class="icon fa-edit"></span><span class="icon fa-eraser"></span>';

   
}








function format(input)
{
	var num = input.value.replace(/\,/g,'');
	if(!isNaN(num)){
		input.value = num;
	}
	else{ alert('Solo se permiten numeros');
		input.value = input.value.replace(/[^\d\.]*/g,'');
	}
}