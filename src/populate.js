const getData = (apiEndpoint) => {
    return fetch(apiEndpoint, {
            method: 'GET'
        })
        .then(response => response.json())
        .catch(error => console.error("Fetch error!"));
}

export default function createComponent() {
    const api = "https://api.whatdoestrumpthink.com/api/v1/quotes";

    const listComponent = document.createElement('ul');

    getData(api)
        .then(data => {
            let quotes = data.messages.non_personalized;
            for (let q of quotes) {
                let listEntry = document.createElement('li');
                listEntry.innerHTML = q;
                listComponent.appendChild(listEntry);
            }
            document.getElementById('list').appendChild(listComponent);
        })
        .catch(error => {
            console.error("Fetch error!");
        })
}