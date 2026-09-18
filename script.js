/* =====================================================
   RESTAURANT SETTINGS
   عدّل الجزء ده فقط عند تغيير العميل
===================================================== */

const restaurant = {

    name: "Pizza House",

    category: "Pizza & Italian Food",

    heroTitle: "ألذ بيتزا في كل لقمة",

    heroDescription:
        "بيتزا طازة بمكونات مختارة وطعم مميز.",


    /* =========================
       ABOUT
    ========================= */

    aboutTitle:
        "بيتزا طازة بطعم إيطالي مميز 🍕",

    aboutDescription:
        "في Pizza House بنقدملك بيتزا طازة بمكونات مختارة، عجينة محضرة بعناية، وتشكيلة متنوعة تناسب كل الأذواق.",


    /* =========================
       CONTACT
    ========================= */

    phoneDisplay: "01012345678",

    phoneLink: "tel:+201012345678",

    whatsappNumber: "201023713311",


    /* =========================
       IMAGES
    ========================= */

    heroImage: "images/hero.jpg",

    aboutImage: "images/about.jpg",


    /* =========================
       WHY CHOOSE US
    ========================= */

    features: [

        {
            icon: "🍕",

            title: "بيتزا طازة",

            text:
                "بنجهز البيتزا بمكونات طازة وعجينة محضرة بعناية."
        },


        {
            icon: "🧀",

            title: "جبنة ومكونات مميزة",

            text:
                "اختيارات متنوعة من الجبنة والتوبينج لكل الأذواق."
        },


        {
            icon: "🔥",

            title: "طعم خارج من الفرن",

            text:
                "بيتزا ساخنة ومجهزة وقت الطلب عشان توصلك بأفضل جودة."
        },


        {
            icon: "🚗",

            title: "توصيل سريع",

            text:
                "اطلب وجبتك واستمتع بيها في أسرع وقت."
        }

    ],


    /* =========================
       MENU
    ========================= */

    menu: [

        {
            name: "Margherita Pizza",

            description:
                "صلصة طماطم، موزاريلا، ريحان",

            price:
                "180 جنيه",

            image:
                "images/pizaa.jpg"
        },


        {
            name: "Chicken Pizza",

            description:
                "فراخ، موزاريلا، خضار وتتبيلة مميزة",

            price:
                "220 جنيه",

            image:
                "images/pizaa ch.jpg"
        },


        {
            name: "Mix Cheese Pizza",

            description:
                "تشكيلة جبن مميزة لمحبي الجبنة",

            price:
                "250 جنيه",

            image:
                "images/mix-cheese.jpg"
        }

    ],


    /* =========================
       OFFERS
    ========================= */

    offers: [

        {
            title:
                "Family Offer",

            description:
                "2 Pizza + 1.25L Pepsi",

            price:
                "499 جنيه"
        },


        {
            title:
                "Friends Offer",

            description:
                "3 Pizza + Fries",

            price:
                "699 جنيه"
        },


        {
            title:
                "Solo Offer",

            description:
                "Pizza + Drink",

            price:
                "249 جنيه"
        }

    ],


    /* =========================
       BRANCHES
    ========================= */

    branches: [

        {
            name:
                "فرع مدينة نصر",

            address:
                "شارع مكرم عبيد - مدينة نصر",

            map:
                "https://maps.google.com"
        },


        {
            name:
                "فرع التجمع",

            address:
                "التجمع الخامس - القاهرة الجديدة",

            map:
                "https://maps.google.com"
        },


        {
            name:
                "فرع مصر الجديدة",

            address:
                "شارع الحجاز - مصر الجديدة",

            map:
                "https://maps.google.com"
        }

    ]

};


/* =====================================================
   BASIC INFORMATION
===================================================== */

document.title =
    `${restaurant.name} | ${restaurant.category}`;


document.getElementById("brandName").textContent =
    restaurant.name;


document.getElementById("heroCategory").textContent =
    restaurant.category;


document.getElementById("heroTitle").textContent =
    restaurant.heroTitle;


document.getElementById("heroDescription").textContent =
    restaurant.heroDescription;


document.getElementById("aboutTitle").textContent =
    restaurant.aboutTitle;


document.getElementById("aboutDescription").textContent =
    restaurant.aboutDescription;


document.getElementById("aboutImage").src =
    restaurant.aboutImage;


document.getElementById("aboutImage").alt =
    `عن ${restaurant.name}`;


document.getElementById("footerBrand").textContent =
    restaurant.name;


document.getElementById("footerBrand2").textContent =
    restaurant.name;


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappLink =
    `https://wa.me/${restaurant.whatsappNumber}`;


document.getElementById("heroWhatsapp").href =
    whatsappLink;


document.getElementById("ctaWhatsapp")
    ?.setAttribute("href", whatsappLink);


document.getElementById("footerWhatsapp").href =
    whatsappLink;


/* =====================================================
   PHONE
===================================================== */

document.getElementById("ctaPhone").href =
    restaurant.phoneLink;


document.getElementById("footerPhone").href =
    restaurant.phoneLink;


