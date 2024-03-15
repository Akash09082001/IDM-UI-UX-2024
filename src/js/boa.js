const boaData = [
    {
        id: 1,
        name: "Aman Mehta",
        position: "Head of Design, VP",
        img: "assets/Board-of-advisor/Aman-Mehta.webp",
        logo: "assets/Board-of-advisor/company-logo/dream-11.webp"
    },
    {
        id: 2,
        name: "Alok Kumar",
        position: "Director UX Design",
        img: "assets/Board-of-advisor/Alok-Kumar.webp",
        logo: "assets/Board-of-advisor/company-logo/myntra.webp"
    },
    {
        id: 3,
        name: "Vinod Kumar",
        position: "Head | CX & UX Design, GDC India",
        img: "assets/Board-of-advisor/Vinod-Kumar.webp",
        logo: "assets/Board-of-advisor/company-logo/samsung-sds.webp"
    },
    {
        id: 4,
        name: "Pradipto Sengupta",
        position: "Head of CFX",
        img: "assets/Board-of-advisor/Pradipto-Sengupta.webp",
        logo: "assets/Board-of-advisor/company-logo/dream-works.webp"
    },
    {
        id: 5,
        name: "Santosh Patil",
        position: "Digital Design Lead",
        img: "assets/Board-of-advisor/Santosh-Patil.webp",
        logo: "assets/Board-of-advisor/company-logo/bp.webp"
    },
    {
        id: 6,
        name: "Aditi Garg",
        position: "Creative Head",
        img: "assets/Board-of-advisor/Aditi-Garg.webp",
        logo: "assets/Board-of-advisor/company-logo/boat.webp"
    },
    {
        id: 7,
        name: "Ishaan Dass",
        position: "Head of Design",
        img: "assets/Board-of-advisor/Ishaan-Das.webp",
        logo: "assets/Board-of-advisor/company-logo/noise.webp"
    },
    {
        id: 8,
        name: "Chandra Surbhat",
        position: "Vice President, Global head - Digital Experience",
        img: "assets/Board-of-advisor/Chandra-Surbhat.webp",
        logo: "assets/Board-of-advisor/company-logo/wipro.webp"
    },
    {
        id: 9,
        name: "Mayur Chaudhary",
        position: "Global Head, UxDesign & Research, OLX Autos",
        img: "assets/Board-of-advisor/Mayur-Chaudhary.webp",
        logo: "assets/Board-of-advisor/company-logo/olx.webp"
    },


];


const showBoaData = (boaData) => {
    let listCard = `
    <div class="flex flex-col w-48 rounded-md bg-white border border-gray-300">
        <div class="flex w-full rounded-md h-48 boa-card">
            <img src=${boaData.img} alt=${boaData.name} class="flex h-full w-full object-contain">
        </div>
        <div class="flex flex-col gap-2 p-2 w-full">
            <strong class="flex w-full text-sm font-semibold">${boaData.name}</strong>
            <span class="text-xs h-10">${boaData.position}</span>
            <div class="flex w-full h-8 items-center justify-center rounded-md ">
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