document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    let options=new ContactFindOptions();
    options.multiple=true;
    options.hasPhoneNumber=true;
    let fields=['name'];
    navigator.contacts.find(fields,showContacts,handleError,options);


}
function showContacts(contacts) {
    let code= '';
    for(let i=0; i<contacts.length; i++){
        code+= `
                    <li>
                    <a href="#">
                        <img src="img/avatar-woman.jpg" alt="photo contact">
                        <h1>${contacts[i].name.formatted}</h1>
                        <p>${contacts[i].phoneNumbers[0].value}</p>
                    </a>
                </li>
        ` ;
    }
//contactList=document.getElementById('contactList');
   contactList.innerHTML= code;
    $(contactList).listview('refresh');
   
    
}


function handleError(error) {
    console.log(error);
    alert('une erreur inatendues\'est produite');
}