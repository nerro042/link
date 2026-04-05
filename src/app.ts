export function initApp() {
  const appRoot = document.querySelector<HTMLDivElement>("#app")!;
  appRoot.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div class="text-center max-w-md">
        <h1 class="text-3xl font-bold text-white mb-4">Welcome</h1>
        
        <p class="text-gray-300 text-lg mb-8">
          Go to the website shown in the video; click the button below
        </p>

        <button 
  id="swiftflash-btn"
  class="w-full px-6 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-xl hover:shadow-2xl transition transform hover:scale-105"
>
  SwiftFlash
</button>
      </div>
    </div>
  `;

  document.getElementById("swiftflash-btn")!.addEventListener("click", () => {
    window.open("https://www.swiftflash.pro/signup", "_blank");
  });
}
