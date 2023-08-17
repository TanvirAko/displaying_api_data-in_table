
const mine = document.querySelector('.mine');
const user = document.querySelector('.user');
const user_view = document.querySelector('.user_view');
const modal_ImgBox = document.querySelector(".modal_ImgBox");

const apidata = async () => {
    try {
        const response1 = await fetch("https://my-json-server.typicode.com/deveripon/users-api/users");
        const data1 = await response1.json();

        let content1 = "";
        data1.forEach((item, index) => {
            content1 += `
            <tr class="text-center text-capitalize">
                <td class="td">${item.id}</td>
                <td><img id="img" src="${item.image}" alt=""></td>
                <td class="td">${item.username}</td>
                <td class="td">${item.phone}</td>
                <td class="td">${item.email}</td>
                <td class="td">${item.address.address}</td>
                <td class="td">
                    <button onclick="getprofile('${item.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customModal">
                        view
                    </button>
                </td>
            </tr>`;
        });
        mine.innerHTML = content1;

        const response2 = await fetch('https://jsonplaceholder.typicode.com/users');
        const data2 = await response2.json();

        let content2 = "";
        data2.forEach((item, index) => {
            content2 += `
            <tr class="text-center text-capitalize">
                <td>${item.id}</td>
                <td>${item.website}</td>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
                <td>${item.address.city}</td>
                <td>
                    <button onclick="getUserview('${item.id}')" type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        view
                    </button>
                </td>
            </tr>`;
        });
        user.innerHTML = content2;
    } catch (error) {
        console.log(error);
    }
};

apidata();

const getprofile = async (id) => {
    try {
        const response = await fetch(`https://my-json-server.typicode.com/deveripon/users-api/users/${id}`);
        const data = await response.json();

        modal_ImgBox.innerHTML = `
            <img class="w-100" src="${data.image}" alt="">
            <ul style="list-style: none; margin-left: -26px;" class="my-3">
                <li><h6>firstName: ${data.firstName}</h6></li>
                <li>lastName: ${data.lastName}</li>
                <li>birthDate: ${data.birthDate}</li>
                <li>bloodGroup: ${data.bloodGroup}</li>
                <li>password: ${data.password}</li>
                <li>gender: ${data.gender}</li>
            </ul>
        `;
    } catch (error) {
        console.log(error);
    }
};

const getUserview = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();

        user_view.innerHTML = `
            <ul>
                <li>id: <span>${data.id}</span></li>
                <li>address: <span>${data.address.city}</span></li>
                <li>city: <span>${data.address.street}</span></li>
                <li>geo: <span>${data.address.geo.lat}</span></li>
                <li>street: <span>${data.address.street}</span></li>
                <li>zipcode: <span>${data.address.zipcode}</span></li>
                <li>company: <span>${data.company.bs}</span></li>
                <li>catchPhrase: <span>${data.company.catchPhrase}</span></li>
                <li>name: <span>${data.name}</span></li>
                <li>email: <span>${data.email}</span></li>
                <li>phone: <span>${data.phone}</span></li>
                <li>username: <span>${data.username}</span></li>
                <li>website: <span>${data.website}</span></li>
                <li>youtube: <span>youtube//.onlineshotrs24.youtube//com.</span></li>
            </ul>`;
    } catch (error) {
        console.log(error);
    }
};
