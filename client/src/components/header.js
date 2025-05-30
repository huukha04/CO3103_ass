// header.js
export function createHeader(userAvatarUrl) {
  const header = document.createElement("header");
  header.className =
    "flex gap-2 h-[150px] w-full px-14 items-center justify-between bg-[#24305E] text-white shadow-header-bottom";

  // Logo
  const logoWrapper = document.createElement("div");
  logoWrapper.className = "flex items-center space-x-3 -translate-y-3";

  const logoLink = document.createElement("a");
  logoLink.href = "/client/src/homepage.html";

  const logoImg = document.createElement("img");
  logoImg.src = "/client/public/white_cine_icon_ticket.png";
  logoImg.alt = "Cine Ticket Logo";
  logoImg.className = "max-w-48 object-contain cursor-pointer";

  logoLink.appendChild(logoImg);
  logoWrapper.appendChild(logoLink);

  // Nav desktop (ẩn trên < xl)
  const nav = document.createElement("nav");
  nav.className = "hidden xl:flex";

  const ul = document.createElement("ul");
  ul.className =
    "flex items-center justify-center gap-5 text-white font-bold text-xl tracking-wide";

  const menuItems = [
    { text: "MEMBERSHIP", href: "#" },
    { text: "MOVIES", href: "#" },
    { text: "MOVIES SCHEDULE", href: "movie_schedule.html" },
    { text: "TICKET PRICES", href: "ticket_prices.html" },
  ];

  menuItems.forEach(({ text, href }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.className =
      "border-b-2 border-transparent hover:text-pink hover:border-pink transition-all duration-300 ease-in-out translate-y-3";
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Wrapper chứa nút hamburger + dropdown menu cho mobile
  const menuWrapper = document.createElement("div");
  menuWrapper.className = "relative xl:hidden flex items-center";

  // Nút hamburger
  const menuBtn = document.createElement("button");
  menuBtn.className =
    "flex items-center justify-center w-10 h-10 rounded-md border border-white";
  menuBtn.setAttribute("aria-label", "Toggle menu");
  menuBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  `;

  // Dropdown menu mobile
  const mobileMenu = document.createElement("nav");
  mobileMenu.className =
    "absolute top-full right-0 mt-1 bg-[#24305E] text-white rounded-md shadow-lg flex flex-col gap-4 p-4 hidden z-50 w-48";

  menuItems.forEach(({ text, href }) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.className = "block px-3 py-2 hover:bg-pink hover:text-[#1E2B5B] rounded";
    mobileMenu.appendChild(a);
  });

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  menuWrapper.appendChild(menuBtn);
  menuWrapper.appendChild(mobileMenu);

  // Avatar
  const btnWrapper = document.createElement("div");
  btnWrapper.className = "flex items-center gap-4";

  const avatar = document.createElement("img");
  avatar.src = userAvatarUrl || "/client/public/user-avt.png";
  avatar.alt = "User Avatar";
  avatar.className =
    "w-14 rounded-full object-cover cursor-pointer border-2 border-white";

  btnWrapper.appendChild(avatar);

  // Append vào header
  header.appendChild(logoWrapper);
  header.appendChild(nav);
  header.appendChild(menuWrapper);
  header.appendChild(btnWrapper);

  return header;

  /*
  btnWrapper.className = "flex items-center gap-4";

  const btnLogin = document.createElement("button");
  btnLogin.textContent = "Login";
  btnLogin.className =
    "border border-white w-[150px] h-[48px] p-2 rounded-lg text-white text-2xl hover:bg-white hover:text-[#1E2B5B] transition";

  btnLogin.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  const btnSignUp = document.createElement("a");
  btnSignUp.textContent = "Sign up";
  btnSignUp.href = "register.html";
  btnSignUp.className =
    "items-center justify-center p-2 bg-pink w-[150px] h-[48px] rounded-lg text-[#1E2B5B] text-2xl hover:bg-[#FF8A94] transition inline-block text-center cursor-pointer";

  btnWrapper.appendChild(btnLogin);
  btnWrapper.appendChild(btnSignUp);
  

  header.appendChild(logoWrapper);
  header.appendChild(nav);
  header.appendChild(btnWrapper);

  return header;*/
}
