fetch('/files')
    .then(res => res.json())
    .then(files => {

        const file_list = document.querySelector('[file-list]')

        if(!files.length){
            const listItem = document.createElement('li')
            listItem.textContent = "No Files"
            file_list.append(listItem)
            return
        }

        files.forEach(file => {
            const icon = document.createElement('img')
            icon.src = './assets/icons/file-icon.png'
            const listItem = document.createElement('li')
            const link = document.createElement('a')

            icon.className = "mr-2"
            listItem.className = "flex opacity-50 font-lighter text-blue-500"


            link.textContent = file
            link.href = `/download/${file}`

            listItem.appendChild(icon)
            listItem.appendChild(link)
            file_list.appendChild(listItem)
        })
    }).catch(err => {
        console.log("Ops: An Error Occurred")
        console.log(err)
    })