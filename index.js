const btnEl = document.getElementById("btn")
const seedColorEl = document.getElementById("seed-color")
const colorShemeSelect = document.getElementById("color-scheme")
const display = document.getElementById("display-shceme")


btnEl.addEventListener("click", () =>{
    let schemePicked = colorShemeSelect.value
    let seedColor = seedColorEl.value
     // remove numeric symbol from hex code
    seedColor = seedColor.slice(1)
   
    console.log(schemePicked)
    console.log(seedColor)
    console.log(seedColor)
    
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemePicked}&count=5`)
        .then(res =>res.json())
        .then(data => {
            //console.log(data)
            // const fiveShades = data.colors.slice(0,5)
            let html = ""
            for (let mycolor of data.colors) {
                html += 
                `
                    <div id="colorS" class="color" style="background-color:${mycolor.hex.value}">
                        <button class="pColor" id="pColor" data-color="${mycolor.hex.value}">${mycolor.hex.value}</button>
                    </div>
                `
            }
            display.innerHTML = html
        })
})

// Add click event listeners to all .pColor elements
    document.querySelectorAll('.pColor').forEach(el => {
        el.addEventListener('click', function() {
            const color = this.getAttribute('data-color')
            navigator.clipboard.writeText(color)
                .then(() => alert(`Copied: ${color}`))
                .catch(() => alert('Failed to copy!'))
        })

})