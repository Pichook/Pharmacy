<<<<<<< HEAD

selectedRow = null;
function onFormSubmit(){
    if (validate()){
    var formData = readFormData();
    if (selectedRow == null){
    insertNewRecord(formData);
}
    else{
    updateRecord(formData);
}
    resetForm();}
}
function readFormData(){
    var formData = {};
    formData["D_code"]= document.getElementById("D_code").value;
    formData["D_name"]= document.getElementById("D_name").value;
    formData["D_price"]= document.getElementById("D_price").value;
    formData["D_quantity"]= document.getElementById("D_quantity").value;
    formData["D_pur"]= document.getElementById("D_pur").value;
    formData["D_ex"]= document.getElementById("D_ex").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("Drug_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    Cell1 = newRow.insertCell(0);
    Cell1.innerHTML = data.D_code;
    Cell2 = newRow.insertCell(1);
    Cell2.innerHTML = data.D_name;
    Cell3 = newRow.insertCell(2);
    Cell3.innerHTML = data.D_price;
    Cell4 = newRow.insertCell(3);
    Cell4.innerHTML = data.D_quantity;
    Cell5 = newRow.insertCell(4);
    Cell5.innerHTML = data.D_pur;
    Cell6 = newRow.insertCell(5);
    Cell6.innerHTML = data.D_ex;
    Cell6 = newRow.insertCell(6);
    Cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
                      <button onClick='onDelete(this)'>Delete</button>`;
}   
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("D_code").value = selectedRow.cells[0].innerHTML;
    document.getElementById("D_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("D_price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("D_quantity").value = selectedRow.cells[3].innerHTML;
    document.getElementById("D_pur").value = selectedRow.cells[4].innerHTML;
    document.getElementById("D_ex").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.D_code;
    selectedRow.cells[1].innerHTML = formData.D_name;
    selectedRow.cells[2].innerHTML = formData.D_price;
    selectedRow.cells[3].innerHTML = formData.D_quantity;
    selectedRow.cells[4].innerHTML = formData.D_pur;
    selectedRow.cells[5].innerHTML = formData.D_ex;
}
function onDelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("Drug_list").deleteRow(row.rowIndex);
        resetForm();
    }

}
function validate(){
    isValid = true;
    if (document.getElementById("D_name").value ==""){
        isValid = false;
        document.getElementById("DrugcodeValidationError").classList.remove("hide");
    } else{
        isValid = true;
        if(!document.getElementById("DrugcodeValidationError").classList.contains("hide"))
        document.getElementById("DrugcodeValidationError").classList.add("hide");
    }
    return isValid;
}


function search_name() {

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myName");
  filter = input.value.toUpperCase();
  table = document.getElementById("Drug_list");
  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function search_code() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myCode");
    filter = input.value.toUpperCase();
    table = document.getElementById("Drug_list");
    tr = table.getElementsByTagName("tr");
  
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
function resetForm(){
    document.getElementById("D_code").value = "";
    document.getElementById("D_name").value = "";
    document.getElementById("D_price").value = "";
    document.getElementById("D_quantity").value = "";
    document.getElementById("D_pur").value = "";
    document.getElementById("D_ex").value = "";
=======


selectedRow = null;
function onFormSubmit(){
    var formData = readFormData();
    if (selectedRow == null){
    insertNewRecord(formData);
}
    else{
    updateRecord(formData);
}
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["D_code"]= document.getElementById("D_code").value;
    formData["D_name"]= document.getElementById("D_name").value;
    formData["D_price"]= document.getElementById("D_price").value;
    formData["D_quantity"]= document.getElementById("D_quantity").value;
    formData["D_pur"]= document.getElementById("D_pur").value;
    formData["D_ex"]= document.getElementById("D_ex").value;
    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("Drug_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    Cell1 = newRow.insertCell(0);
    Cell1.innerHTML = data.D_code;
    Cell2 = newRow.insertCell(1);
    Cell2.innerHTML = data.D_name;
    Cell3 = newRow.insertCell(2);
    Cell3.innerHTML = data.D_price;
    Cell4 = newRow.insertCell(3);
    Cell4.innerHTML = data.D_quantity;
    Cell5 = newRow.insertCell(4);
    Cell5.innerHTML = data.D_pur;
    Cell6 = newRow.insertCell(5);
    Cell6.innerHTML = data.D_ex;
    Cell6 = newRow.insertCell(6);
    Cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
                        <button onClick='onDelete(this)'>Delete</button>`;
}   
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("D_code").value = selectedRow.cells[0].innerHTML;
    document.getElementById("D_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("D_price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("D_quantity").value = selectedRow.cells[3].innerHTML;
    document.getElementById("D_pur").value = selectedRow.cells[4].innerHTML
    document.getElementById("D_ex").value = selectedRow.cells[5].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.D_code;
    selectedRow.cells[1].innerHTML = formData.D_name;
    selectedRow.cells[2].innerHTML = formData.D_price;
    selectedRow.cells[3].innerHTML = formData.D_quantity;
    selectedRow.cells[4].innerHTML = formData.D_pur;
    selectedRow.cells[5].innerHTML = formData.D_ex;
}
function onDelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("Drug_list").deleteRow(row.rowIndex);
        resetForm();
    }

}
function validate(){
    isValid = true;
    if (document.getElementById("D_code").value ==""){
        isValid = false;
        document.getElementById("DrugcodeValidationError").classList.remove("hide");
    } else{
        isValid = true;
        if(!document.getElementById("DrugcodeValidationError").classList.contains("hide"))
        document.getElementById("DrugcodeValidationError").classList.add("hide");
    }
    return isValid;
}

function resetForm(){
    document.getElementById("D_code").value = "";
    document.getElementById("D_name").value = "";
    document.getElementById("D_price").value = "";
    document.getElementById("D_quantity").value = "";
    document.getElementById("D_pur").value = "";
    document.getElementById("D_ex").value = "";
>>>>>>> d29fcf0 (Updated)
}