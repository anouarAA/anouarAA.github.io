let listOfSchools = ["Herbert Vissers College",
  "Hermann Wesselink College", "Hervormd Lyceum West"]


// Simulate loading process
window.onload = function () {
  let greeting = document.querySelectorAll(".dna-form h1")
  greeting.forEach(element => {
    element.innerHTML = getDutchGreeting()
  })

  let schoolChooser = document.getElementById("scholenkiezer_value")

  // Add an event listener to respond to user input
  schoolChooser.addEventListener('input', (event) => {
    createDropDown(event.target.value)
  });


};


function createDropDown(input) {
  let parentElement = document.getElementById("select_school")
  let dropDownContainer = document.querySelector(".input-drop-down-container")

  if (input === "" || input.length < 3) {
    if (dropDownContainer) {
      parentElement.removeChild(dropDownContainer)
    }
    return
  }

  if (dropDownContainer) {
    // Remove all children from the container
    while (dropDownContainer.firstChild) {
      dropDownContainer.removeChild(dropDownContainer.firstChild);
    }
  } else {
    dropDownContainer = document.createElement('div')
    dropDownContainer.classList.add("input-drop-down-container")
    parentElement.appendChild(dropDownContainer)
  }


  let dropDownList = document.createElement('div')
  dropDownList.classList.add("input-drop-down-list")
  dropDownContainer.appendChild(dropDownList)

  let isFirst = true

  for (let i = 0; i < listOfSchools.length; i++) {
    let school = listOfSchools[i]
    if (school.toLowerCase().startsWith(input.toLowerCase())) {
      let listItem = document.createElement('div')
      listItem.classList.add("input-drop-down-list-item")
      if (isFirst) {
        listItem.classList.add('selected')
        isFirst = false
      }
      listItem.textContent = listOfSchools[i]

      listItem.addEventListener('click', (event) => {
        parentElement.style.display = 'none'
        setLoginValues(school)

      })
      dropDownList.appendChild(listItem)
    }

  }

  if (isFirst) {
    console.log("hello")
    let noRes = document.createElement('div');
    noRes.classList.add("input-drop-down-no-results");
    noRes.innerHTML = "Geen resultaten gevonden"

    dropDownList.appendChild(noRes)
  }

}

function setLoginValues(school) {
  let loginForm = document.getElementById("log_in")
  loginForm.style.display = 'block'

  let schoolText = document.querySelector(".completed-challenge-label")
  schoolText.textContent = school

  let submitButton = document.querySelector(".dna-button")

  submitButton.addEventListener('click', (event) => {
    navigateToNextPage()
  })

}

function navigateToNextPage() {
  let username = document.getElementById('username').value
  if (username !== '') {
    window.localStorage.setItem("username", username )
  }
  window.location.href = 'next.html';

}

function getDutchGreeting() {
  const now = new Date();
  const hours = now.getHours(); // Get the current hour (0-23)

  if (hours >= 0 && hours < 6) {
    return "Goedenacht, "; // Good night
  } else if (hours < 12) {
    return "Goedemorgen, "; // Good morning
  } else if (hours < 18) {
    return "Goedemiddag, "; // Good afternoon
  } else {
    return "Goedenavond, "; // Good evening
  }
}


