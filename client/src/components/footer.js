export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "p-14 bg-darkgray text-white w-full";

  const footerWrapper = document.createElement("div");
  footerWrapper.className = "max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-x-8";

  // logo & address
  const leftSection = document.createElement("div");
  leftSection.className = "flex flex-col space-y-4 max-w-xs";

  const logoWrapper = document.createElement("div");
  logoWrapper.className = "flex items-center space-x-3";

  const logoLink = document.createElement("a");
  logoLink.href = "/client/src/homepage.html";

  const logoImg = document.createElement("img");
  logoImg.src = "/client/public/white_icon_cine_ticket.png";
  logoImg.alt = "Cine Ticket Logo";
  logoImg.className = "max-w-48 object-contain cursor-pointer";

  logoLink.appendChild(logoImg);
  logoWrapper.appendChild(logoLink);

  const address = document.createElement("span");
  address.textContent = "Paxsky Ung Van Khiem";
  address.className = "text-2xl font-bold whitespace-nowrap";

  const workingHours = document.createElement("p");
  workingHours.textContent = "Open 24/7";
  workingHours.className = "text-sm font-bold";

  const phone = document.createElement("p");
  phone.textContent = "+84 387 847 976";
  phone.className = "text-sm font-bold";

  leftSection.appendChild(logoWrapper);
  leftSection.appendChild(address);
  leftSection.appendChild(workingHours);
  leftSection.appendChild(phone);

  // Contact Us
  const middleSection = document.createElement("div");
  middleSection.className = "flex flex-col space-y-4 max-w-xs mt-20";

  const contactTitle = document.createElement("h3");
  contactTitle.textContent = "Contact Us";
  contactTitle.className = "text-3xl font-bold";

  const contactPhone = document.createElement("p");
  contactPhone.textContent = "Hotline: 0387847976";
  contactPhone.className = "text-lg font-bold";

  const customerService = document.createElement("p");
  customerService.textContent = "Customer service";
  customerService.className = "text-lg font-bold";

  

  middleSection.appendChild(contactTitle);
  middleSection.appendChild(contactPhone);
  middleSection.appendChild(customerService);

  const socialWrapper = document.createElement("div");
  socialWrapper.className = "flex space-x-4 mt-4";

  // social links
  const socials = [
    {
      href: "#",
      src: "/client/public/facebook.svg",
      alt: "Facebook",
    },
    {
      href: "#",
      src: "/client/public/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "#",
      src: "/client/public/x.svg",
      alt: "Twitter",
    },
    {
      href: "https://tiktok.com/@yourpage",
      src: "/client/public/tiktok.svg",
      alt: "TikTok",
    },
    {
      href: "https://youtube.com/yourchannel",
      src: "/client/public/youtube.svg",
      alt: "YouTube",
    },
  ];

  socials.forEach(({ href, src, alt }) => {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "hover:opacity-75 transition-opacity";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "w-6 h-6";

    a.appendChild(img);
    socialWrapper.appendChild(a);
  });

  middleSection.appendChild(socialWrapper);

  // Email subscription
  const rightSection = document.createElement("div");
  rightSection.className = "flex flex-col space-y-4 max-w-md mt-20";

  const emailLabel = document.createElement("p");
  emailLabel.className = "mb-2";

  const line1 = document.createElement("span");
  line1.textContent = "Enter email";
  line1.className = "block text-2xl font-bold";

  const line2 = document.createElement("span");
  line2.textContent = "to receive promotional information";
  line2.className = "block text-lg";

  emailLabel.appendChild(line1);
  emailLabel.appendChild(line2);

  const emailInputWrapper = document.createElement("div");
  emailInputWrapper.className = "relative flex";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Enter your email here";
  emailInput.className =
    "px-4 py-4 rounded-2xl lg:pr-32 focus:outline-none focus:ring-2 focus:ring-pink flex-grow font-semibold";
  // pr-32 để tạo khoảng trống bên phải cho button đè lên

  const subscribeButton = document.createElement("button");
  subscribeButton.textContent = "Subscribe";
  subscribeButton.className =
    "absolute top-0 right-0 transform  bg-coral text-white font-semibold px-6 py-4 rounded-2xl hover:bg-hover transition-colors";

  emailInputWrapper.appendChild(emailInput);
  emailInputWrapper.appendChild(subscribeButton);


  rightSection.appendChild(emailLabel);
  rightSection.appendChild(emailInputWrapper);
  
  function updatePlaceholder() {
    if (window.innerWidth < 640) {
      // mobile dưới 640px (Tailwind sm)
      emailInput.placeholder = "Enter email";
    } else {
      emailInput.placeholder = "Enter your email here";
    }
  }

  // Gọi 1 lần khi load trang
  updatePlaceholder();

  // Lắng nghe thay đổi kích thước
  window.addEventListener("resize", updatePlaceholder);

  footerWrapper.appendChild(leftSection);
  footerWrapper.appendChild(middleSection);
  footerWrapper.appendChild(rightSection);

  footer.appendChild(footerWrapper);

  return footer;
}
