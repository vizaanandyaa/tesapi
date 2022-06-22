//================================================

async function getUsers() {
    let url = 'https://dekontaminasi.com/api/id/covid19/hospitals';

    try {
        let res = await fetch(url, { mode: 'cors'});
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    console.log(users);
}