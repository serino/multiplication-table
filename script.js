let rows = document.getElementById(`rows`)
let columns = document.getElementById(`columns`)
let generateButton = document.getElementById(`generateButton`)
let table = document.getElementById(`table`)

generateButton.addEventListener(`click`, generate)

function generate() {
  let rowsValue = rows.value.trim()
  let columnsValue = columns.value.trim()

  if (rowsValue != `` && !isNaN(rowsValue) && columnsValue != `` && !isNaN(columnsValue)) {
    if (rowsValue > 25) {
      table.innerHTML = `Number of rows cannot be more than 25.`
    }
    else if (columnsValue > 25) {
      table.innerHTML = `Number of columns cannot be more than 25.`
    }
    else {
      table.innerHTML = ``

      for (let i = 1; i <= rowsValue; i++) {
        for (let j = 1; j <= columnsValue; j++) {
          let square = document.createElement(`div`)
          square.classList.add(`square`)
          square.style.left = `${j * 40}px`
          square.style.top = `${i * 40}px`
          square.innerHTML = i * j

          table.appendChild(square)

          if (i == j) {
            square.classList.add(`perfect`)
          }
        }
      }

      for (let i = 1; i <= rowsValue; i++) {
        let label = document.createElement(`div`)
        label.classList.add(`label`)
        label.style.left = `0`
        label.style.top = `${i * 40}px`
        label.innerHTML = i

        table.appendChild(label)
      }

      for (let i = 1; i <= columnsValue; i++) {
        let label = document.createElement(`div`)
        label.classList.add(`label`)
        label.style.left = `${i * 40}px`
        label.style.top = `0`
        label.innerHTML = i

        table.appendChild(label)
      }
    }
  }
}