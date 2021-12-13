var selectedRow = null

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}



const title = document.getElementById("title")
const author = document.getElementById('author')
const price = document.getElementById('price')
function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["author"] = document.getElementById("author").value;
    formData["price"] = document.getElementById("price").value;
    formData["language"] = document.getElementById("language").value;
    formData["date"] = document.getElementById("date").value;
   

    formData['input2']= document.querySelector('input[name="fav"]:checked').value

if ((title.value>='A' && title.value<='Z') ||  (title.value>='a' && title.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Title Field Correctly");
        document.getElementById("title1").focus();

    }

    if ((author.value>='A' && author.value<='Z') ||  (author.value>='a' && author.value<='z'))
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Author Field Correctly");
        document.getElementById("title1").focus();

    }


    if (price.value>=48 || price.value<=57)
    {
        console.log("True")
    }
    else {
        alert("Please Fill The Price Field Correctly");
        document.getElementById("title1").focus();

    }

   

    
    return formData;
  
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.language;
    cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.input2;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`;
                       
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("language").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("date").value = "";
 
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("language").value = selectedRow.cells[3].innerHTML;
    document.getElementById("input2").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.author;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.language;
    selectedRow.cells[4].innerHTML = formData.input2;
    selectedRow.cells[5].innerHTML = formData.date;
 
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}



let submit1 = document.getElementById('submit1')
submit1.addEventListener("click", onFormSubmit);