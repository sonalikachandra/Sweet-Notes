console.log('we r here');
showNotes();
//if user add a note add it to the local storage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    } 
    let html="";
    notesObj.forEach(function(element,index){
        html=html+`
    <div class=" note_card card text-white mb-3 my-3 mx-3 bg-dark" style="max-width: 18rem;">
        <div class="card-header">Note ${index+1} ✍️</div>
        <div class="card-body">
          <!-- <h5 class="card-title">Primary card title</h5> -->
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-outline-success my-2 my-sm-0 bg-dark"  type="submit">Delete</button>
        </div>
  </div>
        
                  `;
    })

let notesElm=document.getElementById('notes');
if(notesObj.length!=0){
    notesElm.innerHTML=html;
}
else{
    notesElm.innerHTML=`Nothing to Show ..........`;
}
}

//To delete notes

function deleteNotes(index){
console.log("I m deleting",index);

let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let ipval=search.value.toLowerCase();
    console.log("input fired",ipval);
    let noteCards=document.getElementsByClassName('note_card');
    Array.from(noteCards).forEach(function(element){
   let cardTxt=element.getElementsByTagName('p')[0].innerText;
   if(cardTxt.includes(ipval)){
    element.style.display="block";
   }
   else{
    element.style.display="none";
   }
   console.log(cardTxt)
    })
});