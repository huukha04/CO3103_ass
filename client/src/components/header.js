// header.js
export function createHeader() {
  const header = document.createElement("header");
  header.className =
    "flex h-[150px] w-full px-14 items-center justify-between bg-[#24305E] text-white shadow-header-bottom";

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

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.className =
    "flex items-center justify-center gap-5 text-white font-bold text-xl tracking-wide ";

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

  const btnWrapper = document.createElement("div");
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

  return header;
}
