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
    formData["P_code"]= document.getElementById("P_code").value;
    formData["P_name"]= document.getElementById("P_name").value;
    formData["P_injure"]= document.getElementById("P_injure").value;
    formData["P_entry"]= document.getElementById("P_entry").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("Patient_list").getElementsByTagName('tbody')[0]; // Patient list is the table ID
    var newRow = table.insertRow(table.length);
    Cell1 = newRow.insertCell(0);
    Cell1.innerHTML = data.P_code;
    Cell2 = newRow.insertCell(1);
    Cell2.innerHTML = data.P_name;
    Cell3 = newRow.insertCell(2);
    Cell3.innerHTML = data.P_injure;
    Cell4 = newRow.insertCell(3);
    Cell4.innerHTML = data.P_entry;
    Cell4 = newRow.insertCell(4);
    Cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
                      <button onClick='onDelete(this)'>Delete</button>`;
}   
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("P_code").value = selectedRow.cells[0].innerHTML;
    document.getElementById("P_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("P_injure").value = selectedRow.cells[2].innerHTML;
    document.getElementById("P_entry").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.P_code;
    selectedRow.cells[1].innerHTML = formData.P_name;
    selectedRow.cells[2].innerHTML = formData.P_injure;
    selectedRow.cells[3].innerHTML = formData.P_entry;
}
function onDelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("Patient_list").deleteRow(row.rowIndex); // patient_list is the table id name
        resetForm();
    }

}
function validate(){
    isValid = true;
    if (document.getElementById("P_name").value ==""){
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
  table = document.getElementById("Patient_list");
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
    table = document.getElementById("Patient_list");
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
    document.getElementById("P_code").value = "";
    document.getElementById("P_name").value = "";
    document.getElementById("P_injure").value = "";
    document.getElementById("P_entry").value = "";
}