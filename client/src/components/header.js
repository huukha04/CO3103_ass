import '../styles/input.css'
import '../styles/output.css'

import logo from '/imgs/white_cine_icon_ticket.png'

import {checkSession} from '../api/auth.js'
import {getShowing} from '../api/movie.js'

const header = `
<header
	class="flex h-[150px] w-full items-center justify-between bg-[#24305E] text-white shadow-header-bottom">
	<a class="ml-[100px] h-[68px] w-[200px]" href="/">
		<img src=${logo} alt="Cinema Logo" className="" />
	</a>

	<div class="flex h-[20px] w-[606px] items-center justify-center gap-[20px] font-roboto text-[20px] font-bold text-white">
		<a href="#" class="hover:text-gray-300">MEMBER</a>
		<a href="#" class="hover:text-gray-300">MOVIES</a>
		<a href="/src/pages/movie_schedule.html" class="hover:text-gray-300">MOVIES SCHEDULE</a>
		<a href="#" class="hover:text-gray-300">TICKET PRICES</a>
	</div>`


const headerNoneLog = `
	<div class="mr-[100px] flex h-[48px] w-[255px] gap-6 font-roboto text-[24px] font-normal text-white">
		<button class="flex h-[48px] w-auto min-w-[100px] items-center justify-center gap-[10px] rounded-xl border border-white bg-transparent p-[10px] text-white hover:bg-white hover:text-[#24305E]">
			Login
		</button>

		<button class="flex h-[48px] w-auto min-w-[100px] items-center justify-center gap-[10px] rounded-xl border border-white bg-[#ffb5bf] p-[10px] text-[#24305E] hover:bg-pink-500">
			Sign up
		</button>
	</div>
</header>`;
const headerIsLog = `
	<div class="mr-[100px] flex justify-center items-center" >
		<div class="flex relative justify-center items-center h-[70px] w-[70px] bg-[#ffb5bf] rounded-full">
		<div class="flex absolute self-center h-[42px] w-[42px] items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[42px] h-[42px]">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
			</svg>       
		</div>
		</div>
	</div>
</header>`;

(async () => {
	const show = await getShowing();
	const session = await checkSession();
	document.querySelector('#header').innerHTML = session.loggedIn
		?  header + headerIsLog
		: header + headerNoneLog;
})();