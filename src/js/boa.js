const boaData = [
    {
        id: 1,
        name: "Aman Mehta",
        position: "Head of Design, VP",
        img: "",
        logo: ""
    },
    {
        id: 2,
        name: "Alok Kumar",
        position: "Director UX Design",
        img: "",
        logo: ""
    },
    {
        id: 3,
        name: "Vinod Kumar",
        position: "Head | CX & UX Design, GDC India",
        img: "",
        logo: ""
    },
    {
        id: 4,
        name: "Pradipto Sengupta",
        position: "Head of CFX",
        img: "",
        logo: ""
    },
    {
        id: 5,
        name: "Santosh Patil",
        position: "Digital Design Lead",
        img: "",
        logo: ""
    },
    {
        id: 6,
        name: "Aditi Garg",
        position: "Creative Head",
        img: "",
        logo: ""
    },
    {
        id: 7,
        name: "Aditi Garg",
        position: "Creative Head",
        img: "",
        logo: ""
    },
    {
        id: 8,
        name: "Ishaan Dass",
        position: "Head of Design",
        img: "",
        logo: ""
    },
    {
        id: 10,
        name: "Chandra Surbhat",
        position: "Vice President, Global head - Digital Experience",
        img: "",
        logo: ""
    },
    {
        id: 11,
        name: "Mayur Chaudhary",
        position: "Global Head, UxDesign & Research, OLX Autos",
        img: "",
        logo: ""
    },


];


const showBoaData = (boaData) => {
    let listCard = `
    <div class="flex flex-col w-48 rounded-md bg-white border border-gray-300">
        <div class="flex w-full rounded-md h-48 bg-black">
            <img src=${boaData.img} alt=${boaData.name} class="flex h-full w-full object-contain">
        </div>
        <div class="flex flex-col gap-2 p-2 w-full">
            <strong class="flex w-full text-sm font-semibold">${boaData.name}</strong>
            <span class="text-xs h-10">${boaData.position}</span>
            <div class="flex w-full h-8 rounded-md bg-black">
                <img src=${boaData.logo} alt=${boaData.name} class="flex h-full object-contain">
            </div>
        </div>
    </div>                                         
    `;
    return listCard;
}

let output = boaData.map(showBoaData).join("");
let boaDataCards = document.getElementById("boa-container");
boaDataCards.innerHTML = output;