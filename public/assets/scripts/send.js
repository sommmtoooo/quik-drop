const SEND_FORM = document.querySelector('[send-form]');

SEND_FORM.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    uploadFile();
}


async function uploadFile(){

    const data = await fetch('/checker')

    if(data) {
        console.log('found')
        console.log(data)
    }

}
