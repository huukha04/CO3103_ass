// popup_payment.js
export function showPopupPayment() {
  if (!document.getElementById("popup-payment")) {
    const popup = document.createElement("div");
    popup.id = "popup-payment";
    popup.className =
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

    popup.innerHTML = `
        <div class="bg-[#1E2B5B] rounded-lg p-8 w-80 flex flex-col items-center space-y-8 shadow-lg animate-fade-scale-in">
          <h2 class="text-white text-2xl font-bold">Payment Success</h2>
          <div class="relative flex items-center justify-center w-24 h-24">
            <!-- Vòng tròn ping -->
            <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping-once"></span>

            <div class="relative bg-green-500 rounded-full w-24 h-24 flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                    class="animate-drawCheck"
                    style="stroke-dasharray: 40; stroke-dashoffset: 40;"
                />
                </svg>
            </div>
            </div>


          <button onclick="window.location.href = 'view_ticket.html';" id="btn-view-ticket" class="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 rounded-md transition-colors">View Ticket</button>
          <button onclick="window.location.href = 'homepage.html';" id="btn-back-homepage" class="w-full border border-red-400 text-white font-semibold py-3 rounded-md hover:bg-red-600 hover:border-red-600 transition-colors">Back to Homepage</button>
        </div>
      `;

    document.body.appendChild(popup);

    popup.querySelector("#btn-view-ticket").addEventListener("click", () => {
      popup.remove();
    });
    popup.querySelector("#btn-back-homepage").addEventListener("click", () => {
      popup.remove();
    });
  } else {
    document.getElementById("popup-payment").style.display = "flex";
  }
}
