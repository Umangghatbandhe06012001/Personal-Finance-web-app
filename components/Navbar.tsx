// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ModeToggle } from "@/components/ModeToggle"; // 
// import AddTransactionModal from "./AddTransactionModal";
// import { useState } from "react";
// import { Calendar, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//     <nav className="w-full h-16 px-6 flex items-center justify-between border-b shadow-sm bg-background">
//       {/* Left: Logo and App Name */}
//       <div className="text-[1.4rem] font-bold flex items-center gap-2 text-primary">
//         <Calendar className="w-[2rem] h-[2rem] mr-[5px] text-[#4f8dd3]" />
//         <span className="shiny-text">FinanceViz</span>
//       </div>


//       {/* Right: Actions */}
//       <div className="flex items-center gap-4 bigSc">
//         <Link href="/">
//           <Button variant="ghost" className="rounded-[5px] mr-[10px] w-[5rem]  h-[2rem] cursor-pointer border-none">Dashboard</Button>
//         </Link>

        
//         <p className="mr-[10px] h-[2rem]">
//           <AddTransactionModal />
//         </p>
        
//         <p className="h-[2rem]">
//           <ModeToggle /> 
//         </p>
//         {/* remove if not using dark mode */}
//       </div>
//       {/* mobile menu */}
//       <div className="mbWrapper relative">
//         <Button
//           variant="ghost"
//           className="p-2"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X className="w-5 h-5 cursor-pointer" /> : <Menu className="w-5 h-5 cursor-pointer" />}
//         </Button>
//       </div>
     
//       {/* mobile dropdown */}
//       {mobileMenuOpen && (
        


//         <div className="absolute top-[50px] right-[10px] w-[7rem] bg-[#000] shadow-md border-t border-[#333] rounded-[10px] z-50 flex flex-col py-4 dpDown">
//         <ul className="flex flex-col pl-[5px] pr-[5px]">
//           <li className="flex justify-center items-center mb-[10px] list-none bg-[#fff] dark:bg-[#2c2c2c]  cursor-pointer rounded-[10px]  h-[2rem]">
//             <Link className="w-[100%] h-[100%]" href="/" onClick={() => setMobileMenuOpen(false)}>
//               <Button
//                 variant="ghost"
//                 className="border-none  bg-red-100 cursor-pointer w-[100%] h-[100%] rounded-[10px]"
//               >
//                 Dashboard
//               </Button>
//             </Link>
//           </li>
//           <li className="flex justify-center items-center w-full h-[2rem] list-none bg-[#fff] dark:bg-[#2c2c2c]  cursor-pointer rounded-[10px] mb-[10px] content-center">
//             <AddTransactionModal />
//           </li>
//           <li className="flex justify-center items-center list-none h-[2rem] bg-[#fff] dark:bg-[#2c2c2c] cursor-pointer rounded-[10px]">
//             <ModeToggle />
//             {/* <span className="text-[.8rem] text-white">Mode</span> */}
//           </li>
//         </ul>
//       </div>

//       )}
//     </nav>
//   );
// }



"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import AddTransactionModal from "./AddTransactionModal";
import { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav
      aria-label="Primary Navigation"
      className="w-full h-16 px-6 flex items-center justify-between border-b shadow-sm bg-background"
    >
      {/* Left: Logo and App Name */}
      <div className="text-[1.4rem] font-bold flex items-center gap-2 text-primary">
        <Calendar className="w-[2rem] h-[2rem] mr-[5px] text-[#4f8dd3]" />
        <span className="shiny-text">FinanceViz</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 bigSc">
        <Link href="/">
          <Button
            variant="ghost"
            className="rounded-[5px] mr-[10px] w-[5rem]  h-[2rem] cursor-pointer border-none"
          >
            Dashboard
          </Button>
        </Link>

        <div className="mr-[10px] h-[2rem]">
          <AddTransactionModal />
        </div>

        <div className="h-[2rem]">
          <ModeToggle />
        </div>
      </div>

      {/* mobile menu */}
      <div className="mbWrapper relative">
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 cursor-pointer" />
          ) : (
            <Menu className="w-5 h-5 cursor-pointer" />
          )}
        </Button>
      </div>

      {/* mobile dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[50px] right-[10px] w-[7rem] bg-[#000] shadow-md border-t border-[#333] rounded-[10px] z-50 flex flex-col py-4 dpDown">
          <ul className="flex flex-col pl-[5px] pr-[5px]">
            <li className="flex justify-center items-center mb-[10px] list-none bg-[#fff] dark:bg-[#2c2c2c]  cursor-pointer rounded-[10px]  h-[2rem]">
              <Link
                className="w-[100%] h-[100%]"
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  className="border-none  bg-red-100 cursor-pointer w-[100%] h-[100%] rounded-[10px]"
                >
                  Dashboard
                </Button>
              </Link>
            </li>
            <li className="flex justify-center items-center w-full h-[2rem] list-none bg-[#fff] dark:bg-[#2c2c2c]  cursor-pointer rounded-[10px] mb-[10px] content-center">
              <AddTransactionModal />
            </li>
            <li className="flex justify-center items-center list-none h-[2rem] bg-[#fff] dark:bg-[#2c2c2c] cursor-pointer rounded-[10px]">
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
