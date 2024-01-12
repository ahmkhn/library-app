
const body = document.body
const formElement = document.createElement("FORM");
//body.append(div); 
function Book(title,pages,read){
    this.title=title;
    this.pages=pages;
    this.read=read;
    this.getTitle=function(){
        return(this.title);
    };
    this.getPages=function(){
        return(this.pages);
    };
    this.getRead=function(){
        return(this.read);
    };
}
const myLibrary=[];

function displayForm(){
    document.getElementById("myForm").style.display="block";
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}
function getDetails(){
    const titleValue =document.getElementById("titleText").value;
    const pagesValue = document.getElementById("pagesText").value;
    const checkbox = document.getElementById("hasRead");
    const checkboxValue=checkbox.checked;

    // create a book object & append to list.
    try {
        const newBook = new Book(titleValue,pagesValue,checkboxValue);
        myLibrary.push(newBook);
        console.log(myLibrary);
    } catch (error) {
        console.error('Error creating object:', error.message);
    }

}
function displayBooks(){
    console.log("entered displaybook");
    for(let i=0;i<myLibrary.length;i++)
    {
        console.log(myLibrary[i].getTitle());
        const div = document.createElement("div");
        const header=document.createElement("h1");
        let paragraph=document.createElement("p")
        header.textContent=myLibrary[i].getTitle();
        div.append(header);
        paragraph=myLibrary[i].getPages();
        div.append(paragraph);
        paragraph=myLibrary[i].getRead();
        div.dataset.indexNumber=i;
        console.log(div.dataset.indexNumber); // to delete element later.
        div.append(paragraph);
        div.style.border="2px solid red";
        body.append(div);
    }
}