document.getElementById("footerPhone").textContent =
    restaurant.phoneDisplay;


/* =====================================================
   FEATURES
===================================================== */

const featuresGrid =
    document.getElementById("featuresGrid");


restaurant.features.forEach(feature => {

    featuresGrid.innerHTML += `

        <article class="feature-card">

            <div class="feature-icon">
                ${feature.icon}
            </div>

            <h3>
                ${feature.title}
            </h3>

            <p>
                ${feature.text}
            </p>

        </article>

    `;

});


/* =====================================================
   MENU
===================================================== */

const menuGrid =
    document.getElementById("menuGrid");


restaurant.menu.forEach((item, index) => {

    menuGrid.innerHTML += `

        <article class="card">

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="card-content">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="price">
                    ${item.price}
                </div>

                <button
                    class="btn btn-primary add-to-cart"
                    data-index="${index}"
                >
                    أضف للسلة
                </button>

            </div>

        </article>

    `;

});


/* =====================================================
   OFFERS
===================================================== */

const offersGrid =
    document.getElementById("offersGrid");


restaurant.offers.forEach(offer => {

    offersGrid.innerHTML += `

        <article class="offer-card">

            <h3>
                ${offer.title}
            </h3>

            <p>
                ${offer.description}
            </p>

            <div class="offer-price">
                ${offer.price}
            </div>

        </article>

    `;

});


/* =====================================================
   BRANCHES
===================================================== */

const branchesGrid =
    document.getElementById("branchesGrid");


restaurant.branches.forEach(branch => {

    branchesGrid.innerHTML += `

        <article class="branch-card">

            <h3>
                ${branch.name}
            </h3>

            <p>
                ${branch.address}
            </p>

            <a
                href="${branch.map}"
                class="btn btn-primary"
                target="_blank"
                rel="noopener"
            >
                فتح الخريطة
            </a>

        </article>

    `;

});


/* =====================================================
   CART
===================================================== */

let cart = [];


function addToCart(index) {

    const product =
        restaurant.menu[index];


    const existingProduct =
        cart.find(
            item => item.index === index
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            index: index,

            name: product.name,

            price: parseInt(
                product.price.replace(/\D/g, "")
            ),

            quantity: 1

        });

    }


    updateCart();

    document
        .getElementById("order")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");


    const cartCount =
        document.getElementById("cartCount");


    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                السلة فاضية

            </p>

        `;


        cartCount.textContent = "0";

        cartTotal.textContent = "0 جنيه";

        return;

    }


    let total = 0;

    let itemsCount = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;

        itemsCount += item.quantity;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${item.price} جنيه ×
                        ${item.quantity}
                    </p>

                </div>


                <div class="cart-controls">

                    <button
                        onclick="changeQuantity(${index}, -1)"
                    >
                        -
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(${index}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

        `;

    });


    cartCount.textContent =
        itemsCount;


    cartTotal.textContent =
        `${total} جنيه`;

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(index, change) {

    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


/* =====================================================
   ADD TO CART
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "add-to-cart"
            )
        ) {

            const index =
                Number(
                    event.target.dataset.index
                );


            addToCart(index);

        }

    }
);


/* =====================================================
   SEND ORDER TO WHATSAPP
===================================================== */

document
    .getElementById("sendOrder")
    .addEventListener(
        "click",
        function() {

            const customerName =
                document
                    .getElementById("customerName")
                    .value
                    .trim();


            const customerPhone =
                document
                    .getElementById("customerPhone")
                    .value
                    .trim();


            const customerAddress =
                document
                    .getElementById("customerAddress")
                    .value
                    .trim();


            if (cart.length === 0) {

                alert(
                    "من فضلك أضف منتج للسلة"
                );

                return;

            }


            if (!customerName) {

                alert(
                    "من فضلك اكتب اسمك"
                );

                return;

            }


            if (!customerPhone) {

                alert(
                    "من فضلك اكتب رقم الهاتف"
                );

                return;

            }


            if (!customerAddress) {

                alert(
                    "من فضلك اكتب العنوان"
                );

                return;

            }


            let message =
                `🍕 طلب جديد من موقع ${restaurant.name}\n\n`;


            message +=
                `👤 الاسم: ${customerName}\n`;


            message +=
                `📞 الهاتف: ${customerPhone}\n`;


            message +=
                `📍 العنوان: ${customerAddress}\n\n`;


            message +=
                `🛒 تفاصيل الطلب:\n`;


            let total = 0;


            cart.forEach(item => {

                const itemTotal =
                    item.price * item.quantity;


                total += itemTotal;


                message +=
                    `• ${item.name} × ${item.quantity} = ${itemTotal} جنيه\n`;

            });


            message +=
                `\n💰 الإجمالي: ${total} جنيه`;


            const whatsappUrl =
                `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappUrl,
                "_blank"
            );

        }
    );


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");


const nav =
    document.getElementById("nav");


menuToggle.addEventListener(
    "click",
    function() {

        nav.classList.toggle("active");

    }
);


/* =====================================================
   CART BUTTON
===================================================== */

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("order")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );