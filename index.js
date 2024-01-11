
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
const newBook = new Book("Diary of The Wimpy Kid",45,false);
myLibrary.push(newBook);
function addBookToLibrary(){
    // ADD BOOK TO ARRAY.
    x = document.createElement("FORM");
    body.append(x);

}
function displayBooks(){
    console.log("entered");
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
        body.append(div);
    }
}