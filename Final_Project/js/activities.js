const requestURL = '../Final_Project/json/activities.json';
const cards = document.querySelector('.activitycards');



fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const activities = jsonObject['activities'];

        activities.forEach(displayActivities);


        function displayActivities(activity) {
            // Create elements to add to the document
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let dedicated = document.createElement("p")
            let phone = document.createElement("p")
            let hours = document.createElement("p")
            let Status = document.createElement("p")
            let portrait = document.createElement('img');

            // Change the textContent property of the h2 element to contain the prophet's full name
            h2.textContent = temple.name;
            phone.textContent = "Phone: " + temple.phone;
            dedicated.textContent = "Dedicated: " + temple.dedicated;
            hours.textContent = "Hours: " + temple.hours;
            Status.textContent = "Status: " + temple.status

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            portrait.setAttribute('src', temple.imageurl);
            portrait.setAttribute('alt', 'Portait of ' + temple.name);
            portrait.setAttribute('loading', 'lazy');

            // Add/append the section(card) with the h2 elemen.t
            card.appendChild(h2);
            card.appendChild(portrait);
            card.appendChild(dedicated);
            card.appendChild(phone);
            card.appendChild(hours);
            card.appendChild(Status);

            // Add/append the existing HTML div with the cards class with the section(card)
            document.querySelector('div.cards').appendChild(card);


        }
    });