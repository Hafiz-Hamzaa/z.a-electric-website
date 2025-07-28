const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const products = [
  {
    name: "LED Light Bulb",
    image: "https://media.istockphoto.com/id/1451866244/photo/innovation-through-ideas-and-inspiration-ideas-human-hand-holding-light-bulb-to-illuminate.jpg?b=1&s=612x612&w=0&k=20&c=nZUvRdcE256qbd4zqiUH61EuXBagHYfeV17EzhqSC9I=",
    price: "$5.99",
    description: "Energy-efficient LED bulb with 10,000-hour life."
  },
  {
    name: "Ceiling Fan",
    image: "https://media.istockphoto.com/id/1398782425/photo/close-up-shot-of-a-hand-using-a-remote-control-to-operate-a-ceiling-fan-mounted-in-a-house-on.jpg?b=1&s=612x612&w=0&k=20&c=PBm35IQSlwERS8BvsevZFg06P7hE4TYRrzl0cBrux6A=",
    price: "$39.99",
    description: "Powerful ceiling fan with 3-speed settings."
  },
  {
    name: "Smart Switch",
    image: "https://media.istockphoto.com/id/1302383468/photo/close-up-finger-turns-on-the-light-on-the-touch-switch-a-white-modern-light-switch-on-a-white.jpg?b=1&s=612x612&w=0&k=20&c=Ty9Nm-cl96JGAWhsij975bRtqyj2O-_qRJJpTAJ4cr8=",
    price: "$14.99",
    description: "WiFi-enabled smart switch for remote control."
  },
  {
    name: "Electric Drill",
    image: "https://media.istockphoto.com/id/1431914113/photo/close-up-of-drilling-hole-to-material.jpg?b=1&s=612x612&w=0&k=20&c=SG84ePRj9P6wLTkolUvcYVJ50NhV-dBCn3iK6qFOTYI=",
    price: "$49.99",
    description: "Cordless electric drill with rechargeable battery."
  },
  {
    name: "Extension Cord",
    image: "https://media.istockphoto.com/id/944464366/photo/woman-plugging-the-wire-to-the-outlet.jpg?b=1&s=612x612&w=0&k=20&c=OAktA6zS9WeuSzPLnoG91rsdzTV-Ev5k-KenjRF2IFM=",
    price: "$7.50",
    description: "Heavy-duty extension cord with 3 sockets."
  },
  {
    name: "Tube Light",
    image: "https://media.istockphoto.com/id/927346786/photo/led-tube-lights-on-black-office-ceiling-minimal-loft-design.jpg?b=1&s=612x612&w=0&k=20&c=gcGEGa4ZrlATGxxzjmydDM1moDTQSGE4DeHh_i0O4SM=",
    price: "$8.99",
    description: "Bright white 36W LED tube light for offices."
  },
  {
    name: "Electric Kettle",
    image: "https://media.istockphoto.com/id/1449302707/photo/caucasian-female-office-employee-using-an-electric-kettle-at-work.jpg?b=1&s=612x612&w=0&k=20&c=fgJqClgjqsLGVGjSHHbpFY_9V2vkoPcVTvIyL1yuBys=",
    price: "$25.00",
    description: "1.5L automatic shut-off electric kettle."
  },
  {
    name: "Circuit Breaker",
    image: "https://media.istockphoto.com/id/1137074478/photo/circuit-breaker.jpg?b=1&s=612x612&w=0&k=20&c=lvskltTx4gvJuqD7As2vAZKTgwbofy02mJCCd-0b1Oc=",
    price: "$11.00",
    description: "Reliable 20A circuit breaker for safety."
  },
  {
    name: "Multimeter",
    image: "https://media.istockphoto.com/id/1403779832/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.jpg?b=1&s=612x612&w=0&k=20&c=GIvK6PkyWR7Apbws1wMUv91E8Ulw7CfvjenWflbA7EU=",
    price: "$18.49",
    description: "Digital multimeter for accurate measurements."
  },
  {
    name: "Wire Cutter",
    image: "https://media.istockphoto.com/id/92041623/photo/wire-cutter.jpg?b=1&s=612x612&w=0&k=20&c=-JbFizUp4Xlb2vo7QAMm3hTb7V1Yy0SaTDFtExm84mU=",
    price: "$6.99",
    description: "Durable and sharp wire cutter for electricians."
  },
  {
    name: "Plug Socket",
    image: "https://media.istockphoto.com/id/1429888215/photo/insert-the-power-plug-into-the-wall-outlet.jpg?b=1&s=612x612&w=0&k=20&c=J8ay_URgy4lOrpcUiBqIlzs65kWW8RZTmF3qAdvidQ8=",
    price: "$2.99",
    description: "Universal plug socket with child safety lock."
  },
  {
    name: "Power Strip",
    image: "https://media.istockphoto.com/id/2150096363/photo/power-strip-socket-with-connected-plugs.jpg?b=1&s=612x612&w=0&k=20&c=7HhZuak_EAImLEWjFlc5FmeMoCHsSGUZcSymlBbWU7M=",
    price: "$9.99",
    description: "6-outlet power strip with surge protection."
  },
  {
    name: "LED Panel Light",
    image: "https://media.istockphoto.com/id/1303993359/photo/square-lamps-on-the-tiled-ceiling-closeup.jpg?b=1&s=612x612&w=0&k=20&c=exUJRtf2U68LoE7lEmj2icSQhxtw-ggMOP7FBabwhRU=",
    price: "$13.99",
    description: "Slim LED panel light for modern ceilings."
  },
  {
    name: "Hand Torch",
    image: "https://media.istockphoto.com/id/492001716/photo/man-restoring-power-on-circuit-breaker-after-electricity-outage.jpg?s=612x612&w=0&k=20&c=Ii7RjW3bi1FlEiy9Qp4i6H8QxDgUKuwu3uYNpqNP5DE=",
    price: "$4.49",
    description: "Rechargeable hand torch with strong beam."
  },
  {
    name: "Battery Pack",
    image: "https://media.istockphoto.com/id/1570041396/photo/lithium-ion-high-voltage-battery-component-for-electric-vehicle-or-hybrid-car-battery-module.jpg?b=1&s=612x612&w=0&k=20&c=nhLIlt-B0I7nQdV8SLGO4eLlntScvuEOY6BzAqd77rk=",
    price: "$15.99",
    description: "Lithium-ion battery pack for backup power."
  },
  {
    name: "Panel D.B Box",
    image: "https://media.istockphoto.com/id/1460247573/photo/electrical-panel-square-box-in-office-area.jpg?s=612x612&w=0&k=20&c=J-had1MafouMppv6ZD4BKV0f8gYuOL0j3BeSBZAl6XM=",
    price: "$42.00",
    description: "Durable TPN D.B Box for safe power distribution with metal body and double door."
  },
  {
    name: "Switch & Socket Sheet",
    image: "https://tse2.mm.bing.net/th/id/OIP.cF8zc7a80h6p-CuqDcBVwQHaEF?pid=Api&P=0&h=220",
    price: "$7.50",
    description: "High-quality modular switch plate with elegant design and sturdy finish."
  },
  {
    name: "Copper Coil 2mm",
    image: "https://media.istockphoto.com/id/1209510074/photo/close-up-flat-twisted-copper-wire-at-a-factory.jpg?b=1&s=612x612&w=0&k=20&c=4-4Sa2Fflx59jKIwaXyRQvA-sLsiZq4Fqp1QMl-4fO4=",
    price: "$25.99",
    description: "Premium 2mm copper coil for motor and transformer windings, ISI certified."
  },
  {
    name: "Voltmeter Indicator Light",
    image: "https://media.istockphoto.com/id/505057836/photo/control-room.jpg?s=612x612&w=0&k=20&c=6P8IYqoH3Tin8kNz9Xo2PVRbXzshdegy3vMgJPxIFJQ=",
    price: "$14.99",
    description: "Digital voltmeter indicator with LED display for panel boards, AC 220V."
  },
  {
    name: "Torch",
    image: "https://media.istockphoto.com/id/927927856/photo/pocket-led-flashlight-lies-on-a-sand.jpg?b=1&s=612x612&w=0&k=20&c=vI-Uj_57bfPkfNrBlv_PqzBgzStmUXjBJNMFhMuBTGU=",
    price: "$50",
    description: "Bright LED torch for indoor and outdoor use."
  },
  {
    name: "PVC Electrical Tape",
    image: "https://media.istockphoto.com/id/1489202810/photo/insulating-electrical-wires-with-electrical-tape.jpg?b=1&s=612x612&w=0&k=20&c=TGM8p3qu8QH5TtetFTxSRpvESW8lXv4Pat8omq4Ruak=",
    price: "$30",
    description: "High-insulation tape ideal for wire wrapping."
  },
  {
    name: "Digital Clamp Meter",
    image: "https://media.istockphoto.com/id/950050388/photo/engineer-to-use-digital-clip-ampere-meter-clamp-to-power-cable.jpg?b=1&s=612x612&w=0&k=20&c=7PW72OF-BOSV1tWn76g4_wCW5VIYq_nO3nWkCpXOpuE=",
    price: "$100",
    description: "AC/DC current clamp meter with backlit display."
  },
  {
    name: "LED Flood Light",
    image: "https://media.istockphoto.com/id/1044731946/photo/led-garden-spotlight.jpg?b=1&s=612x612&w=0&k=20&c=0Xv8XHR5ljgn-hecddFIBBZ58raMcbkyUVB-ARcG1ec=",
    price: "$300",
    description: "Waterproof 100W LED floodlight for outdoor areas."
  },
  {
  name: "Electric Bell",
  image: "https://media.istockphoto.com/id/1555924348/photo/entrance-doorbell-in-a-multi-apartment-building-with-a-video-surveillance-camera-on-a-dark.jpg?b=1&s=612x612&w=0&k=20&c=ZzE2_Wy1hUv10ae2XivGtKJZidw4v-CwhSojeFVCH-A=",
  price: "$320",
  description: "Durable electric door bell with loud sound and easy installation."
}
];


const searchInput = document.querySelector(".product-search-input");
const productCardsContainer = document.querySelector(".product-cards-container");

function renderProducts(productArray) {
  productCardsContainer.innerHTML = ""; // Clear previous cards

  if (productArray.length === 0) {
    productCardsContainer.innerHTML = "<p style='color: #999;'>No products found</p>";
    return;
  }

  const animations = ['fade-up', 'fade-down', 'zoom-in', 'flip-left', 'fade-right', 'fade-left'];

  productArray.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    // 🎯 Add random AOS animation
    const randomAOS = animations[Math.floor(Math.random() * animations.length)];
    card.setAttribute("data-aos", randomAOS);
    card.setAttribute("data-aos-duration", "3000");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price}</strong>
      </div>
    `;

    productCardsContainer.appendChild(card);
  });
}


searchInput.addEventListener("input", function () {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().startsWith(query.toLowerCase())
  );

  renderProducts(filtered);
});

renderProducts(products);

