document.getElementById("btn").addEventListener("click", function () {
    const formElement = document.forms.registrationForm.elements;
    const formData = {
        "Name": formElement.user_name.value,
        "Surname": formElement.user_surname.value,
        "Birthday": formElement.date_of_birth.value,
        "Gender": formElement.gender.value,
        "City": formElement.city.value,
        "Address": formElement.address.value,
        "Languages": getItems(formElement.languages, languages),
        "Skills": getSelectedItems(formElement.skill, skills),
    };
    document.forms.registrationForm.classList.add('hidden');

    const userDataDiv = document.createElement('div');
    document.body.appendChild(userDataDiv);

    for (let key in formData){
        let infoParagraph = document.createElement('p');
        infoParagraph.textContent = `${key}: ${formData[key]}`;
        userDataDiv.appendChild(infoParagraph);
    }
});




