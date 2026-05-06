export default function ConditionsFooter() {
    return (
        <section className="w-full bg-white border-t border-gray-100 py-10 px-4 sm:px-8 mt-8 overflow-hidden">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:space-x-12 text-center lg:text-left text-xs text-gray-500 font-light tracking-wide space-y-6 lg:space-y-0">

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-[#FAFAFA] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[#D4AF37]" strokeWidth="1.5">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span>Tarifas <span className="font-medium text-gray-800">NO incluyen IVA</span>.</span>
                </div>

                <div className="hidden lg:block w-px h-6 bg-gray-200"></div>

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-[#FAFAFA] group-hover:bg-[#00A896]/10 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[#00A896]" strokeWidth="1.5">
                            <path d="M17 21V19C17 16.7909 15.2091 15 13 15H11C8.79086 15 7 16.7909 7 19V21M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span>Niños mayores de 5 años pagan tarifa completa.</span>
                </div>

                <div className="hidden lg:block w-px h-6 bg-gray-200"></div>

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-[#FAFAFA] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[#D4AF37]" strokeWidth="1.5">
                            <path d="M4.5 10.5L3 13L4.5 15.5H7.5L9 13L7.5 10.5H4.5ZM19.5 10.5L18 13L19.5 15.5H22.5L24 13L22.5 10.5H19.5ZM12 4.5L10.5 7L12 9.5L13.5 7L12 4.5ZM12 16.5L10.5 19L12 21.5L13.5 19L12 16.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span>Se aceptan mascotas bajo condiciones previas.</span>
                </div>

            </div>
        </section>
    );
}