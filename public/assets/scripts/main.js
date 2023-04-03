fetch('/files')
.then(res => res.json())
.then(files => {
    console.log("files")
    const file_list = document.querySelector('[file-list]')

    files.forEach(file => {
        const listItem = document.createElement('li')
        const link = document.createElement('a')

        link.textContent = file
        link.href = `/download/${file}`

        listItem.appendChild(link)
        file_list.appendChild(listItem)
    })
}).catch(err => {
    console.log("Ops: An Error Occurred")
    console.log(err)
})